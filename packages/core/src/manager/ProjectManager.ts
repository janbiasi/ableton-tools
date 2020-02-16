import { resolve } from 'path';
import { readFile, writeFile, mkdirp } from 'fs-extra';
import { IProjectSchema, IProjectBackupSchema, IProjectMetaSchema } from '../schema/Project';
import { ProjectNotFoundError, ProjectMetaNotFoundError, BackupRestorationError } from '../errors';
import { findLiveSetsInFolder, fileExists, createArchive, unpackArchive } from '../utils';
import { Database, IDatabaseEntry } from '../Database';
import { ENCODING } from '../const';
import { Manager } from './Manager';

export const PROJECT_MANAGER_META_FILE = '.ableton-tools.meta.json';

export class ProjectManager extends Manager {
	private registry: Database<IProjectSchema>;
	private backups: Database<IProjectBackupSchema>;

	constructor(root: string = '.') {
		super('projects', root);

		this.registry = new Database({
			root,
			name: 'projects',
			fileName: 'registry',
		});

		this.backups = new Database({
			root,
			name: 'backups',
			fileName: 'backups',
		});
	}

	public async init() {
		// required as first action for every manager
		this.prepare();

		// initialize database contents
		await this.registry.init();
		await this.backups.init();

		// initialize backup directory
		await mkdirp(this.backupsPath);
	}

	public async syncToDatabase() {
		await this.registry.syncToDatabase();
		await this.backups.syncToDatabase();
	}

	public async syncFromDatabase() {
		await this.registry.syncFromDatabase();
		await this.backups.syncFromDatabase();
	}

	public async reset() {
		await this.registry.reset();
		await this.backups.reset();
	}

	public async save(project: Pick<IProjectSchema, 'name' | 'path'>) {
		const containingLiveSets = await findLiveSetsInFolder(resolve(project.path));
		const projectInfoFile = resolve(project.path, PROJECT_MANAGER_META_FILE);
		const result = await this.registry.save({
			...project,
			sets: containingLiveSets,
		});

		await writeFile(
			projectInfoFile,
			JSON.stringify(
				{
					timestamp: result.timestamp,
					name: result.data.name,
					ref: result.id,
					sets: containingLiveSets,
				} as IProjectMetaSchema,
				null,
				2
			)
		);

		await this.registry.syncToDatabase();

		return result;
	}

	public async backup(projectOrId: string | IDatabaseEntry<IProjectSchema>, description = '') {
		const projectId = typeof projectOrId === 'string' ? projectOrId : projectOrId.id;
		const project = this.getById(projectId);

		if (!project) {
			throw ProjectNotFoundError.fromBackup(projectOrId);
		}

		let targetVersion = 1;

		const existingBackup = this.backups.getOne((entry) => entry.data.ref === project.id);
		if (existingBackup) {
			// increased version bump
			targetVersion += existingBackup.data.version;
		}

		const compressedBackup = await createArchive({
			in: project.data.path,
			out: this.backupsPath,
			name: `${project.data.name} - Backup v${targetVersion}`,
		});

		await this.backups.save({
			description,
			ref: project.id,
			name: `${project.data.name} v${targetVersion}`,
			version: targetVersion,
			path: compressedBackup.target,
		});

		return {
			archive: compressedBackup,
			version: targetVersion,
		};
	}

	public async restore(projectOrId: string | IDatabaseEntry<IProjectSchema>, target: string, version?: number) {
		const projectId = typeof projectOrId === 'string' ? projectOrId : projectOrId.id;
		const { backups, versions } = this.getBackupsByRef(projectId);

		if (!version) {
			// set default version as latest save
			version = versions[versions.length - 1];
		}

		const backup = backups.find((backup) => backup.data.version === version);

		if (!backup) {
			throw BackupRestorationError.invalidVersion(version, versions);
		}

		await unpackArchive({
			target,
			file: backup.data.path,
		});

		return {
			backup,
			versions
		};
	}

	public getByName(name: string) {
		return this.registry.getOne((entry) => entry.data.name === name);
	}

	public getById(id: string) {
		return this.registry.getOne((entry) => entry.id === id);
	}

	public async getByPath(path: string) {
		const targetFile = resolve(path, PROJECT_MANAGER_META_FILE);
		const metaFileExists = await fileExists(targetFile);

		if (!metaFileExists) {
			throw new ProjectMetaNotFoundError(path);
		}

		try {
			const rawContents = await readFile(targetFile, ENCODING);
			const contents: IProjectMetaSchema = JSON.parse(rawContents);

			return contents;
		} catch (err) {
			throw err;
		}
	}

	public getBackupsByRef(projectId: string) {
		const backups = this.backups.get((entry) => entry.data.ref === projectId);
		const versions = backups.map((backup) => backup.data.version).sort();

		return {
			backups,
			versions
		}
	}

	private get backupsPath() {
		return resolve(this.root, 'backups');
	}
}

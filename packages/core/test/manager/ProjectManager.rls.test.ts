import { resolve } from 'path';
import { readFile } from 'fs-extra';
import { ProjectManager } from '../../src/manager';
import { IDatabaseContent } from '../../src/Database';
import { ENCODING } from '../../src/const';
import { TEMP_TARGET_DIR, FIXTURES_DIR } from '../const';

const ROOT_DIR = resolve(TEMP_TARGET_DIR, 'project-manager');

const getTestContents = async <T extends any>(name: string): Promise<IDatabaseContent<T> & { size: number }> => {
	const finalPath = resolve(ROOT_DIR, `${name}.json`);
	const rawContent = await readFile(finalPath, ENCODING);
	const content: IDatabaseContent<any> = JSON.parse(rawContent);

	return {
		name: content.name,
		entries: content.entries.map((entry) => {
			return {
				...entry,
				id: 'entry-id',
				timestamp: 0,
			};
		}),
		size: content.entries.length,
	};
};

describe('Core > Manager > Project Manager (RLS)', () => {
	const fixtureProjectPath = resolve(FIXTURES_DIR, 'Example Project');
	const pm = new ProjectManager(ROOT_DIR);

	beforeAll(async () => {
		await pm.init();
	});

	beforeEach(async () => {
		await pm.reset();
	});

	it('should save projects correctly', async () => {
		const project = await pm.save({
			name: 'Example Project',
			path: fixtureProjectPath,
		});

		// should save project correctly and aggregate containing sets
		const savedProject = pm.getById(project.id);
		expect(savedProject!.timestamp).toBeTruthy();
		expect(savedProject!.data.sets).toHaveLength(1);
		expect(savedProject!.data.sets![0]).toEqual('Example.als');
	});

	it('should resolve projects correctly via path', async () => {
		await pm.save({
			name: 'Example Project',
			path: fixtureProjectPath,
		});

		// should be able to resolve project via path
		const foundProject = await pm.getByPath(fixtureProjectPath);
		expect(foundProject).toBeTruthy(); // meta file should exist
		expect(pm.getById(foundProject.ref)).toBeTruthy(); // resolve in ProjectManager
	});

	it('should backup projects correctly', async () => {
		const project = await pm.save({
			name: 'Example Project',
			path: fixtureProjectPath,
		});

		// should be ablet to backup a project
		const res = await pm.backup(project.id);

		expect(res).toBeTruthy();
	});

	it('should backup projects with description correctly', async () => {
		const project = await pm.save({
			name: 'Example Project',
			path: fixtureProjectPath,
		});

		// should be ablet to backup a project
		const res = await pm.backup(project.id, 'Some backup description');

		const foundBackups = pm.getBackupsByRef(project.id);
		expect(res).toBeTruthy();
		expect(foundBackups.backups).toHaveLength(1);
		expect(foundBackups.backups[0].data.description).toEqual('Some backup description');
	});
});

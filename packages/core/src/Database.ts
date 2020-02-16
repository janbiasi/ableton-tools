import * as fs from 'fs-extra';
import { resolve } from 'path';
import { DatabaseError } from './errors';
import { uuid, fileExists } from './utils';
import { ENCODING, ABLETON_TOOLS_ROOT } from './const';

export interface IDatabaseConfig {
	name: string;
	root?: string;
	fileName?: string;
}

export interface IDatabaseEntry<T> {
	id: string;
	timestamp: number;
	data: T;
}

export interface IDatabaseContent<T extends { [key: string]: any }> {
	name: string;
	entries: IDatabaseEntry<T>[];
}

export class Database<T extends { [key: string]: any }> {
	private contents: IDatabaseContent<T> = {
		name: 'unknown',
		entries: [],
	};

	constructor(private config: IDatabaseConfig) {}

	public async init() {
		this.contents = {
			name: this.config.name,
			entries: [],
		};

		// ensure base directory exists
		await fs.mkdirp(this.root);

		// get initial database contents and safe DB initially
		await this.syncFromDatabase();
		await this.syncToDatabase();
	}

	public get entries() {
		return this.contents.entries as Readonly<IDatabaseEntry<T>[]>;
	}

	public async reset() {
		this.contents = {
			name: this.contents.name,
			entries: [],
		};

		await this.syncToDatabase();
	}

	/**
	 * Update or create an entry
	 */
	public async save(entry: T) {
		const index = this.contents.entries.push({
			id: uuid(),
			timestamp: Date.now(),
			data: entry,
		});

		await this.syncToDatabase();

		return this.contents.entries[index - 1];
	}

	public async deleteByID(id: string) {
		const entry = this.getById(id);

		if (entry) {
			let deletedItem: IDatabaseEntry<T> = {} as IDatabaseEntry<T>;

			this.contents.entries = this.entries.reduce((prev, entry) => {
				const itemOrNothing = entry.id === id ? [] : [entry];
				entry.id === id ? (deletedItem = entry) : void 0;

				return [...prev, ...itemOrNothing];
			}, [] as IDatabaseEntry<T>[]);

			await this.syncToDatabase();

			return deletedItem;
		}

		return false;
	}

	/**
	 * Generic getter for entries using a custom lookup function
	 */
	public get(lookup: (entry: IDatabaseEntry<T>) => boolean): IDatabaseEntry<T>[] {
		return this.contents.entries.filter(lookup);
	}

	/**
	 * Generic getter for one entry using a custom lookup function
	 */
	public getOne(lookup: (entry: IDatabaseEntry<T>) => boolean): IDatabaseEntry<T> | undefined {
		const [entry] = this.get(lookup);
		return entry;
	}

	/**
	 * Get an entry by ID
	 */
	public getById(id: string): IDatabaseEntry<T> | undefined {
		return this.contents.entries.find((entry): boolean => entry.id === id);
	}

	public async syncToDatabase() {
		try {
			await fs.writeFile(this.databaseFile, this.serialize());
		} catch (err) {
			throw new DatabaseError(this.config.name, `Sync to database has failed: ${err.message}`);
		}
	}

	public async syncFromDatabase() {
		const doesDatabaseExist = await this.checkDatabaseExists();

		if (!doesDatabaseExist) {
			// no database found, return current state
			return;
		}

		try {
			// database found, try reading and persisting it
			const dehydrated = await fs.readFile(this.databaseFile, ENCODING);
			this.contents = this.deserialize(dehydrated);
		} catch (err) {
			throw new DatabaseError(this.config.name, `Could not read database: ${err.message}`);
		}
	}

	public toString() {
		return `Database(${this.config.name}) { ${this.contents.entries.length} }`;
	}

	private get root() {
		return this.config.root || ABLETON_TOOLS_ROOT;
	}

	private get databaseFile() {
		return resolve(this.root, `${this.config.fileName || this.config.name}.json`);
	}

	private async checkDatabaseExists() {
		return await fileExists(this.databaseFile);
	}

	private serialize() {
		return JSON.stringify(this.contents, null, 2);
	}

	private deserialize(contents: string): IDatabaseContent<any> {
		return JSON.parse(contents);
	}
}

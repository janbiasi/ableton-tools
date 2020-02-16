import { mocked } from 'ts-jest/utils';
import { resolve } from 'path';

jest.mock('fs-extra');
import * as fs from 'fs-extra';
import { Database, IDatabaseConfig } from '../src/Database';
import { TEMP_TARGET_DIR } from './const';

const fsMock = mocked(fs);

const exampleConfig: IDatabaseConfig = {
	name: 'example',
	root: '/test',
	fileName: 'database',
};

(fsMock.lstat as any).mockReturnValue(
	Promise.resolve({
		isFile: () => false,
		isDirectory: () => false,
	})
);

describe('Core > Database', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should be instanciable without options', () => {
		expect(() => {
			new Database(exampleConfig);
		}).not.toThrow();
	});

	it('should stringify correctly', () => {
		const db = new Database(exampleConfig);
		expect(`${db}`).toEqual('Database(example) { 0 }');
	});

	describe('init', () => {
		it('should create a database if not available', async () => {
			const db = new Database(exampleConfig);
			await db.init();

			expect(fsMock.readFile).toHaveBeenCalledTimes(0);
			expect(fsMock.writeFile).toHaveBeenCalledTimes(1);
		});

		it('should write an empty db on sync if none rehydrated', async () => {
			const db = new Database(exampleConfig);
			await db.init();

			expect(fsMock.readFile).toHaveBeenCalledTimes(0);
			expect(fsMock.writeFile).toHaveBeenCalledTimes(1);
			expect(fsMock.writeFile).toHaveBeenLastCalledWith(
				'/test/database.json',
				JSON.stringify({ name: 'example', entries: [] }, null, 2)
			);
		});

		it('should read from the existing database if available', async () => {
			(fsMock.lstat as any).mockReturnValueOnce(
				Promise.resolve({
					isFile: () => true,
					isDirectory: () => false,
				})
			);
			(fsMock.readFile as any).mockReturnValueOnce(
				Promise.resolve(
					JSON.stringify({
						entries: [
							{
								data: {
									name: 'test-template',
								},
							},
						],
					})
				)
			);
			const db = new Database(exampleConfig);
			await db.init();

			expect(fsMock.readFile).toHaveBeenCalledTimes(1);
			expect(fsMock.readFile).toHaveBeenLastCalledWith('/test/database.json', 'utf8');
			expect(db.entries).toHaveLength(1);
			expect(db.entries[0]!.data.name).toEqual('test-template');
		});
	});

	describe('interaction', () => {
		it('should save entries correctly', async () => {
			const db = new Database<{ value: number }>(exampleConfig);
			await db.init();
			await db.save({
				value: 20,
			});

			const entries = db.entries;
			expect(entries).toHaveLength(1);
			expect(entries[0]!.data.value).toEqual(20);
			expect(`${db}`).toEqual('Database(example) { 1 }');
		});

		it('should get templates correctly', async () => {
			const db = new Database<{ value: number }>(exampleConfig);
			await db.init();
			await db.save({
				value: 20,
			});

			const entry = db.getOne((entry) => entry.data.value === 20);
			expect(entry).toBeTruthy();
			expect(entry!.data.value).toEqual(20);
		});
	});

	describe('real life scenario', () => {
		beforeAll(() => {
			jest.resetModules();
			jest.restoreAllMocks();
			jest.clearAllMocks();
			jest.clearAllTimers();
		});

		it('should work correctly', async () => {
			const root = resolve(TEMP_TARGET_DIR, 'database');
			const db = new Database({
				root,
				fileName: 'test-db',
				name: 'RLS Test Case',
			});

			await db.init();
			await db.syncToDatabase();
		});
	});
});

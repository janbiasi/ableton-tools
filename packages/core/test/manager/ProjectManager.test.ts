import { resolve } from 'path';
import { mocked } from 'ts-jest/utils';
import { IProjectSchema } from '../../src/schema/Project';
import { ProjectManager } from '../../src/manager';
import { TEMP_TARGET_DIR, FIXTURES_DIR } from '../const';
import { toSnapshot } from './toSnapshot';

jest.mock('fs-extra');
jest.mock('globby');
import globby from 'globby';
import * as fs from 'fs-extra';
import { ITestProjectManager } from './TestManager';

const fsMock = mocked(fs);

(fsMock.lstat as any).mockReturnValue(
	Promise.resolve({
		isFile: () => false,
		isDirectory: () => false,
	})
);

describe('Core > Manager > ProjectManager', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should be instanciable without options', () => {
		const pm = new ProjectManager();
		expect(toSnapshot(pm)).toMatchSnapshot();
	});

	it('should create base folders on prepare', async () => {
		const pm = new ProjectManager('/test');
		await pm.init();

		expect(fsMock.mkdirp).toHaveBeenCalledTimes(4);
		expect((fsMock.mkdirp as any).mock.calls).toEqual([
			['/test/projects'],
			['/test'],
			['/test'], // TODO: figure out why twice /test!
			['/test/projects/backups'],
		]);
	});

	describe('init', () => {
		it('should create databases if not available', async () => {
			const pm = new ProjectManager('/test');
			await pm.init();

			expect(fsMock.readFile).toHaveBeenCalledTimes(0);
			expect(fsMock.writeFile).toHaveBeenCalledTimes(2);
		});

		it('should write empty dbs on sync if none rehydrated', async () => {
			const pm = new ProjectManager('/test');
			await pm.init();

			expect(fsMock.readFile).toHaveBeenCalledTimes(0);
			expect(fsMock.writeFile).toHaveBeenCalledTimes(2);
			expect(fsMock.writeFile).toHaveBeenLastCalledWith(
				'/test/backups.json',
				JSON.stringify({ name: 'backups', entries: [] }, null, 2)
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
			const pm = new ProjectManager('/test');
			const registry = ((pm as unknown) as ITestProjectManager).registry;
			await pm.init();

			expect(fsMock.readFile).toHaveBeenCalledTimes(1);
			expect(fsMock.readFile).toHaveBeenLastCalledWith('/test/registry.json', 'utf8');
			expect(registry.contents.entries).toHaveLength(1);
			expect(registry.contents.entries[0].data.name).toEqual('test-template');
		});
	});

	describe('interaction', () => {
		(globby as any).mockReturnValue(Promise.resolve([]));

		it('should save templates correctly', async () => {
			const pm = new ProjectManager('/test');
			await pm.init();
			await pm.save({
				name: 'project',
				path: '/some/project/path',
			});

			const templates = ((pm as unknown) as ITestProjectManager).registry.contents.entries;
			expect(templates).toHaveLength(1);
			expect(templates[0]!.id).toBeTruthy();
			expect(templates[0]!.timestamp).toBeTruthy();
			expect(templates[0]!.data.name).toEqual('project');
			expect(templates[0]!.data.path).toEqual('/some/project/path');
			expect(templates[0]!.data.sets).toHaveLength(0);
		});
	});

	describe('livesets', () => {
		it('should find live sets correctly (mocked glob)', async () => {
			(globby as any).mockReturnValue(Promise.resolve(['/some/project/path/MySet.als']));
			const pm = new ProjectManager('/test');
			await pm.init();
			await pm.save({
				name: 'project',
				path: '/some/project/path',
			});

			const foundProject = pm.getByName('project');
			if (!foundProject) {
				fail('No project found');
			}

			expect(foundProject).toBeTruthy();
			expect(foundProject!.data.path).toEqual('/some/project/path');
			expect(foundProject!.data.sets).toHaveLength(1);
			expect(foundProject!.data!.sets![0]).toEqual('/some/project/path/MySet.als');
		});
	});
});

import { mocked } from 'ts-jest/utils';
import { TemplateManager } from '../../src/manager';
import { toSnapshot } from './toSnapshot';

jest.mock('fs-extra');
import * as fs from 'fs-extra';
import { ITestManager } from './TestManager';
import { ITemplateSchema } from '../../src/schema/Template';

const fsMock = mocked(fs);

(fsMock.lstat as any).mockReturnValue(
	Promise.resolve({
		isFile: () => false,
		isDirectory: () => false,
	})
);

describe('Core > Manager > TemplateManager', () => {
	beforeEach(() => {
		jest.clearAllMocks();
	});

	it('should be instanciable without options', () => {
		const tm = new TemplateManager();
		expect(toSnapshot(tm)).toMatchSnapshot();
	});

	it('should create base folders on prepare', async () => {
		const tm = new TemplateManager('/test');
		await tm.init();

		expect(fsMock.mkdirp).toHaveBeenCalledTimes(2);
		expect((fsMock.mkdirp as any).mock.calls).toEqual([['/test/templates'], ['/test']]);
	});

	describe('init', () => {
		it('should create a database if not available', async () => {
			const tm = new TemplateManager('/test');
			await tm.init();

			expect(fsMock.readFile).toHaveBeenCalledTimes(0);
			expect(fsMock.writeFile).toHaveBeenCalledTimes(1);
		});

		it('should write an empty db on sync if none rehydrated', async () => {
			const tm = new TemplateManager('/test');
			await tm.init();

			expect(fsMock.readFile).toHaveBeenCalledTimes(0);
			expect(fsMock.writeFile).toHaveBeenCalledTimes(1);
			expect(fsMock.writeFile).toHaveBeenLastCalledWith(
				'/test/templates.json',
				JSON.stringify({ name: 'templates', entries: [] }, null, 2)
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
			const tm = new TemplateManager('/test');
			const tmdb = ((tm as unknown) as ITestManager<ITemplateSchema>).database;
			await tm.init();

			expect(fsMock.readFile).toHaveBeenCalledTimes(1);
			expect(fsMock.readFile).toHaveBeenLastCalledWith('/test/templates.json', 'utf8');
			expect(tmdb.contents.entries).toHaveLength(1);
			expect(tmdb.contents.entries[0]!.data.name).toEqual('test-template');
		});
	});

	describe('interaction', () => {
		it('should save templates correctly', async () => {
			const tm = new TemplateManager('/test');
			await tm.init();
			await tm.save('Test Project', 'tests://path-to/template');

			const templates = ((tm as unknown) as ITestManager<ITemplateSchema>).database.contents.entries;
			expect(templates).toHaveLength(1);
			expect(templates[0]!.data.name).toEqual('Test Project');
			expect(templates[0]!.data.path).toEqual('tests://path-to/template');
			expect(templates[0]!.id).toBeTruthy();
			expect(templates[0]!.timestamp).toBeTruthy();
		});

		it('should get templates correctly', async () => {
			const tm = new TemplateManager('/test');
			await tm.init();
			await tm.save('Test Project', 'tests://path-to/template');

			const foundTemplate = tm.get('Test Project');
			expect(foundTemplate).toBeTruthy();
			expect(foundTemplate!.data.path).toEqual('tests://path-to/template');
		});
	});
});

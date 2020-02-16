import { resolve } from 'path';
import { readFile } from 'fs-extra';
import { Database, IDatabaseContent } from '../src/Database';
import { ENCODING } from '../src/const';
import { TEMP_TARGET_DIR } from './const';

const ROOT_DIR = resolve(TEMP_TARGET_DIR, 'database');

const getTestDbContents = async <T extends any>(name: string): Promise<IDatabaseContent<T> & { size: number }> => {
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

describe('Core > Database (RLS)', () => {
	it('should work correctly', async () => {
		const db = new Database<{ value: string }>({
			root: ROOT_DIR,
			fileName: 'test-db',
			name: 'RLS Test Case',
		});

		await db.init();
		await db.reset();

		const contentAfterInit = await getTestDbContents('test-db');
		expect(contentAfterInit.entries).toHaveLength(0);
		expect(contentAfterInit).toMatchSnapshot();

		const savedItem = await db.save({
			value: 'Hello world!',
		});
		const contentAfterSave = await getTestDbContents('test-db');
		expect(contentAfterSave.entries).toHaveLength(1);
		expect(contentAfterSave).toMatchSnapshot();

		await db.deleteByID(savedItem.id);
		const contentAfterDelete = await getTestDbContents('test-db');
		expect(contentAfterDelete.entries).toHaveLength(0);
		expect(contentAfterDelete).toMatchSnapshot();
	});
});

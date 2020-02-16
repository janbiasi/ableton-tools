import { resolve } from 'path';
import { createArchive, unpackArchive } from '../../src/utils/compression';
import { TEMP_TARGET_DIR, FIXTURES_DIR } from '../const';
import { fileExists } from '../../src/utils/fs';

jest.setTimeout(20 * 1000);

describe('Utils > compression', () => {
	let testArchiveTarget: string = '';

	it('should create an archive', async () => {
		const result = await createArchive({
			in: resolve(FIXTURES_DIR, 'compressable'),
			out: resolve(TEMP_TARGET_DIR, 'compression'),
			name: 'test1',
		});

		expect(result.bytes).toEqual(326);
		expect(result.errors).toHaveLength(0);
		expect(result.warnings).toHaveLength(0);

		const exists = await fileExists(result.target);
		expect(exists).toBeTruthy();

		// save for next test case
		testArchiveTarget = result.target;
	});

	it('should unpack an archive', async () => {
		await unpackArchive({
			file: testArchiveTarget,
			target: resolve(TEMP_TARGET_DIR, 'compression', 'unpacked'),
		});
	});
});

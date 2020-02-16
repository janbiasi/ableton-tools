import { createWriteStream, createReadStream } from 'fs';
import { mkdirp } from 'fs-extra';
import { resolve as resolvePath } from 'path';
import { Extract as extract } from 'unzipper';
import archiver from 'archiver';

export interface CreateArchiveOpts {
	in: string;
	out: string;
	name: string;
}

export interface CreateArchiveResult {
	target: string;
	bytes: number;
	errors: Error[];
	warnings: Error[];
	files: CreateArchiveOpts;
}

export const createArchive = async (opts: CreateArchiveOpts): Promise<CreateArchiveResult> => {
	const target = resolvePath(opts.out, `${opts.name}.zip`);

	return new Promise<CreateArchiveResult>((resolve) => {
		const result: CreateArchiveResult = {
			target,
			bytes: 0,
			errors: [],
			warnings: [],
			files: opts,
		};
		const output = createWriteStream(target);
		const archive = archiver('zip', {
			zlib: { level: 9 },
		});

		output.on('close', () => {
			result.bytes = archive.pointer();
			resolve(result);
		});

		archive.on('warning', (err) => {
			if (err.code === 'ENOENT') {
				result.warnings.push(err);
			} else {
				result.errors.push(err);
				// TODO: should we really throw the error?
				throw new Error(`Creating archive failed: ${err}`);
			}
		});

		archive.on('error', (err) => {
			throw new Error(`Creating archive failed: ${err}`);
		});

		archive.pipe(output);
		archive.directory(opts.in, false);
		archive.finalize();
	});
};

export interface UnpackArchiveOpts {
	file: string;
	target: string;
}

export const unpackArchive = (opts: UnpackArchiveOpts) => {
	return createReadStream(opts.file)
		.pipe(
			extract({
				path: opts.target,
			})
		)
		.promise();
};

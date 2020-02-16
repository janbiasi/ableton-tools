import { normalize, delimiter } from 'path';
import { lstat } from 'fs-extra';

export const normalizePath = (input: string) => {
	return normalize(input);
};

export const fileExists = async (path: string): Promise<boolean> => {
	try {
		const stats = await lstat(path);
		return stats.isFile();
	} catch (err) {
		return false;
	}
};
export const folderExists = async (path: string): Promise<boolean> => {
	try {
		const stats = await lstat(path);
		return stats.isDirectory();
	} catch (err) {
		return false;
	}
};

export const getLastPathFragment = (path: string) => {
	const fragments = path.split(delimiter);
	return fragments[fragments.length - 1];
}

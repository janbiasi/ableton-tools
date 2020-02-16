import glob from 'globby';

export const findLiveSetsInFolder = async (root: string) => {
	try {
		return await glob('*.als', {
			cwd: root,
		});
	} catch (err) {
		return [];
	}
};

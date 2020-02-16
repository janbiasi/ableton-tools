import ora, { Ora } from 'ora';
import { error } from './logger';

export type Executable = (spinner: Ora) => Promise<any>;

export interface ExecuteOpts {
	initialText?: string;
}

export const runCommandAction = async (executable: Executable, opts?: ExecuteOpts) => {
	const spinner = ora(opts?.initialText || 'Starting process ...');
	try {
		await executable(spinner);
	} catch (err) {
		spinner.fail(err.message);
		process.exit(2);
	}
};

import { AbletonToolsError } from './Error';

export class BackupRestorationError extends AbletonToolsError {
	public static invalidVersion(version: number, versions: (number | string)[] = ['none']) {
		return new BackupRestorationError(`No backup for version ${version}, available are: ${versions.join(', ')}`);
	}

	public static notFound() {}

	constructor(message: string) {
		super(message);
	}
}

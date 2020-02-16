import { IDatabaseContent } from '../../src/Database';
import { IProjectSchema, IProjectBackupSchema } from '../../src/schema/Project';

export interface ITestManager<T extends object> {
	database: {
		name: string;
		contents: IDatabaseContent<T>;
	};
	prepare(): Promise<void>;
	syncToDatabase(): Promise<void>;
	syncFromDatabase(): Promise<void>;
}

export interface ITestProjectManager {
	registry: {
		name: string;
		contents: IDatabaseContent<IProjectSchema>;
	};
	backups: {
		name: string;
		contents: IDatabaseContent<IProjectBackupSchema>;
	};
	prepare(): Promise<void>;
	syncToDatabase(): Promise<void>;
	syncFromDatabase(): Promise<void>;
}

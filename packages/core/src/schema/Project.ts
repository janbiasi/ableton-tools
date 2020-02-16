import { IDatabaseEntry } from '../Database';

export interface IProjectSchema {
	name: string;
	path: string;
	sets: string[];
}

export interface IProjectBackupSchema {
	name: string;
	description: string;
	ref: string; // reference to the project ID
	version: number;
	path: string;
}

export interface IProjectMetaSchema {
	timestamp: IDatabaseEntry<IProjectSchema>['timestamp'];
	name: IProjectSchema['name'];
	ref: IDatabaseEntry<IProjectSchema>['id'];
	sets: IProjectSchema['sets'];
	template?: string;
}

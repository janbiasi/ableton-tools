import { AbletonToolsError } from './Error';
import { IProjectSchema } from '../schema/Project';
import { IDatabaseEntry } from '../Database';

export class ProjectNotFoundError extends AbletonToolsError {
	public static fromBackup(projectOrId: string | IDatabaseEntry<IProjectSchema>) {
		return new ProjectNotFoundError(typeof projectOrId === 'string' ? projectOrId : projectOrId.data);
	}

	constructor(projectOrId: string | IProjectSchema) {
		const nameOrId =
			typeof projectOrId === 'string' ? `with ID ${projectOrId}` : `${projectOrId.name} (${projectOrId.path})`;

		const message = `Could not find valid project ${nameOrId}, please safe it first`;
		super(message);
	}
}

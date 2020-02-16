import { AbletonToolsError } from './Error';

export class ProjectMetaNotFoundError extends AbletonToolsError {
	constructor(reference: string) {
		const message = `Could not find valid metafile for project under "${reference}", please safe it first`;
		super(message);
	}
}

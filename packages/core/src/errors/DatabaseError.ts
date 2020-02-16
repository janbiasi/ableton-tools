import { AbletonToolsError } from './Error';

export class DatabaseError extends AbletonToolsError {
	constructor(name: string, message: string) {
		super(`[${name}] ${message}`);
	}
}

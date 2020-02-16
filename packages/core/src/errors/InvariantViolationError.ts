import { AbletonToolsError } from './Error';

export class InvariantViolationError extends AbletonToolsError {
	constructor(message: string) {
		super(message);
	}
}

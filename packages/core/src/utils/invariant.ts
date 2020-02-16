import { InvariantViolationError } from '../errors/InvariantViolationError';

export const invariant = (cond: any, message = 'Unknown invariant violation'): never | void => {
	if (!!cond === false) {
		throw new InvariantViolationError(message);
	}
};

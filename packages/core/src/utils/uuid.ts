import { randomBytes } from 'crypto';

export type UUIDSize = 16 | 32 | 64;

/**
 * Generate a unique random ID based on the internal crypto module.
 * Size is configurable, defaults to 16 as it should be enough for most cases.
 */
export const uuid = (size: UUIDSize = 16) => randomBytes(size).toString('hex');

import { homedir } from 'os';
import { resolve } from 'path';

export const ENCODING = 'utf8';

export const HOME_DIR = homedir();

export const ABLETON_TOOLS_ROOT = resolve(HOME_DIR, '.abletontools');

export const VERSION = require('../package.json').version;

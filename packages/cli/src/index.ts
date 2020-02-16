#!/usr/bin/env node

import './utils/update-notifier';
import { run } from './program';

(async () => {
	// run main program
	await run();
})();



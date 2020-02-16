import { resolve } from 'path';
import updateNotifier from 'update-notifier';
import boxen from 'boxen';
import chalk from 'chalk';

const cliPkg = require(resolve(__dirname, '../../package.json'));
const corePkg = require(resolve(__dirname, '../../node_modules/@ableton-tools/core/package.json'));

const cliUpdates = updateNotifier({ pkg: cliPkg });
const coreUpdates = updateNotifier({ pkg: corePkg });

if (cliUpdates.update || coreUpdates.update) {
	console.log(
		boxen(
			['Update available, please run', chalk.cyan('npm install -g ') + chalk.magenta('@ableton-tools/cli')].join(
				'\n'
			)
		)
	);
}

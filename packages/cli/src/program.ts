import { resolve } from 'path';
import commander from 'commander';
import { Runtime } from '@ableton-tools/core';
import { useSaveCommand } from './commands/save';
import { useBackupCommand } from './commands/backup';
import { useInfoCommand } from './commands/info';
import { useRestoreCommand } from './commands/restore';

const pkg = require(resolve(__dirname, '../package.json'));

export const run = async () => {
	// boot main core runtime
	const abletonToolsRuntime = new Runtime();
	await abletonToolsRuntime.bootstrap();

	// init commander cli app
	const cli = commander.version(pkg.version);

	// attach commands
	useSaveCommand(cli, abletonToolsRuntime);
	useBackupCommand(cli, abletonToolsRuntime);
	useRestoreCommand(cli, abletonToolsRuntime);
	useInfoCommand(cli, abletonToolsRuntime);

	// start application
	cli.parse(process.argv);

	return {
		cli,
		args: cli.args
	}
};



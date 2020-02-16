import { Runtime, ProjectNotFoundError } from "@ableton-tools/core";
import { Command } from "commander";
import chalk from "chalk";
import { runCommandAction } from "../utils/run";

export const useInfoCommand = (cli: Command, runtime: Runtime) => {
	cli
		.command('info <name>')
		.alias('i')
		.description('Prints all information of a certain project')
		.action(async (name: string) => {
			await runCommandAction(async spinner => {
				spinner.start('Fetching project ...');

				await runtime.projects.syncFromDatabase();

				const project = runtime.projects.getByName(name);

				if (!project) {
					// nothing found, skip process
					throw new ProjectNotFoundError(name);
				}

				const { backups, versions } = runtime.projects.getBackupsByRef(project.id);

				spinner.succeed(`Project information succesfully fetched:`);

				console.log('');
				console.log(chalk.bold.underline('Information'));
				console.log(`ID: ${chalk.cyan(project.id)}`);
				console.log(`Name: ${chalk.cyan(project.data.name)}`);
				console.log(`Saved at: ${chalk.cyan(new Date(project.timestamp).toLocaleString())}`);
				console.log(`Versions: ${versions.length > 0 ? chalk.magenta(versions.join(', ')) : chalk.yellow('No versions available')}`);
				console.log(`Location: ${chalk.cyan(project.data.path)}`);
				console.log('');
				console.log(chalk.bold.underline('Backups'));
				if (backups.length > 0) {
					backups.forEach(backup => {
						console.log(` - ${chalk.magenta(`Version ${backup.data.version}`)} (${new Date(backup.timestamp).toLocaleString()})`)
					});
				} else {
					console.log(chalk.yellow('No backups available yet'));
				}
				console.log('');
			});
		});
}

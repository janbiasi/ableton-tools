import { Runtime, formatBytes } from "@ableton-tools/core";
import { Command } from "commander";
import { runCommandAction } from "../utils/run";

export const useBackupCommand = (cli: Command, runtime: Runtime) => {
	cli
		.command('backup <name> [description]')
		.alias('b')
		.description('Backup a project by its name and add an optional description')
		.action(async (name: string, description: string) => {
			await runCommandAction(async spinner => {
				spinner.start('Saving project ...');

				const project = runtime.projects.getByName(name);

				if (!project) {
					throw new Error(`Could not find project "${name}", please save it first`)
				}

				const result = await runtime.projects.backup(project.id, description);
				const backupSize = formatBytes(result.archive.bytes, 1);

				spinner.succeed(`Created backup v${result.version} for "${project.data.name}" (~ ${backupSize})`);
			});
		});
}

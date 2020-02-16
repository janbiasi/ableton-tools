import { Runtime, formatBytes } from "@ableton-tools/core";
import { Command } from "commander";
import { runCommandAction } from "../utils/run";

export const useBackupCommand = (cli: Command, runtime: Runtime) => {
	cli
		.command('backup [name]')
		.alias('b')
		.description('Backup a project by its name')
		.action(async (name: string) => {
			await runCommandAction(async spinner => {
				spinner.start('Saving project ...');

				const project = runtime.projects.getByName(name);

				if (!project) {
					throw new Error(`Could not find project "${name}", please save it first`)
				}

				const result = await runtime.projects.backup(project.id);
				const backupSize = formatBytes(result.archive.bytes, 1);

				spinner.succeed(`Created backup v${result.version} for "${project.data.name}" (~ ${backupSize})`);
			});
		});
}

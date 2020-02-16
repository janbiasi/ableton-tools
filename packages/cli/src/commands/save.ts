import { Runtime, getLastPathFragment } from "@ableton-tools/core";
import { Command } from "commander";
import { runCommandAction } from "../utils/run";

export const useSaveCommand = (cli: Command, runtime: Runtime) => {
	cli
		.command('save <path> [name]')
		.alias('s')
		.description('Saves a project by path definition')
		.action(async (path: string, name: string) => {
			name = name || getLastPathFragment(path);

			await runCommandAction(async spinner => {
				spinner.start('Saving project ...');

				const project = await runtime.projects.save({
					path,
					name
				});

				spinner.succeed(`Project "${project.data.name}" saved (${project.id})`);
			});
		});
}

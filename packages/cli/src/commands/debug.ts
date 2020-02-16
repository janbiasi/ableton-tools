import { Runtime, getLastPathFragment } from "@ableton-tools/core";
import { Command } from "commander";
import { runCommandAction } from "../utils/run";

export const useDebugCommand = (cli: Command, runtime: Runtime) => {
	cli
		.command('debug')
		.alias('d')
		.description('Debug the Ableton Tools CLI')
		.action(async () => {
			await runCommandAction(async spinner => {
				spinner.start('Gathering core contents ...');
				await runtime.projects.syncFromDatabase();
				spinner.succeed(`Data allocation done, printing debug result.`);
			});
		});
}

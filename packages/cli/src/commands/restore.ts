import { Runtime, formatBytes } from "@ableton-tools/core";
import { Command } from "commander";
import { runCommandAction } from "../utils/run";

export const useRestoreCommand = (cli: Command, runtime: Runtime) => {
	cli
		.command('restore <name> [output]')
		.alias('r')
		.option('-v, --version', 'Select a certain version')
		.description('Restore a project by its name to a certain output')
		.action(async (name: string, output: string, opts: { version?: string }) => {
			await runCommandAction(async spinner => {
				spinner.start(`Restoring project ${name} ...`);

				const project = runtime.projects.getByName(name);

				if (!project) {
					throw new Error(`Could not find project "${name}", please save it first`)
				}

				const version = opts.version ? parseInt(opts.version, 10) : undefined;
				const { backup } = await runtime.projects.restore(project.id, output, version);

				spinner.succeed(`Restored ${name} v${backup.data.version} from ${new Date(backup.timestamp * 1000).toISOString()}`);
			});
		});
}

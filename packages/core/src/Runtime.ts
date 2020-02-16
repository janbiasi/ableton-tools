import { resolve } from 'path';
import { ABLETON_TOOLS_ROOT, VERSION } from './const';
import { TemplateManager } from './manager/TemplateManager';
import { ProjectManager } from './manager';

export interface IRuntimeConfig {
	root: string;
	version: string;
}

export const defaultConfig: IRuntimeConfig = {
	root: ABLETON_TOOLS_ROOT,
	version: VERSION,
};

export class Runtime {
	public config: IRuntimeConfig;
	public templates: TemplateManager;
	public projects: ProjectManager;

	constructor(config: Partial<IRuntimeConfig> = {}) {
		this.config = { ...defaultConfig, ...config };
		this.templates = new TemplateManager(this.config.root);
		this.projects = new ProjectManager(this.config.root);
	}

	public async bootstrap() {
		await this.templates.init();
		await this.projects.init();

		return this;
	}
}

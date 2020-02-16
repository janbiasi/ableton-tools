import fs from 'fs-extra';
import { resolve } from 'path';
import { ABLETON_TOOLS_ROOT, ENCODING } from '../const';
import { safeDirName } from '../utils/string';
import { invariant } from '../utils/invariant';
import { EventEmitter } from 'events';
import { fileExists, folderExists } from '../utils/fs';

/**
 * Abstract manager class to provide basic managing functionality
 * for example saving global configurations, template lists etc.
 */
export abstract class Manager {
	public prepared = false;
	public events = new EventEmitter();

	protected root: string;

	/**
	 * Creates a new manager with a name (base folder) and a possible
	 * override option for the global root, eg. if you want to save
	 * all your data in a different root directory than the $HOME folder.
	 */
	constructor(public name: string, globalRoot = ABLETON_TOOLS_ROOT) {
		this.root = resolve(globalRoot, safeDirName(name));
	}

	/**
	 * Generates a human readable name for the current manager
	 */
	public toString() {
		return `Manager { ${this.name} }`;
	}

	/**
	 * Every manager needs to implement an init method,
	 * you're required to first call "this.prepare()"!
	 */
	abstract init(): Promise<void>;

	/**
	 * Function for initialization, ensures the base folder and connections
	 */
	protected async prepare() {
		await fs.mkdirp(this.root);
		this.prepared = true;
	}

	/**
	 * Ensure that a certain subfolder exists for the current manager
	 */
	protected async ensureFolder(path: string) {
		invariant(this.prepare, `Ensure to call "this.prepare" in ${this.name}.init() implementation`);
		await fs.mkdirp(path);
	}

	/**
	 * Write a file to the current manager space
	 */
	protected async writeFile(name: string, content: object) {
		invariant(this.prepare, `Ensure to call "this.prepare" in ${this.name}.init() implementation`);
		await fs.writeFile(resolve(this.root, `${name}.json`), JSON.stringify(content));
	}

	/**
	 * Read a file from the current manager space
	 */
	protected async readFile<T extends object = {}>(name: string) {
		invariant(this.prepare, `Ensure to call "this.prepare" in ${this.name}.init() implementation`);
		const contents = await fs.readFile(resolve(this.root, `${name}.json`), ENCODING);
		return JSON.parse(contents) as T;
	}

	/**
	 * Check if a file exists in the current manager space
	 */
	protected async fileExists(name: string) {
		invariant(this.prepare, `Ensure to call "this.prepare" in ${this.name}.init() implementation`);
		return await fileExists(name);
	}

	/**
	 * Check if a folder exists in the current manager space
	 */
	protected async folderExists(name: string) {
		invariant(this.prepare, `Ensure to call "this.prepare" in ${this.name}.init() implementation`);
		return await folderExists(name);
	}
}

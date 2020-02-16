import { ITemplateSchema } from '../schema/Template';
import { Database } from '../Database';
import { Manager } from './Manager';

export class TemplateManager extends Manager {
	private database: Database<ITemplateSchema>;

	constructor(root: string = '.') {
		super('templates', root);

		this.database = new Database({
			root,
			name: 'templates',
			fileName: 'templates',
		});
	}

	public async init() {
		// required as first action for every manager
		this.prepare();

		// initialize database contents
		await this.database.init();
	}

	public async syncToDatabase() {
		await this.database.syncToDatabase();
	}

	public async syncFromDatabase() {
		await this.database.syncFromDatabase();
	}

	/**
	 * TODO: Refactor to use the ITemplateSchema as parameter instead of multi params
	 */
	public async save(name: string, path: string) {
		this.database.save({
			name,
			path,
		});

		await this.database.syncToDatabase();
	}

	public get(name: string) {
		return this.database.getOne((entry) => entry.data.name === name);
	}
}

import chalk, { Chalk } from 'chalk';

interface IPrintSection {
	title: string;
	valueColor?: Chalk;
	entries: Record<string, string | number | boolean | any[]> | string[];
}

export const printInfo = (sections: IPrintSection[] = []) => {
	sections.forEach(section => {
		console.log(chalk.bold.underline(section.title));
		const valueColor = section.valueColor || chalk.cyan;

		// if we get an array as entries
		if (Array.isArray(section.entries)) {
			section.entries.forEach(entry => {
				console.log(` – ${valueColor(entry)}`);
			});
			console.log('');
			return;
		}

		// if we get a factory as entries
		for (let index in section.entries) {
			let entry = section.entries[index];

			entry = Array.isArray(entry) ? entry.join(', ') : entry;
			entry = typeof entry === 'boolean' ? (entry === true ? 'Yes' : 'No') : entry;
			console.log(`${index}: ${valueColor(entry)}`);
		}

		console.log('');
	});
}

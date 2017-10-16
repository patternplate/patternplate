import path from 'path';
import {writeFile} from 'mz/fs';
import exists from 'path-exists';
import mkdirp from 'mkdirp-promise';
import ora from 'ora';

import {
	defaultJson,
	defaultMarkdown,
	defaultFiles
} from './get-data';


async function create(id, other) {
	const spinner = ora().start();

	let folder;
	for (let option in other) {
		if (other.hasOwnProperty(option)) {
			const match = other[option].match(/path=([^\s]*)/i)[1];
			if (match) {
				folder = match;
			}
		}
	}
	const path = './patterns/' + (folder ? `${folder}/${id}` : id);

	if (await exists(path)) {
		spinner.text = ` Pattern with the name ${id} already exists`;
		spinner.fail();
		return;
	}

	spinner.text = ` Create pattern folder with id: ${id}`;
	await mkdirp(path);

	spinner.text = ` Create pattern files`;
	await createJson(`${path}/pattern.json`, id);
	await writeFile(`${path}/index.md`, defaultMarkdown);

	for (let file in defaultFiles) {
		if (defaultFiles.hasOwnProperty(file)) {
			await writeFile(`${path}/${file}`, defaultFiles[file]);
		}
	}

	spinner.text = ` Pattern with the name ${id} created`;
	spinner.succeed();
}

async function createJson(path, id) {
	const value = defaultJson;
	value.name = id;
	value.displayName = id;
	await writeFile(path, JSON.stringify(value, null, '  '));
}

export default create;

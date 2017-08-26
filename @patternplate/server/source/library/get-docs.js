import path from 'path';
import frontmatter from 'front-matter';
import globby from 'globby';
import {merge} from 'lodash';
import exists from 'path-exists';
import remark from 'remark';
import find from 'unist-util-find';
import * as sander from 'sander';
import getReadme from './utilities/get-readme';

const DEFAULT_MANIFEST = {
	version: '1.0.0',
	flag: 'alpha',
	options: {}
};

export async function getDocs(base) {
	const resolve = path.resolve.bind(null, base, '@docs');
	const cwd = resolve('.');

	if (!await exists(cwd)) {
		return [];
	}

	const files = await globby(`**/*.md`, {cwd});

	return await Promise.all(files.map(async file => {
		const read = f => sander.readFile(resolve(f));
		const contents = String(await read(file));
		const ast = remark().parse(contents);
		const first = find(ast, {type: 'heading', depth: 1});

		const front = frontmatter(contents).attributes;
		const manifest = merge({}, DEFAULT_MANIFEST, front);

		const b = path.basename(file, path.extname(file)).toLowerCase();
		const name = b === 'readme' ? path.dirname(file) : b;

		manifest.name = first ? first.children[0].value : name;
		manifest.displayName = manifest.displayName || manifest.name;

		return {
			contents,
			path: file,
			manifest
		};
	}));
}

export async function getDocsTree(base) {
	return treeFromPaths(await getDocs(base));
}

async function treeFromPaths(files) {
	// Legacy
	const contents = await getReadme('.', './patterns');

	const tree = {
		id: 'root',
		children: [],
		contents,
		manifest: merge({}, DEFAULT_MANIFEST, {
			name: 'readme',
			displayName: 'Documentation'
		})
	};

	files.forEach(file => {
		const parts = file.path.split('/');
		let level = tree;

		parts.forEach((part, i) => {
			const existing = level.children.find(c => c.name === part);

			if (existing) {
				level = existing;
				return;
			}

			const id = parts.slice(0, i + 1).join('/');
			const sid = path.join(path.dirname(id), path.basename(id, path.extname(id)));

			const item = {
				name: path.basename(part, path.extname(part)),
				manifest: file.manifest,
				contents: file.contents,
				id: sid,
				path: sid.split('/'),
				type: path.extname(part) ? 'doc' : 'folder'
			};

			if (item.type === 'folder') {
				item.children = [];
			}

			if (part.toLowerCase() === 'readme.md') {
				level.contents = file.contents;
				level.manifest = file.manifest;
			} else {
				level.children.push(item);
				level = item;
			}
		});
	});

	return tree;
}

import path from 'path';
import globby from 'globby';
import * as sander from 'sander';
import getPatternManifests from '../../../library/utilities/get-pattern-manifests';

const DETECT = /(?:@import\s+|import(?:.+?)from\s+|require\()['"]([^'"]+)['"]\)?(?:;?)/g;
const REWRITE = /(@import\s+|import(?:.+?)from\s+|require\()('|")([^'"]+)('|")(\)?)(;?)/;

export default async function nodeify(application) {
	const [errors, manifests] = await getPatternManifests('', './patterns', {
		cache: application.cache
	});

	if (errors) {
		throw new Error(errors.map(e => e.message).join('\n'));
	}

	return await Promise.all(manifests.map(rewrite({
		base: path.resolve('./patterns')
	})));
}

function rewrite(options) {
	const base = path.join.bind(null, options.base);

	return async function(manifest) {
		const pattern = base.bind(null, manifest.id);

		const dictionary = getDictionary(manifest);
		const translateManifest = manifestTranslator(dictionary);
		const translate = translator(dictionary);

		const manifestSource = JSON.stringify(translateManifest(manifest), null, '  ');
		const files = await globby(['index.*', 'demo.*', '!index.md'], {cwd: base(manifest.id)});
		await sander.writeFile(pattern('pattern.json'), manifestSource);

		await Promise.all(files.map(async file => {
			const buffer = await sander.readFile(pattern(file));
			const source = buffer.toString();
			const result = translate(source);
			return await sander.writeFile(pattern(file), Buffer.from(result));
		}));
	};
}

function getDictionary(manifest) {
	return Object.entries(manifest.patterns || {})
		.reduce((results, entry) => {
			const [name, id] = entry;
			const rewritten = path.relative(manifest.id, id);
			results[name] = rewritten;
			return results;
		}, {});
}

function manifestTranslator(dictionary) {
	return manifest => {
		return {
			name: manifest.name,
			displayName: manifest.displayName,
			version: manifest.version,
			tags: manifest.tags,
			flag: manifest.flag,
			options: manifest.options,
			patterns: Object.keys(manifest.patterns || {})
				.reduce((results, name) => {
					results[dictionary[name]] = manifest.patterns[name];
					return results;
				}, {})
		};
	};
}

function translator(dictionary) {
	return source => source.replace(DETECT, (match, name) => {
		if (!(name in dictionary)) {
			return match;
		}
		return match.replace(REWRITE, `$1$2${dictionary[name]}$4$5$6`);
	});
}

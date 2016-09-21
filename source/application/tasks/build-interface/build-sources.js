import path from 'path';
import {max, padEnd, padStart} from 'lodash/fp';
import ora from 'ora';
import build from './build';
import getTargets from './get-targets';
import getSourceSets from './get-source-sets';
import writeEach from './write-each';
import serverRequire from './server-require';

const getPatternSource = serverRequire('get-pattern-source');
const urlQuery = serverRequire('utilities/url-query');

export default buildSources;

async function buildSources(datasets, target, context) {
	const {app, rewriter, jobPad} = context;
	const spinner = ora().start();
	const sourceSets = getSourceSets(datasets);
	const getSource = getPatternSource(app);
	const idPad = padEnd(max(sourceSets.map(set => set.file.id.length)));
	const countPad = padStart(String(sourceSets.length).length + 1);

	try {
		return await build(sourceSets, {
			async read(set, sets, count) {
				spinner.text = `${jobPad('source')} ${idPad(set.file.id)} ${countPad(count)}/${sets.length}`;
				return getSource(set.file.id, set.type, set.env);
			},
			async write(source, set, sets, count) {
				spinner.text = `${jobPad('source')} ${idPad(set.file.id)} ${countPad(count)}/${sets.length}`;
				const typePath = urlQuery.format({
					pathname: '',
					query: {type: set.type}
				});
				const baseName = path.basename(set.file.id);
				const dirName = path.dirname(set.file.id);
				const base = path.resolve(target, dirName, typePath);
				return writeEach(source.body, getTargets(base, baseName, set), rewriter);
			},
			done() {
				spinner.text = `${jobPad('source')} ${countPad(sourceSets.length)}/${sourceSets.length}`;
				spinner.succeed();
			}
		});
	} catch (error) {
		spinner.fail();
		throw error;
	}
}

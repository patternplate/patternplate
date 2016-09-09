import path from 'path';
import build from './build';
import getTargets from './get-targets';
import getSourceSets from './get-source-sets';
import writeEach from './write-each';
import serverRequire from './server-require';

const getPatternSource = serverRequire('get-pattern-source');
const urlQuery = serverRequire('utilities/url-query');

export default buildSources;

async function buildSources(datasets, target, context) {
	const {app, spinner} = context;
	const sourceSets = getSourceSets(datasets);
	const getSource = getPatternSource(app);

	return await build(sourceSets, {
		async read(set, sets, count) {
			spinner.text = `source ${set.id} ${count}/${sets.length}`;
			return getSource(set.file.id, set.type, set.env);
		},
		async write(source, set) {
			const typePath = urlQuery.format({
				pathname: '',
				query: {type: set.type}
			});
			const baseName = path.basename(set.file.id);
			const dirName = path.dirname(set.file.id);
			const base = path.resolve(target, dirName, typePath);
			return writeEach(source.body, getTargets(base, baseName, set));
		},
		done() {
			spinner.text = `sources`;
			spinner.succeed();
		}
	});
}

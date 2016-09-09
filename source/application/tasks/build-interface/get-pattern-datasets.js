import throat from 'throat';
import {sync as resolve} from 'resolve';
export default patternMetaData;

const getPatternMetaData = require(resolve('patternplate-server/library/get-pattern-meta-data'));

async function patternMetaData(patterns, server) {
	const jobs = patterns.map(throat(1, async pattern => {
		const data = await getPatternMetaData(server, pattern.id, 'index');
		data.environmentNames = data.environments.map(env => env.name);
		data.variants = {};
		data._pattern = pattern;
		return data;
	}));

	return Promise.all(jobs);
}

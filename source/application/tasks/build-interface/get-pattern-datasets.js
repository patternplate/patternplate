import throat from 'throat';
import {sync as resolve} from 'resolve';
import {max, padEnd, padStart} from 'lodash/fp';
import ora from 'ora';
export default patternMetaData;

const getPatternMetaData = require(resolve('patternplate-server/library/get-pattern-meta-data'));

async function patternMetaData(patterns, server, context) {
	const {jobPad} = context;
	const spinner = ora().start();
	let count = 1;

	const padPatternId = padEnd(max(patterns.map(p => p.id.length)) + 1);
	const padCount = padStart(String(patterns.length).length + 1);

	const jobs = patterns.map(throat(1, async pattern => {
		spinner.text = `${jobPad('read')} ${padPatternId(pattern.id)} ${padCount(count)}/${patterns.length}`;
		const data = await getPatternMetaData(server, pattern.id, 'index');
		data.environmentNames = data.environments.map(env => env.name);
		data.variants = {};
		data._pattern = pattern;
		count += 1;
		return data;
	}));

	const results = await Promise.all(jobs);
	spinner.text = `${jobPad('read')} ${patterns.length}/${patterns.length}`;
	spinner.succeed();
	spinner.stop();
	return results;
}

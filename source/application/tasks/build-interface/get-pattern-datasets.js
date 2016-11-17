import throat from 'throat';
import {sync as resolve} from 'resolve';
import {max, padEnd} from 'lodash/fp';
import Observable from 'zen-observable';

export default patternMetaData;

const getPatternMetaData = require(resolve('patternplate-server/library/get-pattern-meta-data'));

function patternMetaData(patterns, server) {
	return new Observable(observer => {
		let count = 1;

		const idPad = padEnd(max(patterns.map(p => p.id.length)));

		const jobs = patterns.map(throat(1, async pattern => {
			observer.next({
				message: `${idPad(pattern.id)} ${count}/${patterns.length}`
			});
			const data = await getPatternMetaData(server, pattern.id, 'index');
			data.environmentNames = data.environments.map(env => env.name);
			data.variants = {};
			data._pattern = pattern;
			count += 1;
			observer.next({data});
			return data;
		}));

		Promise.all(jobs)
			.then(() => {
				observer.next({message: `${patterns.length}/${patterns.length}`});
				observer.complete();
			});
	});
}

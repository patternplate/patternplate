// import {merge} from 'lodash';

// import flatPick from './utilities/flat-pick';
import getPatternRetriever from './utilities/get-pattern-retriever';

async function getPattern(application, id, environment, cmds) {
	const retrieve = await getPatternRetriever(application);
	const results = await retrieve(id, {environments: [environment]}, environment, cmds);
	return results;
}

export default async function(application, id, environment, cmds = ['read']) {
	const [pattern] = await getPattern(application, id, environment, cmds);
	return pattern;
}

import {
	debuglog
} from 'util';

import minimatch from 'minimatch';

const envDebug = debuglog('environments');

export default function getMatchingEnvironments(patternID, environments) {
	return environments
		.filter(userEnvironment => {
			envDebug('using filters %s for environment %s to match against %s', userEnvironment.applyTo, userEnvironment.name, patternID);

			const positives = userEnvironment.applyTo
				.filter(glob => glob[0] !== '!');

			const negatives = userEnvironment.applyTo
				.filter(glob => glob[0] === '!')
				.map(glob => glob.slice(1));

			const matchPositive = positives
				.filter(positive => minimatch(patternID, positive));

			const matchNegative = negatives
				.filter(negative => minimatch(patternID, negative));

			envDebug('matching %s against %s, %s', patternID, positives, negatives);

			if (matchPositive.length > 0) {
				envDebug('positive match for environment %s on %s: %s', userEnvironment.name, patternID, matchPositive);
			}

			if (matchNegative.length > 0) {
				envDebug('negative match for environment %s on %s: %s', userEnvironment.name, patternID, matchNegative);
			}

			return matchPositive.length > 0 && matchNegative.length === 0;
		})
		// sort by priority
		.sort((a, b) => b.priority - a.priority);
}


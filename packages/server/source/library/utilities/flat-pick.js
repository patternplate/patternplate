import {
	pick
} from 'lodash';

export default function flatPick(hash, recurse, fields = [], depth = 1) {
	return Object.entries(hash[recurse] || {})
		.reduce((flatPicked, entry) => {
			const [entryName, entryValue] = entry;
			const amend = pick(entryValue, fields);

			if (depth > 1 && (recurse in entryValue)) {
				amend[recurse] = flatPick(entry, recurse, fields, depth - 1);
			}

			return {
				...flatPicked,
				[entryName]: {
					...amend
				}
			};
		}, {});
}

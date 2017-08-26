import {parse as parsePath} from 'path';

import {debuglog} from 'util';
import {difference, find} from 'lodash';

export default function getPatternsToBuild(artifacts, patterns) {
	const debug = debuglog('commonjs');

	return pattern => {
		// Find matching pattern artifact
		const artifact = find(artifacts, {id: pattern.id});

		// If no pattern artifact is found, build it
		if (!artifact) {
			debug('rebuild %s, no artifacts found', pattern.id);
			return true;
		}

		// Build if pattern mtime > artifact mtime
		if (pattern.mtime.getTime() > artifact.mtime.getTime()) {
			debug(
				'rebuild %s, pattern mtime %s is newer than artifacts %s by %s',
				pattern.id, pattern.mtime, artifact.mtime,
				new Date(pattern.mtime - artifact.mtime)
			);
			return true;
		}

		// Get the applicable types in this pattern
		const types = [...new Set(pattern.files
			.map(path => parsePath(path))
			.filter(parsed => parsed.name === 'index')
			.map(parsed => parsed.ext.slice(1))
			.filter(Boolean)
			.map(extension => patterns.formats[extension])
			.filter(Boolean)
			.map(format => format.name.toLowerCase()))];

		// Build if pattern has types that are not in artifacts
		if (difference(types, artifact.types).length) {
			debug(
				'rebuild %s, pattern types %s mismatch artifact types %s',
				pattern.id, types, artifact.types
			);
			return true;
		}

		return false;
	};
}

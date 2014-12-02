var winston = require('winston');

/**
 * NAME
 *  patternplate start - Start a patternplate project server
 *
 * SYNOPSIS
 * 	patternplate start [path]
 *
 * OPTIONS
 * 	path
 *	 Path of project to fire up. Defaults to current working directory.
 *
 * FILES
 * 	Configuration will be read from, ordered by priority:
 * 	- .patternplaterc
 * 	- ~/.patternplaterc
 * 	- ~/.patternplate/config
 * 	- ~/.config/patternplate
 * 	- ~/.config/patternplate/config
 * 	- ~/etc/patternplaterc
 * 	- ~/etc/patternplate/config
 *
 * BUGS
 * 	None reported by now
 *
 * AUTHOR
 * 	Mario Nebl <mario.nebl@sinnerschrader.com>
 *
 * SEE ALSO
 * 	patternplate-cli
 */

var path = require('path');
var isProject = require('../../util/is-project');

function start(argv, cb) {
	cb(null);

	var target = path.resolve(argv._[1] || '.');

	isProject(target, function(err, result){
		if (err) {
			return cb(err);
		}

		if (! result ) {
			return cb(target + ' is no valid ' + argv.pkg.name + ' project');
		}

		winston.info('Starting %s...', target);
		cb(null);
	});
}

module.exports = start;

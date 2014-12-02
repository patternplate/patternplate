var winston = require('winston');

/**
 * NAME
 *  patternplate build - Run default build task of a patternplate project
 *
 * SYNOPSIS
 * 	patternplate build [path]
 *
 * OPTIONS
 * 	path
 *	 Path to run the build in. Defaults to current working directory
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

function build(argv, cb) {
	var target = path.resolve(argv._[1] || '.');

	isProject(target, function(err, result){
		if (err) {
			return cb(err);
		}

		if (! result ) {
			return cb('%s is no valid %s project', target, argv.pkg.name);
		}

		winston.info('Starting build task...');
		cb(null);
	});
}

module.exports = build;

var winston = require('winston');

/**
 * NAME
 *  patternplate create - Create new patternplate objects
 *
 * SYNOPSIS
 * 	patternplate create objecttype objectname
 *
 * OPTIONS
 * 	objecttype
 *	 Type of object to create
 * 			project [default]
 *
 * 			module
 *
 * 			transform
 *
 *	objectname
 *		Name of object to create
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

function create(argv, cb) {
	winston.info('Starting create task...');
	cb(null);
}

module.exports = create;

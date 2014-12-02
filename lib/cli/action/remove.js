var winston = require('winston');

/**
 * NAME
 *  patternplate remove - Remove patternplate objects
 *
 * SYNOPSIS
 * 	patternplate remove [objecttype] [objectname]
 *
 * OPTIONS
 * 	objecttype
 *	 Type of object to remove
 * 			project
 *
 * 			module
 *
 * 			transform
 *
 *	objectname
 *		Name of object to remove
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

function remove(argv, cb) {
	winston.info('Starting remove task...');
	cb(null);
}

module.exports = remove;

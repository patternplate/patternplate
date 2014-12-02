/**
 * NAME
 *  patternplate list - List patternplate objects
 *
 * SYNOPSIS
 * 	patternplate list [objecttype] [searchpattern]
 *
 * OPTIONS
 * 	objecttype
 *	 Type of object to search for
 * 			project
 *
 * 			module
 *
 * 			transform
 *
 *	searchpattern
 *		Search pattern to grep the list against
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

function list(argv, cb) {
	cb(null);
}

module.exports = list;

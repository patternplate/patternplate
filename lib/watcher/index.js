var chokidar = require('chokidar');

function watcher(patternplate, next) {
	patternplate.log.verbose('Starting watcher...');
	next = typeof next === 'function' ? next : function(){};
	next();
}

module.exports = watcher;

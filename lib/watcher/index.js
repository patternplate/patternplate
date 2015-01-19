var chokidar = require('chokidar');

function startWatcher(patternplate, next) {
	patternplate.log.verbose('Starting watcher...');
	next = typeof next === 'function' ? next : function(){};

	var watcher = chokidar.watch(patternplate.config.paths.patterns, {
		persistent: true
	}).on('ready', function(){
		patternplate.log.verbose('Watcher monitors file changes on', patternplate.config.paths.patterns);

		watcher.on('all', function(eventName, path){
			if (typeof path !== 'string') return;
			patternplate.log.silly('Watcher received file change', eventName, 'on', path);
		});

		next();
	});

}

module.exports = startWatcher;

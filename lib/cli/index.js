var requireAll = require('require-all');
var winston = require('winston');

var actions = requireAll({
	dirname: __dirname + '/action',
	filter: /(.*).js/
});

var aliases = require('./resources/aliases');

function cli(argv, cb) {
	var actionName = argv._[0];
	var actionFn = actions[actionName] || actions[aliases[actionName]];

	if ( typeof actionName == 'undefined' || typeof actionFn !== 'function') {
		var message = typeof actionName == 'undefined' ? 'Missing action parameter' : 'Could not find action with name ' + actionName;
		winston.warn('%s.', message);
		return actions.help(argv, cb);
	}

	actionFn(argv, cb);
}

module.exports = cli;

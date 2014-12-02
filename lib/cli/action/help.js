var winston = require('winston');
var requireAll = require('require-all');

var actions = requireAll({
	dirname: __dirname + '/../action',
	filter: /(.*).js/
});

var types = requireAll({
	dirname: __dirname + '/../../type',
	filter: /(.*).js/
});

function help(argv, cb) {
	winston.info('Usage: action [objecttype] [objectname]', argv.pkg.name);
	winston.info('actions: %s', Object.keys(actions).join(', '));
	winston.info('types: %s', Object.keys(types).join(', '));
	cb(null);
}

module.exports = help;

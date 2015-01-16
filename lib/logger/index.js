var winston = require('winston');

function logger(loglevel) {
	return new (winston.Logger)({
		transports: [ new (winston.transports.Console)({ level: loglevel }) ]
	});
}

module.exports = logger;

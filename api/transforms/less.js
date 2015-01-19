/* global Buffer */
var less = require('less');

module.exports = {
	transform: function(buffer, config, next) {
		less.render(buffer.toString('utf-8'), config, function(err, results){
			if (err) return next(err);
			next(null, new Buffer(results.css));
		});
	}
};

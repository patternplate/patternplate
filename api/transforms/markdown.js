var marked = require('marked');

module.exports = {
	transform: function(buffer, config, next) {
		marked(buffer.toString('utf-8'), config, function(err, results){
			if (err) return next(err);
			next(null, new Buffer(results));
		});
	}
};

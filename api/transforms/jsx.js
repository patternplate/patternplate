module.exports = {
	config: {
		pattern: /(.*).js/
	},
	transform: function(buffer, config, next) {
		next(null, buffer);
	}
};

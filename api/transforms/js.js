module.exports = {
	config: {
		pattern: /(.*).js/
	},
	transform: function(buffer, next) {
		next(null, buffer);
	}
};

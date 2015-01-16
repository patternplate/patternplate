module.exports = {
	config: {
		pattern: /(.*).js/
	},
	transform: function(buffer, next) {
		console.log('jsx');
		next(null, buffer);
	}
};

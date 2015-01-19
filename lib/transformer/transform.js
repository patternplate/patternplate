module.exports = {
	config: {
		development: {

		},
		production: {

		}
	},

	beforeTransform: function(buffer, config, next) {
		next(null, buffer);
	},

	afterTransform: function(buffer, config, next) {
		next(null, buffer);
	}
};

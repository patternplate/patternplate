module.exports = {
	transform: function(buffer, next) {
		console.log('markdown');
		next(null, buffer);
	}
};

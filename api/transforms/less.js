module.exports = {
	transform: function(buffer, next) {
		console.log('less');
		next(null, buffer);
	}
};

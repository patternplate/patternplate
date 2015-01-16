function sanitizeName(name, rulesConfig) {
	var behaviours = Object.keys(rulesConfig);

	behaviours.forEach(function(behaviour){
		var expression = new RegExp(rulesConfig[behaviour]);
		var matches = expression.exec(name);

		if (matches) {
			name = matches[matches.length - 1];
		}
	});

	return name;
}

module.exports = sanitizeName;

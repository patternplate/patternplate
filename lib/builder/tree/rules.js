function rules(fileName, rulesConfig) {
	var behaviours = Object.keys(rulesConfig);
	var results = [];

	behaviours.forEach(function(behaviour){
		var pattern = new RegExp(rulesConfig[behaviour]);
		if (fileName.match(pattern)){
			results.push(behaviour);
		}
	});

	return results;
}

module.exports = rules;

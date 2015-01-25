var path = require('path');
var fs = require('fs');

var sanitizeName = require('./sanitize-name');

function pattern(dirName, rootPath, rulesConfig, next) {
	var info;
	var patternJSONPath = path.resolve(dirName, 'pattern.json');

	fs.exists(patternJSONPath, function(exists){
		if (! exists) return next();
		info = {};

		fs.readFile(patternJSONPath, function(err, buffer){
			if (err) return next(err);

			var contents = buffer.toString('utf-8');
			var jsonData;

			try {
				jsonData = JSON.parse(contents);
			} catch (e) {
				next(e);
			}

			info.patternJSON = Object.assign({}, { dependencies: {} }, jsonData);
			info.name = jsonData.name || sanitizeName(path.basename(dirName), rulesConfig);

			var sanitizedPath = path.dirname(dirName).split('/').map(function(fragment){
				return sanitizeName(fragment, rulesConfig);
			}).join('/');

			info.id = [path.relative(rootPath, sanitizedPath), info.name].join('/');
			next(null, info);
		});
	});
}

module.exports = pattern;

require('es6-shim');

var fs = require('fs');
var path = require('path');

var rules = require('./rules');
var blacklist = require('./blacklist');
var dir = require('./dir');
var file = require('./file');
var pattern = require('./pattern');

var rootPath = null;

function tree(fileName, blacklistConfig, rulesConfig, next) {
	next = typeof next === 'function' ? next : function(){};
	var baseName = path.basename(fileName);

	var info = {
		paths: {
			absolute: fileName
		},
		file: {
			name: baseName,
			ext: path.extname(fileName)
		}
	};

	// Memorize the initial path
	if (rootPath === null) {
		rootPath = fileName;
	}

	// Ignore blacklisted files
	if (blacklist(baseName, blacklistConfig)) {
		return next();
	}

	info.paths.relative = path.relative(rootPath, fileName);

	// Determine behaviours based on configuration
	info.behaviours = rules(info.file.name, rulesConfig);

	fs.lstat(fileName, function(err, stats){
		if (err) return next(err);
		info.file.type = stats.isDirectory() ? 'directory' : 'file';

		if (info.file.type === 'directory') {
			dir(fileName, blacklistConfig, rulesConfig, tree, function(err, children){
				if (err) return next(err);
				info.children = children;

				// Check if this is a valid pattern folder
				pattern(fileName, rootPath, rulesConfig, function(err, patternInfo){
					if (err) return next(err);
					if (patternInfo) {
						info.pattern = patternInfo;
					}
					next(err, info);
				});
			});
		} else {
			file(info, function(err, fileInfo){
				if (err) {
					next(err);
				}
				info.file = fileInfo.file;
				next(null, info);
			});
		}
	});
}

module.exports = tree;

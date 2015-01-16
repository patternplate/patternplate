require('es6-shim');

var fs = require('fs');
var path = require('path');
var async = require('async');

var rules = require('./rules');
var blacklist = require('./blacklist');
var dir = require('./dir');
var pattern = require('./pattern');

var rootPath = null;

function tree(fileName, blacklistConfig, rulesConfig, next) {
	next = typeof next === 'function' ? next : function(){};
	var baseName = path.basename(fileName);

	// Memorize the initial path
	if (rootPath === null) {
		rootPath = fileName;
	}

	// Ignore blacklisted files
	if (blacklist(baseName, blacklistConfig)) {
		return next();
	}

	// Build up basic information
	var info = {
		paths: {
			absolute: fileName,
			relative: path.relative(rootPath, fileName),
		},
		file: {
			name: baseName,
			ext: path.extname(fileName)
		}
	};

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
				pattern(fileName, rulesConfig, function(err, patternInfo){
					if (err) return next(err);
					if (patternInfo) {
						info.pattern = patternInfo;
					}
					next(err, info);
				});
			});
		} else {
			fs.readFile(fileName, function(err, buffer){
				if (err) {
					next(err);
				}
				info.file.buffer = buffer;
				next(null, info);
			});

		}
	});

}

module.exports = tree;

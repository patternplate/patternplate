/* global patternplate */
var fs = require('fs');
var async = require('async');

function readFile(info, next) {
	fs.readFile(info.paths.absolute, function(err, buffer){
		if (err) return next(err);
		info.file.buffer = buffer;
		next(null, info);
	});
}

function file(info, next) {
	info.file.read = function(cb) {
		readFile(info, function(err, fileInfo){
			if (err) return cb(err);
			cb(null, fileInfo.file.buffer);
		});
	};

	info.file.transform = function(cb) {
		info.file.read(function(err, buffer){
			if (err) return cb(err);


			async.forEach(info.transforms, function(transform, callback){
				var config = Object.assign({}, transform.config, transform.config[patternplate.config.env] || {});
				transform.transform(buffer, config, function(err, results){
					if (err) return callback(err);
					info.result = results;
					callback(null, results);
				});
			}, cb);
		});
	};

	readFile(info, next);
}

module.exports = file;

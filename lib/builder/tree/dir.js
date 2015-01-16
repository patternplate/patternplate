var fs = require('fs');
var path = require('path');
var async = require('async');

function dir(dirName, blacklistConfig, rulesConfig, tree, next) {
	fs.readdir(dirName, function(err, children){
		async.map(children, function(child, cb){
			tree([dirName, child].join('/'), blacklistConfig, rulesConfig, cb);
		}, function(err, results){
			if (err) return next(err);
			return next(err, results.filter(function(item){ return item; }));
		});
	});
}

module.exports = dir;

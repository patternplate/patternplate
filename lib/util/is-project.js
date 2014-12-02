var path = require('path');
var fs = require('fs');

var isDir = require('./is-dir');

function isProject(dir, cb) {
	isDir(dir, function(err, dirresult){
		if (err) {
			return cb(err);
		}

		if (! dirresult) {
			return cb(dir + ' is no directory.');
		}

		var pkgPath = path.resolve(dir, 'package.json');

		fs.lstat(pkgPath, function(err, result) {
			if (err) {
				return cb(err);
			}

			if (! result) {
				return cb('Could not package.json in' + dir + '.');
			}

			var pkg = require(pkgPath);
			var dependencyMatch = Object.keys(pkg.dependencies).some(function(name){
				return name === 'patternplate';
			});

			if (pkg.name !== 'patternplate' && ! dependencyMatch) {
				return cb('Could not find reference to patternplate in package.json.');
			}
		});
	});
}

module.exports = isProject;

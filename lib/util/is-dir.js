var fs = require('fs');

function isDir(target, cb) {
	fs.lstat(target, function(err, stat){
		if (err) {
			return cb(err);
		}

		return cb(null, stat.isDirectory());
	});
}

module.exports = isDir;

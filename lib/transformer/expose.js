var requireAll = require('require-all');
var fs = require('fs');

function expose(dirName) {
	var exposed;
	if (fs.existsSync(dirName)) {
		exposed = requireAll({
			dirname: dirName,
			filter: /(.*).js$/
		});
	}

	return exposed || {};
}

module.exports = expose;

var path = require('path');

function findFileByPath(idPath, tree) {
	var fragments = idPath.split('/');
	var key = fragments.shift();

	var ext = path.extname(key);

	var match = tree.children.find(function(child){
		return child.file.name === key || ( ext !== '' && child.file.name === path.basename(key, ext) && child.file.ext === ext);
	});

	if (match && match.children && idPath.length !== 0) {
		match = findFileByPath(fragments.join('/'), match);
	}

	return match;
}

module.exports = findFileByPath;

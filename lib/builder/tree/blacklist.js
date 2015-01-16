function blacklist(fileName, blacklistConfig) {
	return fileName.charAt(0) === '.' || blacklistConfig.some(function(blacklistItem){
		return fileName === blacklistItem;
	});
}

module.exports = blacklist;

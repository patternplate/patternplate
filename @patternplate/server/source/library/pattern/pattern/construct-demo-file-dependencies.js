import constructFileDependencies from './construct-file-dependencies';
export default constructDemoFileDependencies;

function matchFileName(fileNames, search) {
	if (search.length > 1) {
		return fileNames.find(fileName => search.includes(fileName));
	}

	const [exact] = search;
	return fileNames.find(fileName => fileName === exact);
}

function constructDemoFileDependencies(dependencies, search) {
	return Object
		.entries(dependencies)
		.reduce((results, entry) => {
			const [dependencyName, dependencyPattern] = entry;

			const {files} = dependencyPattern;

			if (!files) {
				return results;
			}

			const fileNames = Object.keys(files);
			const matchedFileName = matchFileName(fileNames, search);
			const dependencyFile = dependencyPattern.files[matchedFileName];

			if (!dependencyFile) {
				return results;
			}

			if (dependencyFile.path) {
				dependencyFile.dependencies = constructFileDependencies(
					dependencyPattern.dependencies, search
				);

				results[dependencyName] = dependencyFile;
			}
			return results;
		}, {});
}

export default getComponents;

function getComponents(datasets, automount) {
	return automount ?
		datasets :
		datasets.filter(dataset => {
			const options = dataset.manifest.options;
			if (!options) {
				return false;
			}
			const opts = options['react-to-markup'] ? options['react-to-markup'].opts : {};
			return opts.automount;
		});
}

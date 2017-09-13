import path from 'path';
import chalk from 'chalk';
import {merge, uniq} from 'lodash';
import {stat} from 'sander';
import throat from 'throat';
import constructDemoFileDependencies from './construct-demo-file-dependencies';
import constructFileDependencies from './construct-file-dependencies';
import getReadFile from '../../filesystem/read-file';
import readDirectory from '../../filesystem/read-directory';
export default read;

async function read(pattern, subPath) {
	const read = getReadFile({cache: pattern.cache});

	const readStart = new Date();
	pattern.log.silly(`Reading files for ${pattern.id}`);

	const fileList = await readDirectory(subPath);
	const fileListDuration = chalk.grey(`[${new Date() - readStart}ms]`);
	pattern.log.silly(`Listed ${fileList.length} files for ${pattern.id} ${fileListDuration}`);

	// use filter, use all formats if none given
	const inFormats = pattern.filters.inFormats.length > 0 ?
		pattern.filters.inFormats :
		uniq(Object.keys(pattern.config.patterns.formats));

	const filterOutFormats = pattern.filters.outFormats.length ?
		outFormat => pattern.filters.outFormats.includes(outFormat) :
		() => true;

	// determine available requested out formats
	const outFormats = inFormats
		.reduce((result, format) => {
			const formatConfig = pattern.config.patterns.formats[format] || {transforms: []};
			const {transforms: transformNames} = formatConfig;

			if (!transformNames.length) {
				result.push(format);
				return result;
			}

			const transformOutFormats = transformNames
				.map(transformName => [transformName, pattern.config.transforms[transformName] || {}])
				.map(entry => entry[1].outFormat || entry[0]);

			const formatName = transformOutFormats[transformOutFormats.length - 1];

			if (!result.includes(formatName)) {
				result.push(formatName);
			}

			return result;
		}, [])
		.filter(filterOutFormats);

	// determine in formats for available out formats
	const inOutFormats = outFormats
		.reduce((result, format) => {
			const transforms = Object.entries(pattern.config.transforms)
				.map(entry => {
					const [name, config] = entry;
					return config.outFormat === format ? name : null;
				})
				.filter(Boolean);

			const formatNames = Object.entries(pattern.config.patterns.formats)
				.map(entry => {
					const [name, config] = entry;
					return transforms.indexOf(
						config.transforms[config.transforms.length - 1]) > -1 ?
							name : null;
				})
				.filter(Boolean);

			return [...result, ...formatNames];
		}, []);

	const filteredFormats = pattern.filters.outFormats.length > 0 ?
		inOutFormats : inFormats;

	pattern.log.silly(`${pattern.id} has ${filteredFormats.length} formats available: ${chalk.grey(filteredFormats)}`);

	// determine which basenames to read
	const baseNames = pattern.filters.baseNames && pattern.filters.baseNames.length > 0 ?
		pattern.filters.baseNames : ['index', 'demo'];

	// get the relevant pattern files
	const files = fileList
		.filter(file => {
			const fileExtension = path.extname(file);
			const fileRumpName = path.basename(file, fileExtension);
			return fileExtension && baseNames.indexOf(fileRumpName) > -1;
		});

	// determine the formats available for request
	const out = files
		.map(file => {
			const inFileFormat = path.extname(file).slice(1);
			const formatConfig = pattern.config.patterns.formats[inFileFormat] || {};
			const name = formatConfig.name || '';
			const transformNames = formatConfig.transforms || [];
			const lastTransform = pattern.config.transforms[transformNames[transformNames.length - 1]] || {};

			return {
				name,
				type: name.toLowerCase(),
				extension: lastTransform.outFormat || inFileFormat
			};
		});

	// provide meta data about formats
	pattern.outFormats = out;
	pattern.inFormats = inFormats;

	const filterFiles = filteredFormats.length ?
		file => filteredFormats.includes(path.extname(file).slice(1)) :
		() => true;

	// get the files matching our current filter
	const matchingFiles = files
		.filter(filterFiles)
		.map(file => path.resolve(pattern.base, pattern.id, file));

	const matchingFilesList = chalk.grey(`[${matchingFiles.map(file => path.basename(file))}]`);
	pattern.log.silly(`Using ${matchingFiles.length} of ${files.length} files for ${pattern.id}: ${matchingFilesList}`);

	const manifestStart = new Date();
	await pattern.readManifest(subPath);

	// read manifest information
	const manifestReadDuration = chalk.grey(`[${new Date() - manifestStart}ms]`);
	pattern.log.silly(`Read manifest for ${pattern.id} ${manifestReadDuration}`);

	// read in relevant file information
	const fileData = await Promise.all(matchingFiles.map(throat(5, async file => {
		const fileFs = await stat(file);
		fileFs.node = fileFs; // backwards compatibility

		const fileExt = path.extname(file);
		const fileBaseName = path.basename(file);
		const fileRumpName = path.basename(file, fileExt);
		const fileFormat = fileExt.slice(1);

		// check if the format/transform config requires us to fetch the buffer
		const formatConfig = pattern.config.patterns.formats[fileFormat] || {};
		const transformNames = formatConfig.transforms || [];
		const transforms = transformNames.map(name => pattern.config.transforms[name] || {});
		const resolveDependencies = transforms.some(transform => transform.resolveDependencies !== false);
		const isRoot = pattern.config.parents.length === 0;

		const fileContents = isRoot || resolveDependencies ?
			await read(file) :
			new Buffer('', 'utf-8');

		if (isRoot === false && resolveDependencies) {
			pattern.log.silly(`Reading ${pattern.id} as dependeny of ${pattern.config.parents[pattern.config.parents.length - 1]}`);
		}

		const dependencies = constructFileDependencies(pattern.dependencies, [`index${fileExt}`]);

		if (fileRumpName === 'demo') {
			const demoDependencies = constructDemoFileDependencies(pattern.demoDependencies, [`index${fileExt}`]);
			const overridden = Object.keys(demoDependencies).filter(key => key in dependencies);

			if (overridden.length > 0) {
				throw new Error(`Found .demoPattern entries duplicating .pattern entries in ${pattern.id}'s manifest': ${overridden.join(', ')}. Remove them from .demoPatterns.`);
			}

			merge(dependencies, demoDependencies);
		}

		// collect data in format expected by transforms
		return {
			basename: fileRumpName,
			buffer: fileContents,
			dependencies,
			ext: fileExt,
			format: fileFormat,
			fs: fileFs,
			name: fileBaseName,
			path: file,
			pattern,
			source: fileContents,
			meta: {
				dependencies: [],
				devDependencies: []
			}
		};
	})));

	// convert to consumable format
	pattern.files = fileData.reduce((results, data) => {
		return {...results, [data.name]: data};
	}, {});

	// expose which file to use for rendering
	const basenames = matchingFiles.map(matchingFile => rump(matchingFile));
	pattern.use = basenames.includes('demo') ? ['demo'] : ['index'];

	// read last-modified
	const readDuration = chalk.grey(`[${new Date() - readStart}ms]`);
	pattern.log.silly(`Read files for ${pattern.id}. ${readDuration}`);
	return pattern;
}

function rump(filePath) {
	return path.basename(filePath, path.extname(filePath));
}

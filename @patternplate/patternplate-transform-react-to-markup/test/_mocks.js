import {getFile} from './_helpers';

export const application = {
	configuration: {transforms: {'react-to-markup': {}}}
};

export const exportFile = getFile({
	buffer: new Buffer('module.exports = function() { return null; }'),
	path: 'empty/index.jsx'
});

export const defaultExportFile = getFile({
	buffer: new Buffer('module.exports.default = function() { return null; }'),
	path: 'empty/index.jsx'
});

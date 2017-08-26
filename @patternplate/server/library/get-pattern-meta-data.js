'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

let getPatternMetaData = (() => {
	var _ref = _asyncToGenerator(function* (application, id) {
		let env = arguments.length <= 2 || arguments[2] === undefined ? 'index' : arguments[2];

		const data = yield (0, _getPatternData2.default)(application, id, env);
		const transforms = application.configuration.transforms;
		const formats = application.configuration.patterns.formats;
		const manifest = data.manifest;


		return {
			base: data.base,
			dependencies: selectDependencies(data),
			dependents: manifest.dependentPatterns,
			display: manifest.display,
			environments: manifest.demoEnvironments,
			files: selectPatternFiles(data, { transforms: transforms, formats: formats }),
			id: data.id,
			manifest: {
				displayName: manifest.displayName || '',
				flag: manifest.flag || '',
				name: manifest.name,
				version: manifest.version,
				tags: manifest.tags || [],
				options: manifest.options || {}
			},
			use: data.use
		};
	});

	return function getPatternMetaData(_x, _x2) {
		return _ref.apply(this, arguments);
	};
})();

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _lodash = require('lodash');

var _getPatternData = require('./get-pattern-data');

var _getPatternData2 = _interopRequireDefault(_getPatternData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = getPatternMetaData;


function selectDependencies(data) {
	const sanitized = (0, _lodash.omit)(data.dependencies, ['Pattern']);
	return (0, _lodash.entries)(sanitized).reduce((dependencies, entry) => {
		var _entry = _slicedToArray(entry, 2);

		const name = _entry[0];
		const dependency = _entry[1];

		dependencies[name] = (0, _lodash.pick)(dependency, ['id', 'manifest']);
		return dependencies;
	}, {});
}

function selectPatternFiles(data, config) {
	const files = data.files;

	return data.outFormats.reduce((registry, outFormat) => {
		const name = outFormat.name;
		const type = outFormat.type;


		const candidates = Object.entries(config.formats).filter(entry => entry[1].name === outFormat.name).map(entry => entry[0]);

		const demoFile = candidates.map(ext => files[`demo.${ext}`]).filter(Boolean)[0];

		const indexFile = candidates.map(ext => files[`index.${ext}`]).filter(Boolean)[0];

		const file = demoFile || indexFile;

		if (!file) {
			return registry;
		}

		const concerns = [demoFile ? 'demo' : null, indexFile ? 'index' : null].filter(Boolean);

		const items = concerns.map(concern => {
			const id = [data.id, `${concern}${file.ext}`].join('/');
			return {
				concern: concern,
				displayName: name,
				id: id,
				in: selectInFormat(data, file),
				out: outFormat.extension,
				path: _path2.default.relative(data.base, file.path),
				type: type,
				transforms: selectTransforms(data, file)
			};
		});

		return (0, _lodash.uniqBy)([].concat(_toConsumableArray(registry), _toConsumableArray(items)), 'id');
	}, []);
}

function selectTransforms(data, file) {
	const name = file.format;
	const format = data.config.patterns.formats[name] || { transforms: [] };
	return format.transforms;
}

function selectInFormat(data, file) {
	const entry = selectTransforms(data, file)[0];
	const transform = data.config.transforms[entry] || { inFormat: file.format };
	return transform.inFormat;
}
module.exports = exports['default'];
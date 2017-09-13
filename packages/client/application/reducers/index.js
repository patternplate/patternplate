'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.dependencies = undefined;

var _activeBlock = require('./active-block');

var _activeBlock2 = _interopRequireDefault(_activeBlock);

var _base = require('./base');

var _base2 = _interopRequireDefault(_base);

var _codeEnabled = require('./code-enabled');

var _codeEnabled2 = _interopRequireDefault(_codeEnabled);

var _connection = require('./connection');

var _connection2 = _interopRequireDefault(_connection);

var _depth = require('./depth');

var _depth2 = _interopRequireDefault(_depth);

var _demo = require('./demo');

var _demo2 = _interopRequireDefault(_demo);

var _demoDependenciesEnabled = require('./demo-dependencies-enabled');

var _demoDependenciesEnabled2 = _interopRequireDefault(_demoDependenciesEnabled);

var _demoDependentsEnabled = require('./demo-dependents-enabled');

var _demoDependentsEnabled2 = _interopRequireDefault(_demoDependentsEnabled);

var _dependenciesEnabled = require('./dependencies-enabled');

var _dependenciesEnabled2 = _interopRequireDefault(_dependenciesEnabled);

var _dependentsEnabled = require('./dependents-enabled');

var _dependentsEnabled2 = _interopRequireDefault(_dependentsEnabled);

var _docEnabled = require('./doc-enabled');

var _docEnabled2 = _interopRequireDefault(_docEnabled);

var _environment = require('./environment');

var _environment2 = _interopRequireDefault(_environment);

var _fetching = require('./fetching');

var _fetching2 = _interopRequireDefault(_fetching);

var _id = require('./id');

var _id2 = _interopRequireDefault(_id);

var _infoEnabled = require('./info-enabled');

var _infoEnabled2 = _interopRequireDefault(_infoEnabled);

var _manifestEnabled = require('./manifest-enabled');

var _manifestEnabled2 = _interopRequireDefault(_manifestEnabled);

var _messages = require('./messages');

var _messages2 = _interopRequireDefault(_messages);

var _mountEnabled = require('./mount-enabled');

var _mountEnabled2 = _interopRequireDefault(_mountEnabled);

var _navigationEnabled = require('./navigation-enabled');

var _navigationEnabled2 = _interopRequireDefault(_navigationEnabled);

var _opacity = require('./opacity');

var _opacity2 = _interopRequireDefault(_opacity);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _searchEnabled = require('./search-enabled');

var _searchEnabled2 = _interopRequireDefault(_searchEnabled);

var _searchPreview = require('./search-preview');

var _searchPreview2 = _interopRequireDefault(_searchPreview);

var _searchValue = require('./search-value');

var _searchValue2 = _interopRequireDefault(_searchValue);

var _schema = require('./schema');

var _schema2 = _interopRequireDefault(_schema);

var _shortcuts = require('./shortcuts');

var _shortcuts2 = _interopRequireDefault(_shortcuts);

var _theme = require('./theme');

var _theme2 = _interopRequireDefault(_theme);

var _hideEnabled = require('./hide-enabled');

var _hideEnabled2 = _interopRequireDefault(_hideEnabled);

var _window = require('./window');

var _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ident = function ident() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	return state;
};
var getDependencies = function getDependencies() {
	var reducer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	return reducer.dependencies || [];
};

exports.default = {
	activeBlock: _activeBlock2.default,
	base: _base2.default,
	codeEnabled: _codeEnabled2.default,
	config: ident,
	connection: _connection2.default,
	demo: _demo2.default,
	demoDependenciesEnabled: _demoDependenciesEnabled2.default,
	demoDependentsEnabled: _demoDependentsEnabled2.default,
	dependenciesEnabled: _dependenciesEnabled2.default,
	dependentsEnabled: _dependentsEnabled2.default,
	depth: _depth2.default,
	docEnabled: _docEnabled2.default,
	environment: _environment2.default,
	fetching: _fetching2.default,
	hideEnabled: _hideEnabled2.default,
	id: _id2.default,
	infoEnabled: _infoEnabled2.default,
	manifestEnabled: _manifestEnabled2.default,
	messages: _messages2.default,
	mountEnabled: _mountEnabled2.default,
	navigationEnabled: _navigationEnabled2.default,
	opacity: _opacity2.default,
	schema: _schema2.default,
	search: _search2.default,
	searchEnabled: _searchEnabled2.default,
	searchPreview: _searchPreview2.default,
	searchValue: _searchValue2.default,
	shortcuts: _shortcuts2.default,
	startBase: ident,
	theme: _theme2.default,
	window: _window2.default
};
var dependencies = exports.dependencies = {
	connection: getDependencies(_connection2.default)
};
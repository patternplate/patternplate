'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dependencies = undefined;

const _activeBlock = require('./active-block');

const _activeBlock2 = _interopRequireDefault(_activeBlock);

const _base = require('./base');

const _base2 = _interopRequireDefault(_base);

const _codeEnabled = require('./code-enabled');

const _codeEnabled2 = _interopRequireDefault(_codeEnabled);

const _connection = require('./connection');

const _connection2 = _interopRequireDefault(_connection);

const _depth = require('./depth');

const _depth2 = _interopRequireDefault(_depth);

const _demo = require('./demo');

const _demo2 = _interopRequireDefault(_demo);

const _demoDependenciesEnabled = require('./demo-dependencies-enabled');

const _demoDependenciesEnabled2 = _interopRequireDefault(_demoDependenciesEnabled);

const _demoDependentsEnabled = require('./demo-dependents-enabled');

const _demoDependentsEnabled2 = _interopRequireDefault(_demoDependentsEnabled);

const _dependenciesEnabled = require('./dependencies-enabled');

const _dependenciesEnabled2 = _interopRequireDefault(_dependenciesEnabled);

const _dependentsEnabled = require('./dependents-enabled');

const _dependentsEnabled2 = _interopRequireDefault(_dependentsEnabled);

const _docEnabled = require('./doc-enabled');

const _docEnabled2 = _interopRequireDefault(_docEnabled);

const _environment = require('./environment');

const _environment2 = _interopRequireDefault(_environment);

const _fetching = require('./fetching');

const _fetching2 = _interopRequireDefault(_fetching);

const _id = require('./id');

const _id2 = _interopRequireDefault(_id);

const _infoEnabled = require('./info-enabled');

const _infoEnabled2 = _interopRequireDefault(_infoEnabled);

const _manifestEnabled = require('./manifest-enabled');

const _manifestEnabled2 = _interopRequireDefault(_manifestEnabled);

const _messages = require('./messages');

const _messages2 = _interopRequireDefault(_messages);

const _mountEnabled = require('./mount-enabled');

const _mountEnabled2 = _interopRequireDefault(_mountEnabled);

const _navigationEnabled = require('./navigation-enabled');

const _navigationEnabled2 = _interopRequireDefault(_navigationEnabled);

const _opacity = require('./opacity');

const _opacity2 = _interopRequireDefault(_opacity);

const _search = require('./search');

const _search2 = _interopRequireDefault(_search);

const _searchEnabled = require('./search-enabled');

const _searchEnabled2 = _interopRequireDefault(_searchEnabled);

const _searchPreview = require('./search-preview');

const _searchPreview2 = _interopRequireDefault(_searchPreview);

const _searchValue = require('./search-value');

const _searchValue2 = _interopRequireDefault(_searchValue);

const _schema = require('./schema');

const _schema2 = _interopRequireDefault(_schema);

const _shortcuts = require('./shortcuts');

const _shortcuts2 = _interopRequireDefault(_shortcuts);

const _theme = require('./theme');

const _theme2 = _interopRequireDefault(_theme);

const _hideEnabled = require('./hide-enabled');

const _hideEnabled2 = _interopRequireDefault(_hideEnabled);

const _window = require('./window');

const _window2 = _interopRequireDefault(_window);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ident = function ident() {
  const state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return state;
};
const getDependencies = function getDependencies() {
  const reducer = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
const dependencies = exports.dependencies = {
  connection: getDependencies(_connection2.default)
};
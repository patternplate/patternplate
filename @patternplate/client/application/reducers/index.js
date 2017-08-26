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

var _lightbox = require('./lightbox');

var _lightbox2 = _interopRequireDefault(_lightbox);

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

var _pattern = require('./pattern');

var _pattern2 = _interopRequireDefault(_pattern);

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
	lightbox: _lightbox2.default,
	manifestEnabled: _manifestEnabled2.default,
	messages: _messages2.default,
	mountEnabled: _mountEnabled2.default,
	navigationEnabled: _navigationEnabled2.default,
	opacity: _opacity2.default,
	pattern: _pattern2.default,
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
	connection: getDependencies(_connection2.default),
	pattern: getDependencies(_pattern2.default)
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9yZWR1Y2Vycy9pbmRleC5qcyJdLCJuYW1lcyI6WyJpZGVudCIsInN0YXRlIiwiZ2V0RGVwZW5kZW5jaWVzIiwicmVkdWNlciIsImRlcGVuZGVuY2llcyIsImFjdGl2ZUJsb2NrIiwiYmFzZSIsImNvZGVFbmFibGVkIiwiY29uZmlnIiwiY29ubmVjdGlvbiIsImRlbW8iLCJkZW1vRGVwZW5kZW5jaWVzRW5hYmxlZCIsImRlbW9EZXBlbmRlbnRzRW5hYmxlZCIsImRlcGVuZGVuY2llc0VuYWJsZWQiLCJkZXBlbmRlbnRzRW5hYmxlZCIsImRlcHRoIiwiZG9jRW5hYmxlZCIsImVudmlyb25tZW50IiwiZmV0Y2hpbmciLCJoaWRlRW5hYmxlZCIsImlkIiwiaW5mb0VuYWJsZWQiLCJsaWdodGJveCIsIm1hbmlmZXN0RW5hYmxlZCIsIm1lc3NhZ2VzIiwibW91bnRFbmFibGVkIiwibmF2aWdhdGlvbkVuYWJsZWQiLCJvcGFjaXR5IiwicGF0dGVybiIsInNjaGVtYSIsInNlYXJjaCIsInNlYXJjaEVuYWJsZWQiLCJzZWFyY2hQcmV2aWV3Iiwic2VhcmNoVmFsdWUiLCJzaG9ydGN1dHMiLCJzdGFydEJhc2UiLCJ0aGVtZSIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxRQUFRLFNBQVJBLEtBQVE7QUFBQSxLQUFDQyxLQUFELHVFQUFTLEVBQVQ7QUFBQSxRQUFnQkEsS0FBaEI7QUFBQSxDQUFkO0FBQ0EsSUFBTUMsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLEtBQUNDLE9BQUQsdUVBQVcsRUFBWDtBQUFBLFFBQWtCQSxRQUFRQyxZQUFSLElBQXdCLEVBQTFDO0FBQUEsQ0FBeEI7O2tCQUVlO0FBQ2RDLG1DQURjO0FBRWRDLHFCQUZjO0FBR2RDLG1DQUhjO0FBSWRDLFNBQVFSLEtBSk07QUFLZFMsaUNBTGM7QUFNZEMscUJBTmM7QUFPZEMsMkRBUGM7QUFRZEMsdURBUmM7QUFTZEMsbURBVGM7QUFVZEMsK0NBVmM7QUFXZEMsdUJBWGM7QUFZZEMsaUNBWmM7QUFhZEMsbUNBYmM7QUFjZEMsNkJBZGM7QUFlZEMsbUNBZmM7QUFnQmRDLGlCQWhCYztBQWlCZEMsbUNBakJjO0FBa0JkQyw2QkFsQmM7QUFtQmRDLDJDQW5CYztBQW9CZEMsNkJBcEJjO0FBcUJkQyxxQ0FyQmM7QUFzQmRDLCtDQXRCYztBQXVCZEMsMkJBdkJjO0FBd0JkQywyQkF4QmM7QUF5QmRDLHlCQXpCYztBQTBCZEMseUJBMUJjO0FBMkJkQyx1Q0EzQmM7QUE0QmRDLHVDQTVCYztBQTZCZEMsbUNBN0JjO0FBOEJkQywrQkE5QmM7QUErQmRDLFlBQVduQyxLQS9CRztBQWdDZG9DLHVCQWhDYztBQWlDZEM7QUFqQ2MsQztBQW9DUixJQUFNakMsc0NBQWU7QUFDM0JLLGFBQVlQLHFDQURlO0FBRTNCMEIsVUFBUzFCO0FBRmtCLENBQXJCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGFjdGl2ZUJsb2NrIGZyb20gJy4vYWN0aXZlLWJsb2NrJztcbmltcG9ydCBiYXNlIGZyb20gJy4vYmFzZSc7XG5pbXBvcnQgY29kZUVuYWJsZWQgZnJvbSAnLi9jb2RlLWVuYWJsZWQnO1xuaW1wb3J0IGNvbm5lY3Rpb24gZnJvbSAnLi9jb25uZWN0aW9uJztcbmltcG9ydCBkZXB0aCBmcm9tICcuL2RlcHRoJztcbmltcG9ydCBkZW1vIGZyb20gJy4vZGVtbyc7XG5pbXBvcnQgZGVtb0RlcGVuZGVuY2llc0VuYWJsZWQgZnJvbSAnLi9kZW1vLWRlcGVuZGVuY2llcy1lbmFibGVkJztcbmltcG9ydCBkZW1vRGVwZW5kZW50c0VuYWJsZWQgZnJvbSAnLi9kZW1vLWRlcGVuZGVudHMtZW5hYmxlZCc7XG5pbXBvcnQgZGVwZW5kZW5jaWVzRW5hYmxlZCBmcm9tICcuL2RlcGVuZGVuY2llcy1lbmFibGVkJztcbmltcG9ydCBkZXBlbmRlbnRzRW5hYmxlZCBmcm9tICcuL2RlcGVuZGVudHMtZW5hYmxlZCc7XG5pbXBvcnQgZG9jRW5hYmxlZCBmcm9tICcuL2RvYy1lbmFibGVkJztcbmltcG9ydCBlbnZpcm9ubWVudCBmcm9tICcuL2Vudmlyb25tZW50JztcbmltcG9ydCBmZXRjaGluZyBmcm9tICcuL2ZldGNoaW5nJztcbmltcG9ydCBpZCBmcm9tICcuL2lkJztcbmltcG9ydCBpbmZvRW5hYmxlZCBmcm9tICcuL2luZm8tZW5hYmxlZCc7XG5pbXBvcnQgbGlnaHRib3ggZnJvbSAnLi9saWdodGJveCc7XG5pbXBvcnQgbWFuaWZlc3RFbmFibGVkIGZyb20gJy4vbWFuaWZlc3QtZW5hYmxlZCc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi9tZXNzYWdlcyc7XG5pbXBvcnQgbW91bnRFbmFibGVkIGZyb20gJy4vbW91bnQtZW5hYmxlZCc7XG5pbXBvcnQgbmF2aWdhdGlvbkVuYWJsZWQgZnJvbSAnLi9uYXZpZ2F0aW9uLWVuYWJsZWQnO1xuaW1wb3J0IG9wYWNpdHkgZnJvbSAnLi9vcGFjaXR5JztcbmltcG9ydCBwYXR0ZXJuIGZyb20gJy4vcGF0dGVybic7XG5pbXBvcnQgc2VhcmNoIGZyb20gJy4vc2VhcmNoJztcbmltcG9ydCBzZWFyY2hFbmFibGVkIGZyb20gJy4vc2VhcmNoLWVuYWJsZWQnO1xuaW1wb3J0IHNlYXJjaFByZXZpZXcgZnJvbSAnLi9zZWFyY2gtcHJldmlldyc7XG5pbXBvcnQgc2VhcmNoVmFsdWUgZnJvbSAnLi9zZWFyY2gtdmFsdWUnO1xuaW1wb3J0IHNjaGVtYSBmcm9tICcuL3NjaGVtYSc7XG5pbXBvcnQgc2hvcnRjdXRzIGZyb20gJy4vc2hvcnRjdXRzJztcbmltcG9ydCB0aGVtZSBmcm9tICcuL3RoZW1lJztcbmltcG9ydCBoaWRlRW5hYmxlZCBmcm9tICcuL2hpZGUtZW5hYmxlZCc7XG5pbXBvcnQgd2luZG93IGZyb20gJy4vd2luZG93JztcblxuY29uc3QgaWRlbnQgPSAoc3RhdGUgPSB7fSkgPT4gc3RhdGU7XG5jb25zdCBnZXREZXBlbmRlbmNpZXMgPSAocmVkdWNlciA9IHt9KSA9PiByZWR1Y2VyLmRlcGVuZGVuY2llcyB8fCBbXTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRhY3RpdmVCbG9jayxcblx0YmFzZSxcblx0Y29kZUVuYWJsZWQsXG5cdGNvbmZpZzogaWRlbnQsXG5cdGNvbm5lY3Rpb24sXG5cdGRlbW8sXG5cdGRlbW9EZXBlbmRlbmNpZXNFbmFibGVkLFxuXHRkZW1vRGVwZW5kZW50c0VuYWJsZWQsXG5cdGRlcGVuZGVuY2llc0VuYWJsZWQsXG5cdGRlcGVuZGVudHNFbmFibGVkLFxuXHRkZXB0aCxcblx0ZG9jRW5hYmxlZCxcblx0ZW52aXJvbm1lbnQsXG5cdGZldGNoaW5nLFxuXHRoaWRlRW5hYmxlZCxcblx0aWQsXG5cdGluZm9FbmFibGVkLFxuXHRsaWdodGJveCxcblx0bWFuaWZlc3RFbmFibGVkLFxuXHRtZXNzYWdlcyxcblx0bW91bnRFbmFibGVkLFxuXHRuYXZpZ2F0aW9uRW5hYmxlZCxcblx0b3BhY2l0eSxcblx0cGF0dGVybixcblx0c2NoZW1hLFxuXHRzZWFyY2gsXG5cdHNlYXJjaEVuYWJsZWQsXG5cdHNlYXJjaFByZXZpZXcsXG5cdHNlYXJjaFZhbHVlLFxuXHRzaG9ydGN1dHMsXG5cdHN0YXJ0QmFzZTogaWRlbnQsXG5cdHRoZW1lLFxuXHR3aW5kb3dcbn07XG5cbmV4cG9ydCBjb25zdCBkZXBlbmRlbmNpZXMgPSB7XG5cdGNvbm5lY3Rpb246IGdldERlcGVuZGVuY2llcyhjb25uZWN0aW9uKSxcblx0cGF0dGVybjogZ2V0RGVwZW5kZW5jaWVzKHBhdHRlcm4pXG59O1xuIl19
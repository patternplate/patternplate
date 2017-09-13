'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _toggleSearch = require('../components/toggle-search');

var _toggleSearch2 = _interopRequireDefault(_toggleSearch);

var _withToggle = require('../connectors/with-toggle');

var _withToggle2 = _interopRequireDefault(_withToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = (0, _withToggle2.default)(actions.toggleSearch)(_toggleSearch2.default);
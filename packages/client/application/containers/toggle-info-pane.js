'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _toggleInfoPane = require('../components/toggle-info-pane');

var _toggleInfoPane2 = _interopRequireDefault(_toggleInfoPane);

var _withToggle = require('../connectors/with-toggle');

var _withToggle2 = _interopRequireDefault(_withToggle);

var _withActiveForPattern = require('../connectors/with-active-for-pattern');

var _withActiveForPattern2 = _interopRequireDefault(_withActiveForPattern);

var _behaviours = require('../behaviours');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var InfoPaneToggle = (0, _withToggle2.default)(actions.toggleInfo)(_toggleInfoPane2.default);
exports.default = (0, _withActiveForPattern2.default)((0, _behaviours.skippable)(InfoPaneToggle));
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _toggleDoc = require('../components/toggle-doc');

var _toggleDoc2 = _interopRequireDefault(_toggleDoc);

var _withToggle = require('../connectors/with-toggle');

var _withToggle2 = _interopRequireDefault(_withToggle);

var _withActiveForDoc = require('../connectors/with-active-for-doc');

var _withActiveForDoc2 = _interopRequireDefault(_withActiveForDoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var DocToggle = (0, _withToggle2.default)(actions.toggleDoc)(_toggleDoc2.default);
exports.default = (0, _withActiveForDoc2.default)(DocToggle);
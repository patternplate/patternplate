'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _actions = require('../actions');

const actions = _interopRequireWildcard(_actions);

const _toggleCode = require('../components/toggle-code');

const _toggleCode2 = _interopRequireDefault(_toggleCode);

const _withToggle = require('../connectors/with-toggle');

const _withToggle2 = _interopRequireDefault(_withToggle);

const _withActiveForPattern = require('../connectors/with-active-for-pattern');

const _withActiveForPattern2 = _interopRequireDefault(_withActiveForPattern);

const _behaviours = require('../behaviours');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

const CodeToggle = (0, _withToggle2.default)(actions.toggleCode)(_toggleCode2.default);
exports.default = (0, _withActiveForPattern2.default)((0, _behaviours.skippable)(CodeToggle));
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _actions = require('../actions');

const actions = _interopRequireWildcard(_actions);

const _toggleDoc = require('../components/toggle-doc');

const _toggleDoc2 = _interopRequireDefault(_toggleDoc);

const _withToggle = require('../connectors/with-toggle');

const _withToggle2 = _interopRequireDefault(_withToggle);

const _withActiveForDoc = require('../connectors/with-active-for-doc');

const _withActiveForDoc2 = _interopRequireDefault(_withActiveForDoc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

const DocToggle = (0, _withToggle2.default)(actions.toggleDoc)(_toggleDoc2.default);
exports.default = (0, _withActiveForDoc2.default)(DocToggle);
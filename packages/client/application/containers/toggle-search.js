'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _actions = require('../actions');

const actions = _interopRequireWildcard(_actions);

const _toggleSearch = require('../components/toggle-search');

const _toggleSearch2 = _interopRequireDefault(_toggleSearch);

const _withToggle = require('../connectors/with-toggle');

const _withToggle2 = _interopRequireDefault(_withToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

exports.default = (0, _withToggle2.default)(actions.toggleSearch)(_toggleSearch2.default);
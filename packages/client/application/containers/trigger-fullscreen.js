'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _reactRedux = require('react-redux');

const _triggerFullscreen = require('../components/trigger-fullscreen');

const _triggerFullscreen2 = _interopRequireDefault(_triggerFullscreen);

const _withActiveForPattern = require('../connectors/with-active-for-pattern');

const _withActiveForPattern2 = _interopRequireDefault(_withActiveForPattern);

const _withId = require('../connectors/with-id');

const _withId2 = _interopRequireDefault(_withId);

const _demo = require('../selectors/demo');

const demo = _interopRequireWildcard(_demo);

const _behaviours = require('../behaviours');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const SkippableFullscreen = (0, _withActiveForPattern2.default)((0, _behaviours.skippable)(_triggerFullscreen2.default));

const mapProps = function mapProps(state) {
  return {
    href: demo.selectSrc(state)
  };
};

exports.default = (0, _reactRedux.connect)(mapProps)((0, _withId2.default)(SkippableFullscreen));
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _triggerFullscreen = require('../components/trigger-fullscreen');

var _triggerFullscreen2 = _interopRequireDefault(_triggerFullscreen);

var _withActiveForPattern = require('../connectors/with-active-for-pattern');

var _withActiveForPattern2 = _interopRequireDefault(_withActiveForPattern);

var _withId = require('../connectors/with-id');

var _withId2 = _interopRequireDefault(_withId);

var _demo = require('../selectors/demo');

var demo = _interopRequireWildcard(_demo);

var _behaviours = require('../behaviours');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SkippableFullscreen = (0, _withActiveForPattern2.default)((0, _behaviours.skippable)(_triggerFullscreen2.default));

var mapProps = function mapProps(state) {
	return {
		href: demo.selectSrc(state)
	};
};

exports.default = (0, _reactRedux.connect)(mapProps)((0, _withId2.default)(SkippableFullscreen));
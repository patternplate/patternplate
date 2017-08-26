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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL3RyaWdnZXItZnVsbHNjcmVlbi5qcyJdLCJuYW1lcyI6WyJkZW1vIiwiU2tpcHBhYmxlRnVsbHNjcmVlbiIsIm1hcFByb3BzIiwiaHJlZiIsInNlbGVjdFNyYyIsInN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsSTs7QUFDWjs7Ozs7O0FBRUEsSUFBTUMsc0JBQXNCLG9DQUFxQix1REFBckIsQ0FBNUI7O0FBRUEsSUFBTUMsV0FBVyxTQUFYQSxRQUFXLFFBQVM7QUFDekIsUUFBTztBQUNOQyxRQUFNSCxLQUFLSSxTQUFMLENBQWVDLEtBQWY7QUFEQSxFQUFQO0FBR0EsQ0FKRDs7a0JBTWUseUJBQVFILFFBQVIsRUFBa0Isc0JBQU9ELG1CQUFQLENBQWxCLEMiLCJmaWxlIjoidHJpZ2dlci1mdWxsc2NyZWVuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgRnVsbHNjcmVlbiBmcm9tICcuLi9jb21wb25lbnRzL3RyaWdnZXItZnVsbHNjcmVlbic7XG5pbXBvcnQgd2l0aEFjdGl2ZUZvclBhdHRlcm4gZnJvbSAnLi4vY29ubmVjdG9ycy93aXRoLWFjdGl2ZS1mb3ItcGF0dGVybic7XG5pbXBvcnQgd2l0aElkIGZyb20gJy4uL2Nvbm5lY3RvcnMvd2l0aC1pZCc7XG5pbXBvcnQgKiBhcyBkZW1vIGZyb20gJy4uL3NlbGVjdG9ycy9kZW1vJztcbmltcG9ydCB7c2tpcHBhYmxlfSBmcm9tICcuLi9iZWhhdmlvdXJzJztcblxuY29uc3QgU2tpcHBhYmxlRnVsbHNjcmVlbiA9IHdpdGhBY3RpdmVGb3JQYXR0ZXJuKHNraXBwYWJsZShGdWxsc2NyZWVuKSk7XG5cbmNvbnN0IG1hcFByb3BzID0gc3RhdGUgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGhyZWY6IGRlbW8uc2VsZWN0U3JjKHN0YXRlKVxuXHR9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBQcm9wcykod2l0aElkKFNraXBwYWJsZUZ1bGxzY3JlZW4pKTtcbiJdfQ==
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _logo = require('../components/logo');

var _logo2 = _interopRequireDefault(_logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapState)(_logo2.default);


function mapState(state) {
	return {
		source: state.config.logo
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL2xvZ28uanMiXSwibmFtZXMiOlsibWFwU3RhdGUiLCJzdGF0ZSIsInNvdXJjZSIsImNvbmZpZyIsImxvZ28iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBOzs7Ozs7a0JBRWUseUJBQVFBLFFBQVIsaUI7OztBQUVmLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3hCLFFBQU87QUFDTkMsVUFBUUQsTUFBTUUsTUFBTixDQUFhQztBQURmLEVBQVA7QUFHQSIsImZpbGUiOiJsb2dvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBMb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvbG9nbyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUpKExvZ28pO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHNvdXJjZTogc3RhdGUuY29uZmlnLmxvZ29cblx0fTtcbn1cbiJdfQ==
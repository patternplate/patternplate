'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _favicon = require('../components/favicon');

var _favicon2 = _interopRequireDefault(_favicon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapState)(_favicon2.default);


function mapState(state) {
	return {
		source: state.config.favicon
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL2Zhdmljb24uanMiXSwibmFtZXMiOlsibWFwU3RhdGUiLCJzdGF0ZSIsInNvdXJjZSIsImNvbmZpZyIsImZhdmljb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUVBOzs7Ozs7a0JBRWUseUJBQVFBLFFBQVIsb0I7OztBQUVmLFNBQVNBLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3hCLFFBQU87QUFDTkMsVUFBUUQsTUFBTUUsTUFBTixDQUFhQztBQURmLEVBQVA7QUFHQSIsImZpbGUiOiJmYXZpY29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBGYXZpY29uIGZyb20gJy4uL2NvbXBvbmVudHMvZmF2aWNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGUpKEZhdmljb24pO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZShzdGF0ZSkge1xuXHRyZXR1cm4ge1xuXHRcdHNvdXJjZTogc3RhdGUuY29uZmlnLmZhdmljb25cblx0fTtcbn1cbiJdfQ==
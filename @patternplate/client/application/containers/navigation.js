'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _navigation = require('../components/navigation');

var _navigation2 = _interopRequireDefault(_navigation);

var _navigation3 = require('../selectors/navigation');

var _navigation4 = _interopRequireDefault(_navigation3);

var _docs = require('../selectors/docs');

var _docs2 = _interopRequireDefault(_docs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(mapProps)(_navigation2.default);


function mapProps(state) {
	return {
		active: state.id,
		docs: (0, _docs2.default)(state),
		navigation: (0, _navigation4.default)(state)
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL25hdmlnYXRpb24uanMiXSwibmFtZXMiOlsibWFwUHJvcHMiLCJzdGF0ZSIsImFjdGl2ZSIsImlkIiwiZG9jcyIsIm5hdmlnYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7O2tCQUVlLHlCQUFRQSxRQUFSLHVCOzs7QUFFZixTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUN4QixRQUFPO0FBQ05DLFVBQVFELE1BQU1FLEVBRFI7QUFFTkMsUUFBTSxvQkFBV0gsS0FBWCxDQUZBO0FBR05JLGNBQVksMEJBQWlCSixLQUFqQjtBQUhOLEVBQVA7QUFLQSIsImZpbGUiOiJuYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjb25uZWN0fSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24nO1xuaW1wb3J0IHNlbGVjdE5hdmlnYXRpb24gZnJvbSAnLi4vc2VsZWN0b3JzL25hdmlnYXRpb24nO1xuaW1wb3J0IHNlbGVjdERvY3MgZnJvbSAnLi4vc2VsZWN0b3JzL2RvY3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFByb3BzKShOYXZpZ2F0aW9uKTtcblxuZnVuY3Rpb24gbWFwUHJvcHMoc3RhdGUpIHtcblx0cmV0dXJuIHtcblx0XHRhY3RpdmU6IHN0YXRlLmlkLFxuXHRcdGRvY3M6IHNlbGVjdERvY3Moc3RhdGUpLFxuXHRcdG5hdmlnYXRpb246IHNlbGVjdE5hdmlnYXRpb24oc3RhdGUpXG5cdH07XG59XG4iXX0=
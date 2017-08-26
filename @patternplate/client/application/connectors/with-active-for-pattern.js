'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _reactRedux = require('react-redux');

var _item = require('../selectors/item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _reactRedux.connect)(withActiveForPattern);


function withActiveForPattern(state) {
	var item = (0, _item2.default)(state);
	return {
		active: item ? item.type === 'pattern' : false
	};
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb25uZWN0b3JzL3dpdGgtYWN0aXZlLWZvci1wYXR0ZXJuLmpzIl0sIm5hbWVzIjpbIndpdGhBY3RpdmVGb3JQYXR0ZXJuIiwic3RhdGUiLCJpdGVtIiwiYWN0aXZlIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQ0E7Ozs7OztrQkFFZSx5QkFBUUEsb0JBQVIsQzs7O0FBRWYsU0FBU0Esb0JBQVQsQ0FBOEJDLEtBQTlCLEVBQXFDO0FBQ3BDLEtBQU1DLE9BQU8sb0JBQVdELEtBQVgsQ0FBYjtBQUNBLFFBQU87QUFDTkUsVUFBUUQsT0FBT0EsS0FBS0UsSUFBTCxLQUFjLFNBQXJCLEdBQWlDO0FBRG5DLEVBQVA7QUFHQSIsImZpbGUiOiJ3aXRoLWFjdGl2ZS1mb3ItcGF0dGVybi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y29ubmVjdH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHNlbGVjdEl0ZW0gZnJvbSAnLi4vc2VsZWN0b3JzL2l0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHdpdGhBY3RpdmVGb3JQYXR0ZXJuKTtcblxuZnVuY3Rpb24gd2l0aEFjdGl2ZUZvclBhdHRlcm4oc3RhdGUpIHtcblx0Y29uc3QgaXRlbSA9IHNlbGVjdEl0ZW0oc3RhdGUpO1xuXHRyZXR1cm4ge1xuXHRcdGFjdGl2ZTogaXRlbSA/IGl0ZW0udHlwZSA9PT0gJ3BhdHRlcm4nIDogZmFsc2Vcblx0fTtcbn1cbiJdfQ==
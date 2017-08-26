'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _scrollparent = require('scrollparent');

var _scrollparent2 = _interopRequireDefault(_scrollparent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = scrollTo;
var type = exports.type = 'SCROLL_TO';

function scrollTo(hash) {
	var _global = global,
	    document = _global.document;

	if (document) {
		var target = document.getElementById(hash);
		var parent = (0, _scrollparent2.default)(target);
		parent.scrollTop = target.offsetTop;
	}

	return function (dispatch) {
		dispatch({
			type: 'SCROLLED_TO',
			payload: hash
		});
	};
}

scrollTo.type = type;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9hY3Rpb25zL3Njcm9sbC10by5qcyJdLCJuYW1lcyI6WyJzY3JvbGxUbyIsInR5cGUiLCJoYXNoIiwiZ2xvYmFsIiwiZG9jdW1lbnQiLCJ0YXJnZXQiLCJnZXRFbGVtZW50QnlJZCIsInBhcmVudCIsInNjcm9sbFRvcCIsIm9mZnNldFRvcCIsImRpc3BhdGNoIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7Ozs7a0JBRWVBLFE7QUFDUixJQUFNQyxzQkFBTyxXQUFiOztBQUVQLFNBQVNELFFBQVQsQ0FBa0JFLElBQWxCLEVBQXdCO0FBQUEsZUFDSkMsTUFESTtBQUFBLEtBQ2hCQyxRQURnQixXQUNoQkEsUUFEZ0I7O0FBRXZCLEtBQUlBLFFBQUosRUFBYztBQUNiLE1BQU1DLFNBQVNELFNBQVNFLGNBQVQsQ0FBd0JKLElBQXhCLENBQWY7QUFDQSxNQUFNSyxTQUFTLDRCQUFhRixNQUFiLENBQWY7QUFDQUUsU0FBT0MsU0FBUCxHQUFtQkgsT0FBT0ksU0FBMUI7QUFDQTs7QUFFRCxRQUFPLG9CQUFZO0FBQ2xCQyxXQUFTO0FBQ1JULFNBQU0sYUFERTtBQUVSVSxZQUFTVDtBQUZELEdBQVQ7QUFJQSxFQUxEO0FBTUE7O0FBRURGLFNBQVNDLElBQVQsR0FBZ0JBLElBQWhCIiwiZmlsZSI6InNjcm9sbC10by5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzY3JvbGxwYXJlbnQgZnJvbSAnc2Nyb2xscGFyZW50JztcblxuZXhwb3J0IGRlZmF1bHQgc2Nyb2xsVG87XG5leHBvcnQgY29uc3QgdHlwZSA9ICdTQ1JPTExfVE8nO1xuXG5mdW5jdGlvbiBzY3JvbGxUbyhoYXNoKSB7XG5cdGNvbnN0IHtkb2N1bWVudH0gPSBnbG9iYWw7XG5cdGlmIChkb2N1bWVudCkge1xuXHRcdGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuXHRcdGNvbnN0IHBhcmVudCA9IHNjcm9sbHBhcmVudCh0YXJnZXQpO1xuXHRcdHBhcmVudC5zY3JvbGxUb3AgPSB0YXJnZXQub2Zmc2V0VG9wO1xuXHR9XG5cblx0cmV0dXJuIGRpc3BhdGNoID0+IHtcblx0XHRkaXNwYXRjaCh7XG5cdFx0XHR0eXBlOiAnU0NST0xMRURfVE8nLFxuXHRcdFx0cGF5bG9hZDogaGFzaFxuXHRcdH0pO1xuXHR9O1xufVxuXG5zY3JvbGxUby50eXBlID0gdHlwZTtcbiJdfQ==
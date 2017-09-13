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
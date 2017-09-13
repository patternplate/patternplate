'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.type = undefined;

var _urlQuery = require('../utils/url-query');

var _urlQuery2 = _interopRequireDefault(_urlQuery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = openFullscreen;
var type = exports.type = 'OPEN_FULLSCREEN';

function openFullscreen() {
	return function (dispatch, getState) {
		var _getState = getState(),
		    base = _getState.base,
		    id = _getState.id,
		    environment = _getState.environment;

		if (id === '..' || !global.open) {
			return;
		}

		var href = _urlQuery2.default.format({
			pathname: base + 'demo/' + id + '/index.html',
			query: { environment: environment }
		});

		global.open(href, '_blank');
	};
}

openFullscreen.key = '';
openFullscreen.property = '';
openFullscreen.type = type;
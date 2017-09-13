'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _xmldom = require('xmldom');

var _pretty = require('pretty');

var _pretty2 = _interopRequireDefault(_pretty);

var _reactRedux = require('react-redux');

var _reselect = require('reselect');

var _behaviours = require('../behaviours');

var _codePane = require('../components/code-pane');

var _codePane2 = _interopRequireDefault(_codePane);

var _item = require('../selectors/item');

var item = _interopRequireWildcard(_item);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// import * as actions from '../actions';


exports.default = (0, _reactRedux.connect)(mapProps)((0, _behaviours.skippable)((0, _behaviours.mountable)(_codePane2.default)));


var parser = new _xmldom.DOMParser();
var serializer = new _xmldom.XMLSerializer();

var selectDemoSource = (0, _reselect.createSelector)(function (state) {
	return state.demo.contents;
}, function (docSource) {
	if (typeof docSource !== 'string') {
		return docSource;
	}
	var doc = parser.parseFromString(docSource, 'text/html');
	var container = findContainer(doc);
	var serialized = serializer.serializeToString(container, 'text/html');
	var start = serialized.replace(/^<div xmlns="http:\/\/www\.w3\.org\/1999\/xhtml">/, '');
	return start.replace(/<\/div>$/, '');
});

var selectSource = (0, _reselect.createSelector)(selectDemoSource, function (contents) {
	return typeof contents === 'string' ? (0, _pretty2.default)(contents) : contents;
});

function findContainer(doc) {
	var body = [].concat(_toConsumableArray(doc.documentElement.childNodes)).find(function (node) {
		return node.nodeName.toLowerCase() === 'body';
	});
	return [].concat(_toConsumableArray(body.childNodes)).find(function (node) {
		return node.nodeName.toLowerCase() === 'div';
	});
}

function mapProps(state) {
	return {
		active: item.selectType(state) === 'pattern',
		env: item.selectEnv(state),
		source: selectSource(state)
	};
}
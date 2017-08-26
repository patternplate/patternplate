'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

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

exports.default = (0, _reactRedux.connect)(mapProps)((0, _behaviours.skippable)((0, _behaviours.mountable)(_codePane2.default)));

// import * as actions from '../actions';

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
	var body = [].concat((0, _toConsumableArray3.default)(doc.documentElement.childNodes)).find(function (node) {
		return node.nodeName.toLowerCase() === 'body';
	});
	return [].concat((0, _toConsumableArray3.default)(body.childNodes)).find(function (node) {
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
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb250YWluZXJzL2NvZGUtcGFuZS5qcyJdLCJuYW1lcyI6WyJpdGVtIiwibWFwUHJvcHMiLCJwYXJzZXIiLCJzZXJpYWxpemVyIiwic2VsZWN0RGVtb1NvdXJjZSIsInN0YXRlIiwiZGVtbyIsImNvbnRlbnRzIiwiZG9jU291cmNlIiwiZG9jIiwicGFyc2VGcm9tU3RyaW5nIiwiY29udGFpbmVyIiwiZmluZENvbnRhaW5lciIsInNlcmlhbGl6ZWQiLCJzZXJpYWxpemVUb1N0cmluZyIsInN0YXJ0IiwicmVwbGFjZSIsInNlbGVjdFNvdXJjZSIsImJvZHkiLCJkb2N1bWVudEVsZW1lbnQiLCJjaGlsZE5vZGVzIiwiZmluZCIsIm5vZGUiLCJub2RlTmFtZSIsInRvTG93ZXJDYXNlIiwiYWN0aXZlIiwic2VsZWN0VHlwZSIsImVudiIsInNlbGVjdEVudiIsInNvdXJjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBR0E7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsSTs7Ozs7O2tCQUVHLHlCQUFRQyxRQUFSLEVBQWtCLDJCQUFVLDhDQUFWLENBQWxCLEM7O0FBTGY7O0FBT0EsSUFBTUMsU0FBUyx1QkFBZjtBQUNBLElBQU1DLGFBQWEsMkJBQW5COztBQUVBLElBQU1DLG1CQUFtQiw4QkFDeEI7QUFBQSxRQUFTQyxNQUFNQyxJQUFOLENBQVdDLFFBQXBCO0FBQUEsQ0FEd0IsRUFFeEIscUJBQWE7QUFDWixLQUFJLE9BQU9DLFNBQVAsS0FBcUIsUUFBekIsRUFBbUM7QUFDbEMsU0FBT0EsU0FBUDtBQUNBO0FBQ0QsS0FBTUMsTUFBTVAsT0FBT1EsZUFBUCxDQUF1QkYsU0FBdkIsRUFBa0MsV0FBbEMsQ0FBWjtBQUNBLEtBQU1HLFlBQVlDLGNBQWNILEdBQWQsQ0FBbEI7QUFDQSxLQUFNSSxhQUFhVixXQUFXVyxpQkFBWCxDQUE2QkgsU0FBN0IsRUFBd0MsV0FBeEMsQ0FBbkI7QUFDQSxLQUFNSSxRQUFRRixXQUFXRyxPQUFYLENBQW1CLG1EQUFuQixFQUF3RSxFQUF4RSxDQUFkO0FBQ0EsUUFBT0QsTUFBTUMsT0FBTixDQUFjLFVBQWQsRUFBMEIsRUFBMUIsQ0FBUDtBQUNBLENBWHVCLENBQXpCOztBQWNBLElBQU1DLGVBQWUsOEJBQ3BCYixnQkFEb0IsRUFFcEI7QUFBQSxRQUFZLE9BQU9HLFFBQVAsS0FBb0IsUUFBcEIsR0FBK0Isc0JBQU9BLFFBQVAsQ0FBL0IsR0FBa0RBLFFBQTlEO0FBQUEsQ0FGb0IsQ0FBckI7O0FBS0EsU0FBU0ssYUFBVCxDQUF1QkgsR0FBdkIsRUFBNEI7QUFDM0IsS0FBTVMsT0FBTywyQ0FBSVQsSUFBSVUsZUFBSixDQUFvQkMsVUFBeEIsR0FBb0NDLElBQXBDLENBQXlDO0FBQUEsU0FBUUMsS0FBS0MsUUFBTCxDQUFjQyxXQUFkLE9BQWdDLE1BQXhDO0FBQUEsRUFBekMsQ0FBYjtBQUNBLFFBQU8sMkNBQUlOLEtBQUtFLFVBQVQsR0FBcUJDLElBQXJCLENBQTBCO0FBQUEsU0FBUUMsS0FBS0MsUUFBTCxDQUFjQyxXQUFkLE9BQWdDLEtBQXhDO0FBQUEsRUFBMUIsQ0FBUDtBQUNBOztBQUVELFNBQVN2QixRQUFULENBQWtCSSxLQUFsQixFQUF5QjtBQUN4QixRQUFPO0FBQ05vQixVQUFRekIsS0FBSzBCLFVBQUwsQ0FBZ0JyQixLQUFoQixNQUEyQixTQUQ3QjtBQUVOc0IsT0FBSzNCLEtBQUs0QixTQUFMLENBQWV2QixLQUFmLENBRkM7QUFHTndCLFVBQVFaLGFBQWFaLEtBQWI7QUFIRixFQUFQO0FBS0EiLCJmaWxlIjoiY29kZS1wYW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtET01QYXJzZXIsIFhNTFNlcmlhbGl6ZXJ9IGZyb20gJ3htbGRvbSc7XG5pbXBvcnQgcHJldHR5IGZyb20gJ3ByZXR0eSc7XG5pbXBvcnQge2Nvbm5lY3R9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7Y3JlYXRlU2VsZWN0b3J9IGZyb20gJ3Jlc2VsZWN0JztcblxuLy8gaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuLi9hY3Rpb25zJztcbmltcG9ydCB7bW91bnRhYmxlLCBza2lwcGFibGV9IGZyb20gJy4uL2JlaGF2aW91cnMnO1xuaW1wb3J0IENvZGVQYW5lIGZyb20gJy4uL2NvbXBvbmVudHMvY29kZS1wYW5lJztcbmltcG9ydCAqIGFzIGl0ZW0gZnJvbSAnLi4vc2VsZWN0b3JzL2l0ZW0nO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFByb3BzKShza2lwcGFibGUobW91bnRhYmxlKENvZGVQYW5lKSkpO1xuXG5jb25zdCBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG5jb25zdCBzZXJpYWxpemVyID0gbmV3IFhNTFNlcmlhbGl6ZXIoKTtcblxuY29uc3Qgc2VsZWN0RGVtb1NvdXJjZSA9IGNyZWF0ZVNlbGVjdG9yKFxuXHRzdGF0ZSA9PiBzdGF0ZS5kZW1vLmNvbnRlbnRzLFxuXHRkb2NTb3VyY2UgPT4ge1xuXHRcdGlmICh0eXBlb2YgZG9jU291cmNlICE9PSAnc3RyaW5nJykge1xuXHRcdFx0cmV0dXJuIGRvY1NvdXJjZTtcblx0XHR9XG5cdFx0Y29uc3QgZG9jID0gcGFyc2VyLnBhcnNlRnJvbVN0cmluZyhkb2NTb3VyY2UsICd0ZXh0L2h0bWwnKTtcblx0XHRjb25zdCBjb250YWluZXIgPSBmaW5kQ29udGFpbmVyKGRvYyk7XG5cdFx0Y29uc3Qgc2VyaWFsaXplZCA9IHNlcmlhbGl6ZXIuc2VyaWFsaXplVG9TdHJpbmcoY29udGFpbmVyLCAndGV4dC9odG1sJyk7XG5cdFx0Y29uc3Qgc3RhcnQgPSBzZXJpYWxpemVkLnJlcGxhY2UoL148ZGl2IHhtbG5zPVwiaHR0cDpcXC9cXC93d3dcXC53M1xcLm9yZ1xcLzE5OTlcXC94aHRtbFwiPi8sICcnKTtcblx0XHRyZXR1cm4gc3RhcnQucmVwbGFjZSgvPFxcL2Rpdj4kLywgJycpO1xuXHR9XG4pO1xuXG5jb25zdCBzZWxlY3RTb3VyY2UgPSBjcmVhdGVTZWxlY3Rvcihcblx0c2VsZWN0RGVtb1NvdXJjZSxcblx0Y29udGVudHMgPT4gdHlwZW9mIGNvbnRlbnRzID09PSAnc3RyaW5nJyA/IHByZXR0eShjb250ZW50cykgOiBjb250ZW50c1xuKTtcblxuZnVuY3Rpb24gZmluZENvbnRhaW5lcihkb2MpIHtcblx0Y29uc3QgYm9keSA9IFsuLi5kb2MuZG9jdW1lbnRFbGVtZW50LmNoaWxkTm9kZXNdLmZpbmQobm9kZSA9PiBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdib2R5Jyk7XG5cdHJldHVybiBbLi4uYm9keS5jaGlsZE5vZGVzXS5maW5kKG5vZGUgPT4gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnZGl2Jyk7XG59XG5cbmZ1bmN0aW9uIG1hcFByb3BzKHN0YXRlKSB7XG5cdHJldHVybiB7XG5cdFx0YWN0aXZlOiBpdGVtLnNlbGVjdFR5cGUoc3RhdGUpID09PSAncGF0dGVybicsXG5cdFx0ZW52OiBpdGVtLnNlbGVjdEVudihzdGF0ZSksXG5cdFx0c291cmNlOiBzZWxlY3RTb3VyY2Uoc3RhdGUpXG5cdH07XG59XG4iXX0=
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\theight: 100%;\n\toverflow: scroll;\n\t-webkit-overflow-sroll: touch;\n\tmask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50px);\n\t-webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50px);\n'], ['\n\theight: 100%;\n\toverflow: scroll;\n\t-webkit-overflow-sroll: touch;\n\tmask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50px);\n\t-webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 50px);\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tbox-sizing: border-box;\n\tmargin: 0 auto;\n\twidth: 100%;\n\tmax-width: 800px;\n\tpadding: 30px;\n'], ['\n\tbox-sizing: border-box;\n\tmargin: 0 auto;\n\twidth: 100%;\n\tmax-width: 800px;\n\tpadding: 30px;\n']);

exports.default = Documentation;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@patternplate/components');

var _markdown = require('../containers/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function Documentation(props) {
	return _react2.default.createElement(
		ScrollBox,
		null,
		_react2.default.createElement(
			StyledDocumentation,
			null,
			_react2.default.createElement(_markdown2.default, { source: props.doc })
		)
	);
}

var ScrollBox = _components.styled.div(_templateObject);

var StyledDocumentation = _components.styled.div(_templateObject2);
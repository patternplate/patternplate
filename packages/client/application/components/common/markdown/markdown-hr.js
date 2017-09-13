'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\theight: 0.25em;\n\tpadding: 0;\n\tmargin: 24px 0;\n\tbackground-color: ', ';\n\tborder: 0;\n'], ['\n\theight: 0.25em;\n\tpadding: 0;\n\tmargin: 24px 0;\n\tbackground-color: ', ';\n\tborder: 0;\n']);

var _components = require('@patternplate/components');

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _components.styled.hr(_templateObject, function (props) {
	return props.theme.border;
});
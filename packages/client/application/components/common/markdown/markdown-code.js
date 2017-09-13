'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n\tdisplay: inline;\n\tpadding: 0;\n\tbackground: ', ';\n\tborder-radius: 3px;\n\tfont-size: 15.3px;\n\tline-height: 23px;\n\tpadding: 3px;\n'], ['\n\tdisplay: inline;\n\tpadding: 0;\n\tbackground: ', ';\n\tborder-radius: 3px;\n\tfont-size: 15.3px;\n\tline-height: 23px;\n\tpadding: 3px;\n']);

var _components = require('@patternplate/components');

var _code = require('../code');

var _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _components.styled)(_code2.default)(_templateObject, function (props) {
	return props.theme.backgroundSecondary;
});
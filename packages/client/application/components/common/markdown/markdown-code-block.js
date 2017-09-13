'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

const _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  border-radius: 3px;\n  font-size: 15.3px;\n  line-height: 23px;\n  padding: 16px;\n  margin-bottom: 16px;\n'], ['\n  background: ', ';\n  border-radius: 3px;\n  font-size: 15.3px;\n  line-height: 23px;\n  padding: 16px;\n  margin-bottom: 16px;\n']);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _reactAddonsTextContent = require('react-addons-text-content');

const _reactAddonsTextContent2 = _interopRequireDefault(_reactAddonsTextContent);

const _components = require('@patternplate/components');

const _code = require('../code');

const _code2 = _interopRequireDefault(_code);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _components.styled)(MarkdownCodeBlock)(_templateObject, (props) => {
  return props.theme.backgroundSecondary;
});


function MarkdownCodeBlock(props) {
  const lang = getLanguage(props.children);
  const code = (0, _reactAddonsTextContent2.default)(props.children);
  return _react2.default.createElement(
    _code2.default,
    { block: true, className: props.className, language: lang },
    code
  );
}

function getLanguage(children) {
  let _children = _slicedToArray(children, 1),
      child = _children[0];

  if (!child) {
    return null;
  }
  const className = child.props.className;
  if (!className) {
    return null;
  }
  return className.split(' ').map((n) => {
    return n.replace('language-', '');
  }).find((n) => {
    return typeof n === 'string' && n.length > 0;
  });
}
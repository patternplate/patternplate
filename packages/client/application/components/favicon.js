'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _slicedToArray = function () { function sliceIterator(arr, i) { const _arr = []; let _n = true; let _d = false; let _e; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i.return) _i.return(); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); }  throw new TypeError("Invalid attempt to destructure non-iterable instance");  }; }();

const _createClass = function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

const _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: auto;\n  stroke: ', ';\n  stroke-width: 0;\n  fill: ', ';\n'], ['\n  width: 100%;\n  height: auto;\n  stroke: ', ';\n  stroke-width: 0;\n  fill: ', ';\n']);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _server = require('react-dom/server');

const _reactHelmet = require('react-helmet');

const _reactHelmet2 = _interopRequireDefault(_reactHelmet);

const _components = require('@patternplate/components');

const _svg = require('../utils/svg');

const svg = _interopRequireWildcard(_svg);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; }  const newObj = {}; if (obj != null) { for (const key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj;  }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const THEMES = (0, _components.themes)();

const FavIcon = function (_React$Component) {
  _inherits(FavIcon, _React$Component);

  function FavIcon() {
    let _ref;

    _classCallCheck(this, FavIcon);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    const _this = _possibleConstructorReturn(this, (_ref = FavIcon.__proto__ || Object.getPrototypeOf(FavIcon)).call.apply(_ref, [this].concat(args)));

    _this.state = {};
    return _this;
  }

  _createClass(FavIcon, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      const _this2 = this;

      if (typeof this.props.source !== 'string') {
        return;
      }

      let _svg$purge = svg.purge([svg.parse(this.props.source)]),
          _svg$purge2 = _slicedToArray(_svg$purge, 1),
          purged = _svg$purge2[0];

      const source = svg.stringify(purged);

      svg.png(source).then((href) => {
        return _this2.setState({ href });
      }).catch((err) => {
        console.error(err);
        _this2.setState({ href: null });
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactHelmet2.default, {
        link: [{ rel: 'icon', href: this.state.href, type: 'image/png' }, {
          rel: 'icon',
          href: svg.btoa(getSource(this.props)),
          type: 'image/svg+xml'
        }]
      });
    }
  }]);

  return FavIcon;
}(_react2.default.Component);

exports.default = (0, _components.styled)(FavIcon)(_templateObject, (props) => {
  return props.theme.color;
}, (props) => {
  return props.theme.color;
});


function getSource(props) {
  if (!props.source) {
    return (0, _server.renderToStaticMarkup)(_react2.default.createElement(
      'svg',
      { viewBox: '0 0 24 24' },
      _react2.default.createElement(_components.Symbol, {
        definition: _components.IconDefinitions.patternplate,
        emit: true,
        style: { fill: getFill(props) }
      })
    ));
  }

  let _svg$purge3 = svg.purge([svg.parse(props.source)]),
      _svg$purge4 = _slicedToArray(_svg$purge3, 1),
      purged = _svg$purge4[0];

  return svg.stringify(purged);
}

function getFill(props) {
  if (props.error) {
    return THEMES.dark.error;
  }
  return THEMES.dark.active;
}
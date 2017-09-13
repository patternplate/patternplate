'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InnerInfoPane = undefined;

const _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

const _createClass = function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

let _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  width: 300px;\n  min-height: 300px;\n  height: 100%;\n  box-sizing: border-box;\n  border-radius: ', ';\n  border-right: 1px solid ', ';\n  border-right-width: ', 'px;\n  overflow: scroll;\n  overflow-x: hidden;\n  background: ', ';\n'], ['\n  position: relative;\n  width: 300px;\n  min-height: 300px;\n  height: 100%;\n  box-sizing: border-box;\n  border-radius: ', ';\n  border-right: 1px solid ', ';\n  border-right-width: ', 'px;\n  overflow: scroll;\n  overflow-x: hidden;\n  background: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 1;\n  background: ', ';\n'], ['\n  position: relative;\n  z-index: 1;\n  background: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  margin-bottom: 10px;\n  padding: 10px 15px 0 15px;\n'], ['\n  position: relative;\n  z-index: 1;\n  display: flex;\n  flex: 0 0 auto;\n  align-items: center;\n  margin-bottom: 10px;\n  padding: 10px 15px 0 15px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  display: flex;\n  position: relative;\n  z-index: 1;\n  align-items: center;\n  padding: 0 15px 10px 15px;\n'], ['\n  display: flex;\n  position: relative;\n  z-index: 1;\n  align-items: center;\n  padding: 0 15px 10px 15px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  flex: 1 0 auto;\n  color: ', ';\n  margin-right: 10px;\n'], ['\n  flex: 1 0 auto;\n  color: ', ';\n  margin-right: 10px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  flex: 0 1 auto;\n  color: ', ';\n  text-align: right;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n'], ['\n  flex: 0 1 auto;\n  color: ', ';\n  text-align: right;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  flex: 0 0 auto;\n  fill: ', ';\n  margin-right: 5px;\n'], ['\n  flex: 0 0 auto;\n  fill: ', ';\n  margin-right: 5px;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 1;\n  flex: 0 0 auto;\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n'], ['\n  position: relative;\n  z-index: 1;\n  flex: 0 0 auto;\n  width: 100%;\n  border-collapse: collapse;\n  border-spacing: 0;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  height: 30px;\n  padding: 4px 6px;\n  border-top: 1px solid ', ';\n  &:first-child {\n    padding-left: 20px;\n  }\n  &:last-child {\n    text-align: right;\n    padding-right: 15px;\n  }\n'], ['\n  box-sizing: border-box;\n  height: 30px;\n  padding: 4px 6px;\n  border-top: 1px solid ', ';\n  &:first-child {\n    padding-left: 20px;\n  }\n  &:last-child {\n    text-align: right;\n    padding-right: 15px;\n  }\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  font-weight: bold;\n  color: ', ';\n'], ['\n  font-weight: bold;\n  color: ', ';\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  &:link,\n  &:visited {\n    text-decoration: none;\n    color: ', ';\n  }\n'], ['\n  &:link,\n  &:visited {\n    text-decoration: none;\n    color: ', ';\n  }\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  display: inline-block;\n  padding: 2px 4px;\n  margin-top: 1.5px;\n  margin-bottom: 1.5px;\n  border: 1px solid ', ';\n  border-radius: 3px;\n  &:link,\n  &:visited,\n  &:active {\n    text-decoration: none;\n    color: ', ';\n  }\n  &:nth-child(2n) {\n    margin-left: 3px;\n  }\n'], ['\n  display: inline-block;\n  padding: 2px 4px;\n  margin-top: 1.5px;\n  margin-bottom: 1.5px;\n  border: 1px solid ', ';\n  border-radius: 3px;\n  &:link,\n  &:visited,\n  &:active {\n    text-decoration: none;\n    color: ', ';\n  }\n  &:nth-child(2n) {\n    margin-left: 3px;\n  }\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  height: 30px;\n  font-weight: bold;\n  color: ', ';\n  padding: 3px 15px 3px 20px;\n  box-sizing: border-box;\n  border-top: 1px solid ', ';\n'], ['\n  display: flex;\n  align-items: center;\n  height: 30px;\n  font-weight: bold;\n  color: ', ';\n  padding: 3px 15px 3px 20px;\n  box-sizing: border-box;\n  border-top: 1px solid ', ';\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n  display: flex;\n  color: ', ';\n  box-sizing: border-box;\n  width: 100%;\n  padding: 5px 15px 5px 20px;\n  box-sizing: border-box;\n  background: ', ';\n'], ['\n  display: flex;\n  color: ', ';\n  box-sizing: border-box;\n  width: 100%;\n  padding: 5px 15px 5px 20px;\n  box-sizing: border-box;\n  background: ', ';\n']),
    _templateObject15 = _taggedTemplateLiteral(['width: 100%;'], ['width: 100%;']),
    _templateObject16 = _taggedTemplateLiteral(['\n  position: relative;\n  &::after {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    z-index: 1;\n    content: \'\u25BC\';\n    font-size: 0.8em;\n    color: ', ';\n    transform: translateY(-50%);\n  }\n'], ['\n  position: relative;\n  &::after {\n    position: absolute;\n    right: 0;\n    top: 50%;\n    z-index: 1;\n    content: \'\u25BC\';\n    font-size: 0.8em;\n    color: ', ';\n    transform: translateY(-50%);\n  }\n']),
    _templateObject17 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 2;\n  appearance: none;\n  color: ', ';\n  background: transparent;\n  font-size: 16px;\n  border: none;\n  border-radius: none;\n  padding-right: 20px;\n  &:focus {\n    outline: none;\n  }\n'], ['\n  position: relative;\n  z-index: 2;\n  appearance: none;\n  color: ', ';\n  background: transparent;\n  font-size: 16px;\n  border: none;\n  border-radius: none;\n  padding-right: 20px;\n  &:focus {\n    outline: none;\n  }\n']),
    _templateObject18 = _taggedTemplateLiteral(['\n  font-size: 0.8em;\n  transform: ', ';\n'], ['\n  font-size: 0.8em;\n  transform: ', ';\n']),
    _templateObject19 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-decoration: none;\n'], ['\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  text-decoration: none;\n']),
    _templateObject20 = _taggedTemplateLiteral(['\n  display: block;\n  color: ', ';\n  text-decoration: none;\n  padding: 3px 0;\n'], ['\n  display: block;\n  color: ', ';\n  text-decoration: none;\n  padding: 3px 0;\n']),
    _templateObject21 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 1;\n  flex: 1 1 auto;\n  min-height: 30px;\n'], ['\n  position: relative;\n  z-index: 1;\n  flex: 1 1 auto;\n  min-height: 30px;\n']);

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _semver = require('semver');

const _semver2 = _interopRequireDefault(_semver);

const _components = require('@patternplate/components');

const _reactAddonsTextContent = require('react-addons-text-content');

const _reactAddonsTextContent2 = _interopRequireDefault(_reactAddonsTextContent);

const _code = require('./common/code');

const _code2 = _interopRequireDefault(_code);

const _flag = require('./flag');

const _flag2 = _interopRequireDefault(_flag);

const _link = require('./common/link');

const _link2 = _interopRequireDefault(_link);

const _text = require('./text');

const _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { const target = {}; for (const i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = InfoPane;
exports.InnerInfoPane = InnerInfoPane;


const BORDER_RADIUS = 10;

const StyledInfoPane = _components.styled.div(_templateObject, (props) => {
  return props.hermit ? BORDER_RADIUS + 'px' : BORDER_RADIUS + 'px 0 0 ' + BORDER_RADIUS + 'px';
}, (props) => {
  return props.theme.border;
}, (props) => {
  return props.hermit ? 0 : 1;
}, (props) => {
  return props.theme.background;
});

const StyledInnerPane = _components.styled.div(_templateObject2, (props) => {
  return props.theme.background;
});

const StyledName = _components.styled.div(_templateObject3);

const StyledToolbar = _components.styled.div(_templateObject4);

const StyledDisplayName = (0, _components.styled)(_text2.default)(_templateObject5, (props) => {
  return props.theme.color;
});

const StyledId = (0, _components.styled)(_text2.default)(_templateObject6, (props) => {
  return props.theme.recess;
});

const StyledIcon = (0, _components.styled)(_components.Icon)(_templateObject7, (props) => {
  return props.theme.color;
});

const StyledData = _components.styled.table(_templateObject8);

const StyledDataCell = _components.styled.td(_templateObject9, (props) => {
  return props.theme.border;
});

const StyledKey = (0, _components.styled)(_text2.default)(_templateObject10, (props) => {
  return props.theme.color;
});

const SearchTrigger = function (_React$Component) {
  _inherits(SearchTrigger, _React$Component);

  function SearchTrigger() {
    let _ref;

    _classCallCheck(this, SearchTrigger);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    const _this = _possibleConstructorReturn(this, (_ref = SearchTrigger.__proto__ || Object.getPrototypeOf(SearchTrigger)).call.apply(_ref, [this].concat(args)));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(SearchTrigger, [{
    key: 'handleClick',
    value: function handleClick(e, href) {
      e.preventDefault();
      e.stopPropagation();

      if (typeof this.props.onClick === 'function') {
        this.props.onClick(e, href);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      const props = this.props;

      return _react2.default.createElement(
        _link2.default,
        {
          className: props.className,
          onClick: this.handleClick,
          query: {
            'search-enabled': true,
            search: props.field + '=' + props.search
          },
          title: 'Search other patterns with ' + props.field + ' "' + props.search + '"'
        },
        props.children
      );
    }
  }]);

  return SearchTrigger;
}(_react2.default.Component);

const StyledVersion = (0, _components.styled)(Version)(_templateObject11, (props) => {
  const v = (0, _reactAddonsTextContent2.default)(props.children);
  if (!_semver2.default.valid(v)) {
    return props.theme.error;
  }
  if (_semver2.default.satisfies(v, '<=0.1')) {
    return props.theme.error;
  }
  if (_semver2.default.satisfies(v, '> 0.1 < 1')) {
    return props.theme.color;
  }
  return props.theme.success;
});

const StyledTag = (0, _components.styled)(Tag)(_templateObject12, (props) => {
  return props.theme.color;
}, (props) => {
  return props.theme.color;
});

const StyledToggleHead = (0, _components.styled)(ToggleHead)(_templateObject13, (props) => {
  return props.theme.color;
}, (props) => {
  return props.theme.border;
});

const StyledToggleBody = _components.styled.div(_templateObject14, (props) => {
  return props.theme.color;
}, (props) => {
  return props.theme.background;
});

const StyledCode = (0, _components.styled)(_code2.default)(_templateObject15);

function InfoPane(props) {
  let className = props.className,
      rest = _objectWithoutProperties(props, ['className']);

  return _react2.default.createElement(
    StyledInfoPane,
    { className, hermit: props.hermit },
    _react2.default.createElement(InnerInfoPane, _extends({}, rest, { standalone: true }))
  );
}

function InnerInfoPane(props) {
  return _react2.default.createElement(
    StyledInnerPane,
    { standalone: props.standalone, className: props.className },
    _react2.default.createElement(
      StyledName,
      null,
      _react2.default.createElement(StyledIcon, { symbol: props.icon }),
      _react2.default.createElement(
        StyledDisplayName,
        null,
        props.name
      ),
      _react2.default.createElement(
        StyledId,
        null,
        props.id
      )
    ),
    props.children && _react2.default.createElement(
      StyledToolbar,
      null,
      props.children
    ),
    _react2.default.createElement(
      StyledData,
      null,
      _react2.default.createElement(
        'tbody',
        null,
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            StyledDataCell,
            null,
            _react2.default.createElement(
              StyledKey,
              null,
              'Version'
            )
          ),
          _react2.default.createElement(
            StyledDataCell,
            null,
            _react2.default.createElement(
              StyledVersion,
              { field: 'version', search: props.version },
              props.version
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            StyledDataCell,
            null,
            _react2.default.createElement(
              StyledKey,
              null,
              'Flag'
            )
          ),
          _react2.default.createElement(
            StyledDataCell,
            null,
            _react2.default.createElement(
              SearchTrigger,
              { field: 'flag', search: props.flag },
              _react2.default.createElement(
                _flag2.default,
                null,
                props.flag
              )
            )
          )
        ),
        has(props.tags) && _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            StyledDataCell,
            null,
            _react2.default.createElement(
              StyledKey,
              null,
              'Tags'
            )
          ),
          _react2.default.createElement(
            StyledDataCell,
            null,
            props.tags.map((t) => {
              return _react2.default.createElement(StyledTag, { key: t, tag: t });
            })
          )
        ),
        has(props.envs) && props.envs.length > 1 && _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            StyledDataCell,
            null,
            _react2.default.createElement(
              StyledKey,
              null,
              'Environment'
            )
          ),
          _react2.default.createElement(
            StyledDataCell,
            null,
            _react2.default.createElement(
              Select,
              {
                name: 'environment',
                onChange: props.onEnvChange,
                value: props.env.name
              },
              props.envs.map((e) => {
                return _react2.default.createElement(
                  'option',
                  { key: e.name, value: e.name },
                  e.displayName
                );
              })
            )
          )
        ),
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            StyledDataCell,
            null,
            _react2.default.createElement(
              StyledKey,
              null,
              'Mount'
            )
          ),
          _react2.default.createElement(
            StyledDataCell,
            null,
            _react2.default.createElement('input', {
              type: 'checkbox',
              checked: props.mount,
              onChange: props.onMountChange
            })
          )
        )
      )
    ),
    has(props.dependencies) && _react2.default.createElement(
      Toggle,
      {
        head: 'Dependencies (' + props.dependencies.length + ')',
        enabled: props.dependenciesEnabled,
        name: 'dependencies'
      },
      _react2.default.createElement(
        PatternList,
        null,
        props.dependencies.map((d) => {
          return _react2.default.createElement(PatternItem, { key: d.id, pattern: d });
        })
      )
    ),
    has(props.dependents) && _react2.default.createElement(
      Toggle,
      {
        head: 'Dependents (' + props.dependents.length + ')',
        enabled: props.dependentsEnabled,
        name: 'dependents'
      },
      _react2.default.createElement(
        PatternList,
        null,
        props.dependents.map((d) => {
          return _react2.default.createElement(PatternItem, { key: d.id, pattern: d });
        })
      )
    ),
    has(props.demoDependencies) && _react2.default.createElement(
      Toggle,
      {
        head: 'Demo Dependencies (' + props.demoDependencies.length + ')',
        enabled: props.demoDependenciesEnabled,
        name: 'demo-dependencies'
      },
      _react2.default.createElement(
        PatternList,
        null,
        props.demoDependencies.map((d) => {
          return _react2.default.createElement(PatternItem, { key: d.id, pattern: d });
        })
      )
    ),
    has(props.demoDependents) && _react2.default.createElement(
      Toggle,
      {
        head: 'Demo Dependents (' + props.demoDependents.length + ')',
        enabled: props.demoDependentsEnabled,
        name: 'demo-dependents'
      },
      _react2.default.createElement(
        PatternList,
        null,
        props.demoDependents.map((d) => {
          return _react2.default.createElement(PatternItem, { key: d.id, pattern: d });
        })
      )
    ),
    _react2.default.createElement(
      Toggle,
      { head: 'Manifest', enabled: props.manifestEnabled, name: 'manifest' },
      _react2.default.createElement(
        StyledCode,
        { block: true, language: 'json' },
        props.manifest
      )
    )
  );
}

const StyledSelectContainer = _components.styled.div(_templateObject16, (props) => {
  return props.theme.color;
});

const StyledSelect = _components.styled.select(_templateObject17, (props) => {
  return props.theme.color;
});

function Select(props) {
  return _react2.default.createElement(
    StyledSelectContainer,
    { className: props.className },
    _react2.default.createElement(
      StyledSelect,
      { onChange: props.onChange, value: props.value },
      props.children
    )
  );
}

function Version(props) {
  return _react2.default.createElement(
    SearchTrigger,
    {
      className: props.className,
      search: props.search,
      field: 'version'
    },
    _react2.default.createElement(
      _text2.default,
      null,
      props.search
    )
  );
}

function Tag(props) {
  return _react2.default.createElement(
    SearchTrigger,
    { className: props.className, search: props.tag, field: 'tags' },
    _react2.default.createElement(
      _text2.default,
      null,
      props.tag
    )
  );
}

const StyledArrow = (0, _components.styled)(_text2.default)(_templateObject18, (props) => {
  return props.rotated ? 'rotate(0deg)' : 'rotate(90deg)';
});

const StyledHead = (0, _components.styled)(_link2.default)(_templateObject19);

function ToggleHead(props) {
  return _react2.default.createElement(
    StyledHead,
    {
      query: _defineProperty({}, props.name + '-enabled', !props.enabled),
      className: props.className
    },
    _react2.default.createElement(
      _text2.default,
      null,
      props.children
    ),
    _react2.default.createElement(
      StyledArrow,
      { rotated: props.enabled },
      '\u25BC'
    )
  );
}

const StyledPatternList = _components.styled.div(_templateObject15);

function PatternList(props) {
  return _react2.default.createElement(
    StyledPatternList,
    null,
    props.children
  );
}

const StyledPatternItem = (0, _components.styled)(_link2.default)(_templateObject20, (props) => {
  return props.theme.color;
});

function PatternItem(props) {
  return _react2.default.createElement(
    StyledPatternItem,
    {
      href: 'pattern/' + props.pattern.id,
      'data-id': props.pattern.id
    },
    _react2.default.createElement(
      _text2.default,
      null,
      props.pattern.manifest.displayName
    )
  );
}

const StyledToggle = _components.styled.div(_templateObject21);

function Toggle(props) {
  return _react2.default.createElement(
    StyledToggle,
    null,
    _react2.default.createElement(
      StyledToggleHead,
      { name: props.name, enabled: props.enabled },
      props.head
    ),
    props.enabled && _react2.default.createElement(
      StyledToggleBody,
      null,
      props.children
    )
  );
}

function has(val) {
  return Array.isArray(val) && val.length > 0;
}
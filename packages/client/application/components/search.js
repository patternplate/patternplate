'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

const _createClass = function () { function defineProperties(target, props) { for (let i = 0; i < props.length; i++) { const descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

let _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n  pointer-events: all;\n  overflow: hidden;\n  margin: ', ';\n  opacity: ', ';\n'], ['\n  width: 100%;\n  height: 100%;\n  border-radius: 10px;\n  overflow: hidden;\n  pointer-events: all;\n  overflow: hidden;\n  margin: ', ';\n  opacity: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-height: ', ';\n  ', ';\n'], ['\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  z-index: 2;\n  width: 100%;\n  max-height: ', ';\n  ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 1;\n  flex: 0 0 auto;\n'], ['\n  position: relative;\n  z-index: 1;\n  flex: 0 0 auto;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 1;\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: row;\n  max-height: calc(\n    ', ' - ', ' - ', '\n  ); /* ensure firefox scrolls result list */\n  /* overflow: hidden; position: sticky breaks when doing this*/\n'], ['\n  position: relative;\n  z-index: 1;\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: row;\n  max-height: calc(\n    ', ' - ', ' - ', '\n  ); /* ensure firefox scrolls result list */\n  /* overflow: hidden; position: sticky breaks when doing this*/\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  flex: 1 1 60%;\n  overflow: scroll;\n  -webkit-touch-scroll: auto;\n'], ['\n  flex: 1 1 60%;\n  overflow: scroll;\n  -webkit-touch-scroll: auto;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  flex: 1 0 40%;\n  overflow: scroll;\n  -webkit-touch-scroll: auto;\n  border-right: 1px solid ', ';\n'], ['\n  flex: 1 0 40%;\n  overflow: scroll;\n  -webkit-touch-scroll: auto;\n  border-right: 1px solid ', ';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1;\n  top: 0;\n  margin: 0;\n  font-size: 14px;\n  padding: 3px 15px;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: ', ';\n  color: ', ';\n  background: ', ';\n'], ['\n  box-sizing: border-box;\n  position: -webkit-sticky;\n  position: sticky;\n  z-index: 1;\n  top: 0;\n  margin: 0;\n  font-size: 14px;\n  padding: 3px 15px;\n  border-width: 1px 0;\n  border-style: solid;\n  border-color: ', ';\n  color: ', ';\n  background: ', ';\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  flex: 0 0 auto;\n  fill: ', ';\n  margin-right: 10px;\n'], ['\n  flex: 0 0 auto;\n  fill: ', ';\n  margin-right: 10px;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  text-decoration: none;\n  color: ', ';\n  opacity: 0;\n  &:hover {\n    color: ', ';\n    text-decoration: underline;\n  }\n'], ['\n  position: absolute;\n  right: 15px;\n  top: 50%;\n  transform: translateY(-50%);\n  text-decoration: none;\n  color: ', ';\n  opacity: 0;\n  &:hover {\n    color: ', ';\n    text-decoration: underline;\n  }\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 10px 15px;\n  line-height: 20px;\n  color: ', ';\n  text-decoration: none;\n'], ['\n  display: flex;\n  align-items: center;\n  width: 100%;\n  padding: 10px 15px;\n  line-height: 20px;\n  color: ', ';\n  text-decoration: none;\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  &:hover ', ' {\n    mask-image: linear-gradient(\n      to left,\n      rgba(0, 0, 0, 0) 75px,\n      rgba(0, 0, 0, 1) 125px\n    );\n    -webkit-mask-image: linear-gradient(\n      to left,\n      rgba(0, 0, 0, 0) 75px,\n      rgba(0, 0, 0, 1) 125px\n    );\n  }\n  &:hover ', ' {\n    opacity: 1;\n  }\n'], ['\n  position: relative;\n  box-sizing: border-box;\n  display: flex;\n  align-items: center;\n  &:hover ', ' {\n    mask-image: linear-gradient(\n      to left,\n      rgba(0, 0, 0, 0) 75px,\n      rgba(0, 0, 0, 1) 125px\n    );\n    -webkit-mask-image: linear-gradient(\n      to left,\n      rgba(0, 0, 0, 0) 75px,\n      rgba(0, 0, 0, 1) 125px\n    );\n  }\n  &:hover ', ' {\n    opacity: 1;\n  }\n']),
    _templateObject12 = _taggedTemplateLiteral(['display: none;'], ['display: none;']),
    _templateObject13 = _taggedTemplateLiteral(['\n  font-size: 0;\n  line-height: 0;\n'], ['\n  font-size: 0;\n  line-height: 0;\n']),
    _templateObject14 = _taggedTemplateLiteral(['fill: ', ';'], ['fill: ', ';']),
    _templateObject15 = _taggedTemplateLiteral(['\n  width: 80%;\n  margin: 0 auto;\n'], ['\n  width: 80%;\n  margin: 0 auto;\n']),
    _templateObject16 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  height: 30px;\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0 15px;\n  border: 1px solid ', ';\n  color: ', ';\n  ', ';\n'], ['\n  display: flex;\n  align-items: center;\n  height: 30px;\n  position: relative;\n  box-sizing: border-box;\n  width: 100%;\n  padding: 0 15px;\n  border: 1px solid ', ';\n  color: ', ';\n  ', ';\n']),
    _templateObject17 = _taggedTemplateLiteral(['\n  display: flex;\n  overflow: scroll;\n  -webkit-overflow-scrolling: touch;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n'], ['\n  display: flex;\n  overflow: scroll;\n  -webkit-overflow-scrolling: touch;\n  width: 100%;\n  position: relative;\n  z-index: 1;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n']),
    _templateObject18 = _taggedTemplateLiteral(['\n  padding: 0 10px;\n  color: ', ';\n  &:first-child {\n    padding-left: 0;\n  }\n'], ['\n  padding: 0 10px;\n  color: ', ';\n  &:first-child {\n    padding-left: 0;\n  }\n']),
    _templateObject19 = _taggedTemplateLiteral(['\n  padding-right: 20px;\n  font-weight: bold;\n  color: ', ';\n  position: relative;\n  z-index: 1;\n'], ['\n  padding-right: 20px;\n  font-weight: bold;\n  color: ', ';\n  position: relative;\n  z-index: 1;\n']),
    _templateObject20 = _taggedTemplateLiteral(['\n  white-space: nowrap;\n  &:link,\n  &:active,\n  &:visited,\n  &:hover {\n    color: ', ';\n    text-decoration: none;\n  }\n'], ['\n  white-space: nowrap;\n  &:link,\n  &:active,\n  &:visited,\n  &:hover {\n    color: ', ';\n    text-decoration: none;\n  }\n']);

const _lodash = require('lodash');

const _react = require('react');

const _react2 = _interopRequireDefault(_react);

const _components = require('@patternplate/components');

const _tagHoc = require('tag-hoc');

const _tagHoc2 = _interopRequireDefault(_tagHoc);

const _infoPane = require('./info-pane');

const _link = require('./common/link');

const _link2 = _interopRequireDefault(_link);

const _markdown = require('./common/markdown');

const _markdown2 = _interopRequireDefault(_markdown);

const _outside = require('./outside');

const _outside2 = _interopRequireDefault(_outside);

const _searchField = require('./common/search-field');

const _searchField2 = _interopRequireDefault(_searchField);

const _text = require('./text');

const _text2 = _interopRequireDefault(_text);

const _withToggleStates = require('../connectors/with-toggle-states');

const _withToggleStates2 = _interopRequireDefault(_withToggleStates);

const _passThrough = require('../containers/pass-through');

const _passThrough2 = _interopRequireDefault(_passThrough);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; }  return Array.from(arr);  }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

const InfoPane = (0, _withToggleStates2.default)(_infoPane.InnerInfoPane);

const NOOP = function NOOP() {};

const Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    let _ref;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    const _this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args)));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    _this.handleUp = _this.handleUp.bind(_this);
    _this.handleDown = _this.handleDown.bind(_this);
    _this.handleActivate = _this.handleActivate.bind(_this);
    _this.handleScrollRequest = _this.handleScrollRequest.bind(_this);
    _this.getListRef = _this.getListRef.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: 'handleScrollRequest',
    value: function handleScrollRequest(e) {
      if (!this.list) {
        return;
      }
      const l = this.list.getBoundingClientRect();
      const i = e.target.getBoundingClientRect();

      if (i.bottom > l.bottom) {
        this.list.scrollTop = e.target.offsetTop - l.height + i.height;
      }

      if (i.top < l.top) {
        this.list.scrollTop = e.target.offsetTop - 30;
      }
    }
  }, {
    key: 'getListRef',
    value: function getListRef(ref) {
      this.list = ref;
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof this.props.onMount === 'function') {
        this.props.onMount();
      }
    }
  }, {
    key: 'handleActivate',
    value: function handleActivate(e) {
      const id = e.target.getAttribute('data-id');
      const index = [].concat(_toConsumableArray(this.props.docs), _toConsumableArray(this.props.components)).findIndex((i) => {
        return i.id === id;
      });

      if (index > -1) {
        this.props.onActivate(index);
      }
    }
  }, {
    key: 'handleUp',
    value: function handleUp(e) {
      e.stopPropagation();
      if (this.props.activeItem && this.props.activeItem.index > 0) {
        e.preventDefault();
        this.props.onUp();
      }
    }
  }, {
    key: 'handleDown',
    value: function handleDown(e) {
      e.stopPropagation();
      const available = this.props.components.length + this.props.docs.length - 2;

      if (this.props.activeItem && available >= this.props.activeItem.index) {
        this.props.onDown();
      }
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      if (!this.props.activeItem) {
        return this.props.onSubmit(e);
      }
      this.props.onNavigate('/' + this.props.activeItem.type + '/' + this.props.activeItem.id);
    }
  }, {
    key: 'render',
    value: function render() {
      const _this2 = this;

      const props = this.props;

      const withComponents = props.components.length > 0;
      const withDocs = props.docs.length > 0;

      return _react2.default.createElement(
        StyledFormBox,
        {
          enabled: props.enabled,
          inline: props.inline,
          onClickOutside: props.inline || !props.enabled ? NOOP : props.onClickOutside,
          onClick: props.inline && !props.enabled ? props.onFocus : NOOP,
          value: props.value
        },
        _react2.default.createElement(
          StyledForm,
          { onSubmit: this.handleSubmit, method: 'GET' },
          _react2.default.createElement(
            StyledSearchFieldBox,
            { onClick: props.inline ? props.onClick : NOOP },
            _react2.default.createElement(
              _searchField2.default,
              {
                linkTo: '/search',
                mark: props.inline ? null : true,
                name: props.inline ? 'inline-search' : 'search',
                onBlur: props.inline ? NOOP : props.onBlur,
                onChange: props.inline ? NOOP : props.onChange,
                onClear: props.inline ? NOOP : props.onClear,
                onComplete: props.inline ? NOOP : props.onComplete,
                onFocus: props.inline ? NOOP : props.onFocus,
                onStop: props.inline ? NOOP : props.onStop,
                onUp: props.inline ? NOOP : this.handleUp,
                onDown: props.inline ? NOOP : this.handleDown,
                placeholder: 'Search',
                suggestion: props.suggestion,
                title: 'Search for patterns ' + props.shortcuts.toggleSearch.toString(),
                value: props.value || ''
              },
              props.enabled && _react2.default.createElement(Close, {
                shortcut: props.shortcuts.close,
                clears: String(props.value).length > 0
              })
            ),
            _react2.default.createElement(_passThrough2.default, { query: { 'search-enabled': true, search: null } }),
            _react2.default.createElement(HiddenSubmit, null),
            _react2.default.createElement(SearchLegend, { name: props.legend.name, items: props.legend.items })
          ),
          _react2.default.createElement(
            StyledResults,
            null,
            (withComponents || withDocs) && _react2.default.createElement(
              StyledResultList,
              { innerRef: this.getListRef },
              withDocs > 0 && _react2.default.createElement(
                StyledResultHeading,
                null,
                'Docs (',
                props.docs.length,
                ')'
              ),
              props.docs.map((d) => {
                return _react2.default.createElement(Result, {
                  active: (props.activeItem || {}).id === d.id,
                  id: d.id,
                  index: d.index,
                  icon: d.manifest.icon || d.type,
                  name: d.manifest.displayName,
                  key: d.id,
                  onActivate: _this2.handleActivate,
                  onScrollRequest: _this2.handleScrollRequest,
                  type: 'doc'
                });
              }),
              withComponents > 0 && _react2.default.createElement(
                StyledResultHeading,
                {
                  navigationEnabled: props.navigationEnabled
                },
                'Components (',
                props.components.length,
                ')'
              ),
              props.components.map((d) => {
                return _react2.default.createElement(Result, {
                  active: (props.activeItem || {}).id === d.id,
                  id: d.id,
                  index: d.index,
                  icon: d.manifest.icon || d.type,
                  name: d.manifest.displayName,
                  key: d.id,
                  onActivate: _this2.handleActivate,
                  onScrollRequest: _this2.handleScrollRequest,
                  type: 'pattern'
                });
              })
            ),
            (withComponents || withDocs) && _react2.default.createElement(ResultPreview, { item: props.activeItem })
          )
        )
      );
    }
  }]);

  return Search;
}(_react2.default.Component);

exports.default = Search;


const SEARCH_HEIGHT = '60vh';
const SEARCH_FIELD_HEIGHT = '80px';
const SEARCH_LEGEND_HEIGHT = '30px';

var StyledFormBox = (0, _components.styled)(_outside2.default)(_templateObject, (props) => {
  return props.inline ? 'calc(12.5vh - 30px) 0 60px 0' : 'none';
}, (props) => {
  return props.inline && props.enabled ? '0' : '1';
});

var StyledForm = _components.styled.form(_templateObject2, SEARCH_HEIGHT, (props) => {
  return withTint(props);
});

var StyledSearchFieldBox = _components.styled.div(_templateObject3);

var StyledResults = _components.styled.div(_templateObject4, SEARCH_HEIGHT, SEARCH_FIELD_HEIGHT, SEARCH_LEGEND_HEIGHT);

const StyledResultPreview = _components.styled.div(_templateObject5);

var StyledResultList = _components.styled.div(_templateObject6, (props) => {
  return props.theme.border;
});

var StyledResultHeading = (0, _components.styled)(_text2.default)(_templateObject7, (props) => {
  return props.theme.border;
}, (props) => {
  return props.theme.color;
}, (props) => {
  return props.theme.background;
});

const StyledIcon = (0, _components.styled)((0, _tagHoc2.default)(['active'])(_components.Icon))(_templateObject8, (props) => {
  return props.active ? props.theme.active : props.theme.color;
});

const Linkable = (0, _tagHoc2.default)(['active'])(_link2.default);

const StyledPreviewLink = (0, _components.styled)(Linkable)(_templateObject9, (props) => {
  return props.theme.border;
}, (props) => {
  return props.theme.color;
});

const StyledResultLink = (0, _components.styled)(Linkable)(_templateObject10, (props) => {
  return props.active ? props.theme.active : props.theme.color;
});

const StyledResult = _components.styled.div(_templateObject11, StyledResultLink, StyledPreviewLink);

var Result = function (_React$Component2) {
  _inherits(Result, _React$Component2);

  function Result() {
    let _ref2;

    _classCallCheck(this, Result);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    const _this3 = _possibleConstructorReturn(this, (_ref2 = Result.__proto__ || Object.getPrototypeOf(Result)).call.apply(_ref2, [this].concat(args)));

    _this3.getRef = _this3.getRef.bind(_this3);
    return _this3;
  }

  _createClass(Result, [{
    key: 'getRef',
    value: function getRef(ref) {
      this.ref = ref;
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(next) {
      if (next.active && this.ref) {
        this.props.onScrollRequest({ target: this.ref });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      const props = this.props;

      return _react2.default.createElement(
        StyledResult,
        {
          innerRef: this.getRef,
          active: props.active,
          title: 'Navigation to pattern ' + props.name,
          'data-id': props.id
        },
        _react2.default.createElement(
          StyledResultLink,
          {
            active: props.active,
            href: '/' + props.type + '/' + props.id,
            query: { 'search-enabled': false }
          },
          _react2.default.createElement(StyledIcon, { active: props.active, size: 'm', symbol: props.icon }),
          _react2.default.createElement(
            _text2.default,
            { active: props.active, size: 'l' },
            props.name
          )
        ),
        _react2.default.createElement(
          StyledPreviewLink,
          {
            active: props.active,
            query: { 'search-preview': props.index }
          },
          _react2.default.createElement(
            _text2.default,
            { active: props.active, size: 's' },
            'Preview'
          )
        )
      );
    }
  }]);

  return Result;
}(_react2.default.Component);

Result.defaultProps = {
  onScrollRequest: function onScrollRequest() {}
};

const Submit = function Submit(props) {
  return _react2.default.createElement('input', { className: props.className, type: 'submit' });
};
var HiddenSubmit = (0, _components.styled)(Submit)(_templateObject12);

const StyledClose = (0, _components.styled)(_link2.default)(_templateObject13);

const StyledCloseIcon = (0, _components.styled)(_components.Icon)(_templateObject14, (props) => {
  return props.theme.color;
});

function Close(props) {
  const verb = props.clears ? 'Clear' : 'Close';
  const query = props.clears ? { search: null } : { 'search-enabled': null };
  const symbol = props.clears ? 'return' : 'close';
  return _react2.default.createElement(
    StyledClose,
    {
      query,
      title: verb + ' search ' + props.shortcut.toString()
    },
    _react2.default.createElement(StyledCloseIcon, { size: 's', symbol }),
    verb
  );
}

const StyledMarkdown = (0, _components.styled)(_markdown2.default)(_templateObject15);

function ResultPreview(props) {
  if (!props.item) {
    return null;
  }
  switch (props.item.type) {
    case 'doc':
      return _react2.default.createElement(
        StyledResultPreview,
        null,
        _react2.default.createElement(StyledMarkdown, { source: props.item.contents })
      );
    default:
      return _react2.default.createElement(
        StyledResultPreview,
        null,
        _react2.default.createElement(InfoPane, {
          active: true,
          demoDependencies: (0, _lodash.values)(props.item.demoDependencies),
          demoDependents: (0, _lodash.values)(props.item.demoDependents),
          dependencies: (0, _lodash.values)(props.item.dependencies),
          dependents: (0, _lodash.values)(props.item.dependents),
          flag: props.item.manifest.flag,
          icon: props.item.manifest.options.icon || props.item.type,
          id: props.item.id,
          manifest: JSON.stringify(props.item.manifest, null, '  '),
          name: props.item.manifest.displayName,
          tags: props.item.manifest.tags,
          version: props.item.manifest.version
        })
      );
  }
}

const StyledSearchLegend = _components.styled.div(_templateObject16, (props) => {
  return props.theme.border;
}, (props) => {
  return props.theme.color;
}, (props) => {
  return withTint(props);
});

const StyledSearchLegendBox = _components.styled.div(_templateObject17);

const StyledField = (0, _components.styled)(_text2.default)(_templateObject18, (props) => {
  return props.theme.color;
});

const StyledLegendName = (0, _components.styled)(StyledField)(_templateObject19, (props) => {
  return props.theme.color;
});

const StyledFieldLink = (0, _components.styled)(_link2.default)(_templateObject20, (props) => {
  return props.theme.color;
});

function SearchLegend(props) {
  return _react2.default.createElement(
    StyledSearchLegend,
    { className: props.className },
    props.name && _react2.default.createElement(
      StyledLegendName,
      null,
      props.name
    ),
    _react2.default.createElement(
      StyledSearchLegendBox,
      null,
      (props.items || []).map((l) => {
        switch (l.type) {
          case 'field':
          default:
            return _react2.default.createElement(
              StyledField,
              { key: l.key },
              _react2.default.createElement(
                StyledFieldLink,
                {
                  title: l.description,
                  query: { search: String(l.value) }
                },
                l.key
              )
            );
        }
      })
    )
  );
}

function withTint(props) {
  return '\n\t\t&::before {\n\t\t\tcontent: \'\';\n\t\t\tposition: absolute;\n\t\t\tz-index: 0;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t\tbottom: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tbackground: ' + props.theme.background + ';\n\t\t\topacity: 0.975;\n\t\t}\n\t';
}
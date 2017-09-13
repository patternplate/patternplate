'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 10px;\n\toverflow: hidden;\n\tpointer-events: all;\n\toverflow: hidden;\n\tmargin: ', ';\n\topacity: ', ';\n'], ['\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 10px;\n\toverflow: hidden;\n\tpointer-events: all;\n\toverflow: hidden;\n\tmargin: ', ';\n\topacity: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: relative;\n\tz-index: 2;\n\twidth: 100%;\n\tmax-height: ', ';\n\t', '\n'], ['\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: relative;\n\tz-index: 2;\n\twidth: 100%;\n\tmax-height: ', ';\n\t', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tposition: relative;\n\tz-index: 1;\n\tflex: 0 0 auto;\n'], ['\n\tposition: relative;\n\tz-index: 1;\n\tflex: 0 0 auto;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tposition: relative;\n\tz-index: 1;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\tflex-direction: row;\n\tmax-height: calc(', ' - ', ' - ', '); /* ensure firefox scrolls result list */\n\t/* overflow: hidden; position: sticky breaks when doing this*/\n'], ['\n\tposition: relative;\n\tz-index: 1;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\tflex-direction: row;\n\tmax-height: calc(', ' - ', ' - ', '); /* ensure firefox scrolls result list */\n\t/* overflow: hidden; position: sticky breaks when doing this*/\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\tflex: 1 1 60%;\n\toverflow: scroll;\n\t-webkit-touch-scroll: auto;\n'], ['\n\tflex: 1 1 60%;\n\toverflow: scroll;\n\t-webkit-touch-scroll: auto;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\tflex: 1 0 40%;\n\toverflow: scroll;\n\t-webkit-touch-scroll: auto;\n\tborder-right: 1px solid ', ';\n'], ['\n\tflex: 1 0 40%;\n\toverflow: scroll;\n\t-webkit-touch-scroll: auto;\n\tborder-right: 1px solid ', ';\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n\tbox-sizing: border-box;\n\tposition: -webkit-sticky;\n\tposition: sticky;\n\tz-index: 1;\n\ttop: 0;\n\tmargin: 0;\n\tfont-size: 14px;\n\tpadding: 3px 15px;\n\tborder-width: 1px 0;\n\tborder-style: solid;\n\tborder-color: ', ';\n\tcolor: ', ';\n\tbackground: ', ';\n'], ['\n\tbox-sizing: border-box;\n\tposition: -webkit-sticky;\n\tposition: sticky;\n\tz-index: 1;\n\ttop: 0;\n\tmargin: 0;\n\tfont-size: 14px;\n\tpadding: 3px 15px;\n\tborder-width: 1px 0;\n\tborder-style: solid;\n\tborder-color: ', ';\n\tcolor: ', ';\n\tbackground: ', ';\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n\tflex: 0 0 auto;\n\tfill: ', ';\n\tmargin-right: 10px;\n'], ['\n\tflex: 0 0 auto;\n\tfill: ', ';\n\tmargin-right: 10px;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n\tposition: absolute;\n\tright: 15px;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\ttext-decoration: none;\n\tcolor: ', ';\n\topacity: 0;\n\t&:hover {\n\t\tcolor: ', ';\n\t\ttext-decoration: underline;\n\t}\n'], ['\n\tposition: absolute;\n\tright: 15px;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\ttext-decoration: none;\n\tcolor: ', ';\n\topacity: 0;\n\t&:hover {\n\t\tcolor: ', ';\n\t\ttext-decoration: underline;\n\t}\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 100%;\n\tpadding: 10px 15px;\n\tline-height: 20px;\n\tcolor: ', ';\n\ttext-decoration: none;\n'], ['\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 100%;\n\tpadding: 10px 15px;\n\tline-height: 20px;\n\tcolor: ', ';\n\ttext-decoration: none;\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n\tposition: relative;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\talign-items: center;\n\t&:hover ', ' {\n\t\tmask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 75px, rgba(0, 0, 0, 1) 125px);\n\t\t-webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 75px, rgba(0, 0, 0, 1) 125px);\n\t}\n\t&:hover ', ' {\n\t\topacity: 1;\n\t}\n'], ['\n\tposition: relative;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\talign-items: center;\n\t&:hover ', ' {\n\t\tmask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 75px, rgba(0, 0, 0, 1) 125px);\n\t\t-webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 75px, rgba(0, 0, 0, 1) 125px);\n\t}\n\t&:hover ', ' {\n\t\topacity: 1;\n\t}\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n\tdisplay: none;\n'], ['\n\tdisplay: none;\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n\tfont-size: 0;\n\tline-height: 0;\n'], ['\n\tfont-size: 0;\n\tline-height: 0;\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n\tfill: ', ';\n'], ['\n\tfill: ', ';\n']),
    _templateObject15 = _taggedTemplateLiteral(['\n\twidth: 80%;\n\tmargin: 0 auto;\n'], ['\n\twidth: 80%;\n\tmargin: 0 auto;\n']),
    _templateObject16 = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\talign-items: center;\n\theight: 30px;\n\tposition: relative;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tpadding: 0 15px;\n\tborder: 1px solid ', ';\n\tcolor: ', ';\n\t', '\n'], ['\n\tdisplay: flex;\n\talign-items: center;\n\theight: 30px;\n\tposition: relative;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tpadding: 0 15px;\n\tborder: 1px solid ', ';\n\tcolor: ', ';\n\t', '\n']),
    _templateObject17 = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\toverflow: scroll;\n\t-webkit-overflow-scrolling: touch;\n\twidth: 100%;\n\tposition: relative;\n\tz-index: 1;\n\t::-webkit-scrollbar {\n\t\tdisplay: none;\n\t}\n'], ['\n\tdisplay: flex;\n\toverflow: scroll;\n\t-webkit-overflow-scrolling: touch;\n\twidth: 100%;\n\tposition: relative;\n\tz-index: 1;\n\t::-webkit-scrollbar {\n\t\tdisplay: none;\n\t}\n']),
    _templateObject18 = _taggedTemplateLiteral(['\n\tpadding: 0 10px;\n\tcolor: ', ';\n\t&:first-child {\n\t\tpadding-left: 0;\n\t}\n'], ['\n\tpadding: 0 10px;\n\tcolor: ', ';\n\t&:first-child {\n\t\tpadding-left: 0;\n\t}\n']),
    _templateObject19 = _taggedTemplateLiteral(['\n\tpadding-right: 20px;\n\tfont-weight: bold;\n\tcolor: ', ';\n\tposition: relative;\n\tz-index: 1;\n'], ['\n\tpadding-right: 20px;\n\tfont-weight: bold;\n\tcolor: ', ';\n\tposition: relative;\n\tz-index: 1;\n']),
    _templateObject20 = _taggedTemplateLiteral(['\n\twhite-space: nowrap;\n\t&:link, &:active, &:visited, &:hover {\n\t\tcolor: ', ';\n\t\ttext-decoration: none;\n\t}\n'], ['\n\twhite-space: nowrap;\n\t&:link, &:active, &:visited, &:hover {\n\t\tcolor: ', ';\n\t\ttext-decoration: none;\n\t}\n']);

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _components = require('@patternplate/components');

var _tagHoc = require('tag-hoc');

var _tagHoc2 = _interopRequireDefault(_tagHoc);

var _infoPane = require('./info-pane');

var _link = require('./common/link');

var _link2 = _interopRequireDefault(_link);

var _markdown = require('./common/markdown');

var _markdown2 = _interopRequireDefault(_markdown);

var _outside = require('./outside');

var _outside2 = _interopRequireDefault(_outside);

var _searchField = require('./common/search-field');

var _searchField2 = _interopRequireDefault(_searchField);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

var _withToggleStates = require('../connectors/with-toggle-states');

var _withToggleStates2 = _interopRequireDefault(_withToggleStates);

var _passThrough = require('../containers/pass-through');

var _passThrough2 = _interopRequireDefault(_passThrough);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InfoPane = (0, _withToggleStates2.default)(_infoPane.InnerInfoPane);

var NOOP = function NOOP() {};

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    var _ref;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = Search.__proto__ || Object.getPrototypeOf(Search)).call.apply(_ref, [this].concat(args)));

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
      var l = this.list.getBoundingClientRect();
      var i = e.target.getBoundingClientRect();

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
      var id = e.target.getAttribute('data-id');
      var index = [].concat(_toConsumableArray(this.props.docs), _toConsumableArray(this.props.components)).findIndex(function (i) {
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
      var available = this.props.components.length + this.props.docs.length - 2;

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
      var _this2 = this;

      var props = this.props;

      var withComponents = props.components.length > 0;
      var withDocs = props.docs.length > 0;

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
            _react2.default.createElement(_passThrough2.default, { query: { 'search-enabled': true, 'search': null } }),
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
              props.docs.map(function (d) {
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
                { navigationEnabled: props.navigationEnabled },
                'Components (',
                props.components.length,
                ')'
              ),
              props.components.map(function (d) {
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
            (withComponents || withDocs) && _react2.default.createElement(ResultPreview, {
              item: props.activeItem
            })
          )
        )
      );
    }
  }]);

  return Search;
}(_react2.default.Component);

exports.default = Search;


var SEARCH_HEIGHT = '60vh';
var SEARCH_FIELD_HEIGHT = '80px';
var SEARCH_LEGEND_HEIGHT = '30px';

var StyledFormBox = (0, _components.styled)(_outside2.default)(_templateObject, function (props) {
  return props.inline ? 'calc(12.5vh - 30px) 0 60px 0' : 'none';
}, function (props) {
  return props.inline && props.enabled ? '0' : '1';
});

var StyledForm = _components.styled.form(_templateObject2, SEARCH_HEIGHT, function (props) {
  return withTint(props);
});

var StyledSearchFieldBox = _components.styled.div(_templateObject3);

var StyledResults = _components.styled.div(_templateObject4, SEARCH_HEIGHT, SEARCH_FIELD_HEIGHT, SEARCH_LEGEND_HEIGHT);

var StyledResultPreview = _components.styled.div(_templateObject5);

var StyledResultList = _components.styled.div(_templateObject6, function (props) {
  return props.theme.border;
});

var StyledResultHeading = (0, _components.styled)(_text2.default)(_templateObject7, function (props) {
  return props.theme.border;
}, function (props) {
  return props.theme.color;
}, function (props) {
  return props.theme.background;
});

var StyledIcon = (0, _components.styled)((0, _tagHoc2.default)(['active'])(_components.Icon))(_templateObject8, function (props) {
  return props.active ? props.theme.active : props.theme.color;
});

var Linkable = (0, _tagHoc2.default)(['active'])(_link2.default);

var StyledPreviewLink = (0, _components.styled)(Linkable)(_templateObject9, function (props) {
  return props.theme.border;
}, function (props) {
  return props.theme.color;
});

var StyledResultLink = (0, _components.styled)(Linkable)(_templateObject10, function (props) {
  return props.active ? props.theme.active : props.theme.color;
});

var StyledResult = _components.styled.div(_templateObject11, StyledResultLink, StyledPreviewLink);

var Result = function (_React$Component2) {
  _inherits(Result, _React$Component2);

  function Result() {
    var _ref2;

    _classCallCheck(this, Result);

    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var _this3 = _possibleConstructorReturn(this, (_ref2 = Result.__proto__ || Object.getPrototypeOf(Result)).call.apply(_ref2, [this].concat(args)));

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
      var props = this.props;

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
          { active: props.active, href: '/' + props.type + '/' + props.id, query: { 'search-enabled': false } },
          _react2.default.createElement(StyledIcon, { active: props.active, size: 'm', symbol: props.icon }),
          _react2.default.createElement(
            _text2.default,
            { active: props.active, size: 'l' },
            props.name
          )
        ),
        _react2.default.createElement(
          StyledPreviewLink,
          { active: props.active, query: { 'search-preview': props.index } },
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

var Submit = function Submit(props) {
  return _react2.default.createElement('input', { className: props.className, type: 'submit' });
};
var HiddenSubmit = (0, _components.styled)(Submit)(_templateObject12);

var StyledClose = (0, _components.styled)(_link2.default)(_templateObject13);

var StyledCloseIcon = (0, _components.styled)(_components.Icon)(_templateObject14, function (props) {
  return props.theme.color;
});

function Close(props) {
  var verb = props.clears ? 'Clear' : 'Close';
  var query = props.clears ? { search: null } : { 'search-enabled': null };
  var symbol = props.clears ? 'return' : 'close';
  return _react2.default.createElement(
    StyledClose,
    {
      query: query,
      title: verb + ' search ' + props.shortcut.toString()
    },
    _react2.default.createElement(StyledCloseIcon, { size: 's', symbol: symbol }),
    verb
  );
}

var StyledMarkdown = (0, _components.styled)(_markdown2.default)(_templateObject15);

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

var StyledSearchLegend = _components.styled.div(_templateObject16, function (props) {
  return props.theme.border;
}, function (props) {
  return props.theme.color;
}, function (props) {
  return withTint(props);
});

var StyledSearchLegendBox = _components.styled.div(_templateObject17);

var StyledField = (0, _components.styled)(_text2.default)(_templateObject18, function (props) {
  return props.theme.color;
});

var StyledLegendName = (0, _components.styled)(StyledField)(_templateObject19, function (props) {
  return props.theme.color;
});

var StyledFieldLink = (0, _components.styled)(_link2.default)(_templateObject20, function (props) {
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
      (props.items || []).map(function (l) {
        switch (l.type) {
          case 'field':
          default:
            return _react2.default.createElement(
              StyledField,
              { key: l.key },
              _react2.default.createElement(
                StyledFieldLink,
                { title: l.description, query: { search: '' + l.value } },
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
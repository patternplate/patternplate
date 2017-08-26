'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 10px;\n\toverflow: hidden;\n\tpointer-events: all;\n\toverflow: hidden;\n\tmargin: ', ';\n\topacity: ', ';\n'], ['\n\twidth: 100%;\n\theight: 100%;\n\tborder-radius: 10px;\n\toverflow: hidden;\n\tpointer-events: all;\n\toverflow: hidden;\n\tmargin: ', ';\n\topacity: ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: relative;\n\tz-index: 2;\n\twidth: 100%;\n\tmax-height: ', ';\n\t', '\n'], ['\n\tdisplay: flex;\n\tflex-direction: column;\n\tposition: relative;\n\tz-index: 2;\n\twidth: 100%;\n\tmax-height: ', ';\n\t', '\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\tz-index: 1;\n\tflex: 0 0 auto;\n'], ['\n\tposition: relative;\n\tz-index: 1;\n\tflex: 0 0 auto;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\tz-index: 1;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\tflex-direction: row;\n\tmax-height: calc(', ' - ', ' - ', '); /* ensure firefox scrolls result list */\n\t/* overflow: hidden; position: sticky breaks when doing this*/\n'], ['\n\tposition: relative;\n\tz-index: 1;\n\tflex: 1 1 auto;\n\tdisplay: flex;\n\tflex-direction: row;\n\tmax-height: calc(', ' - ', ' - ', '); /* ensure firefox scrolls result list */\n\t/* overflow: hidden; position: sticky breaks when doing this*/\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n\tflex: 1 1 60%;\n\toverflow: scroll;\n\t-webkit-touch-scroll: auto;\n'], ['\n\tflex: 1 1 60%;\n\toverflow: scroll;\n\t-webkit-touch-scroll: auto;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n\tflex: 1 0 40%;\n\toverflow: scroll;\n\t-webkit-touch-scroll: auto;\n\tborder-right: 1px solid ', ';\n'], ['\n\tflex: 1 0 40%;\n\toverflow: scroll;\n\t-webkit-touch-scroll: auto;\n\tborder-right: 1px solid ', ';\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n\tbox-sizing: border-box;\n\tposition: -webkit-sticky;\n\tposition: sticky;\n\tz-index: 1;\n\ttop: 0;\n\tmargin: 0;\n\tfont-size: 14px;\n\tpadding: 3px 15px;\n\tborder-width: 1px 0;\n\tborder-style: solid;\n\tborder-color: ', ';\n\tcolor: ', ';\n\tbackground: ', ';\n'], ['\n\tbox-sizing: border-box;\n\tposition: -webkit-sticky;\n\tposition: sticky;\n\tz-index: 1;\n\ttop: 0;\n\tmargin: 0;\n\tfont-size: 14px;\n\tpadding: 3px 15px;\n\tborder-width: 1px 0;\n\tborder-style: solid;\n\tborder-color: ', ';\n\tcolor: ', ';\n\tbackground: ', ';\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n\tflex: 0 0 auto;\n\tfill: ', ';\n\tmargin-right: 10px;\n'], ['\n\tflex: 0 0 auto;\n\tfill: ', ';\n\tmargin-right: 10px;\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: absolute;\n\tright: 15px;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\ttext-decoration: none;\n\tcolor: ', ';\n\topacity: 0;\n\t&:hover {\n\t\tcolor: ', ';\n\t\ttext-decoration: underline;\n\t}\n'], ['\n\tposition: absolute;\n\tright: 15px;\n\ttop: 50%;\n\ttransform: translateY(-50%);\n\ttext-decoration: none;\n\tcolor: ', ';\n\topacity: 0;\n\t&:hover {\n\t\tcolor: ', ';\n\t\ttext-decoration: underline;\n\t}\n']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 100%;\n\tpadding: 10px 15px;\n\tline-height: 20px;\n\tcolor: ', ';\n\ttext-decoration: none;\n'], ['\n\tdisplay: flex;\n\talign-items: center;\n\twidth: 100%;\n\tpadding: 10px 15px;\n\tline-height: 20px;\n\tcolor: ', ';\n\ttext-decoration: none;\n']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\talign-items: center;\n\t&:hover ', ' {\n\t\tmask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 75px, rgba(0, 0, 0, 1) 125px);\n\t\t-webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 75px, rgba(0, 0, 0, 1) 125px);\n\t}\n\t&:hover ', ' {\n\t\topacity: 1;\n\t}\n'], ['\n\tposition: relative;\n\tbox-sizing: border-box;\n\tdisplay: flex;\n\talign-items: center;\n\t&:hover ', ' {\n\t\tmask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 75px, rgba(0, 0, 0, 1) 125px);\n\t\t-webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 75px, rgba(0, 0, 0, 1) 125px);\n\t}\n\t&:hover ', ' {\n\t\topacity: 1;\n\t}\n']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: none;\n'], ['\n\tdisplay: none;\n']),
    _templateObject13 = (0, _taggedTemplateLiteral3.default)(['\n\tfont-size: 0;\n\tline-height: 0;\n'], ['\n\tfont-size: 0;\n\tline-height: 0;\n']),
    _templateObject14 = (0, _taggedTemplateLiteral3.default)(['\n\tfill: ', ';\n'], ['\n\tfill: ', ';\n']),
    _templateObject15 = (0, _taggedTemplateLiteral3.default)(['\n\twidth: 80%;\n\tmargin: 0 auto;\n'], ['\n\twidth: 80%;\n\tmargin: 0 auto;\n']),
    _templateObject16 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: flex;\n\talign-items: center;\n\theight: 30px;\n\tposition: relative;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tpadding: 0 15px;\n\tborder: 1px solid ', ';\n\tcolor: ', ';\n\t', '\n'], ['\n\tdisplay: flex;\n\talign-items: center;\n\theight: 30px;\n\tposition: relative;\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tpadding: 0 15px;\n\tborder: 1px solid ', ';\n\tcolor: ', ';\n\t', '\n']),
    _templateObject17 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: flex;\n\toverflow: scroll;\n\t-webkit-overflow-scrolling: touch;\n\twidth: 100%;\n\tposition: relative;\n\tz-index: 1;\n\t::-webkit-scrollbar {\n\t\tdisplay: none;\n\t}\n'], ['\n\tdisplay: flex;\n\toverflow: scroll;\n\t-webkit-overflow-scrolling: touch;\n\twidth: 100%;\n\tposition: relative;\n\tz-index: 1;\n\t::-webkit-scrollbar {\n\t\tdisplay: none;\n\t}\n']),
    _templateObject18 = (0, _taggedTemplateLiteral3.default)(['\n\tpadding: 0 10px;\n\tcolor: ', ';\n\t&:first-child {\n\t\tpadding-left: 0;\n\t}\n'], ['\n\tpadding: 0 10px;\n\tcolor: ', ';\n\t&:first-child {\n\t\tpadding-left: 0;\n\t}\n']),
    _templateObject19 = (0, _taggedTemplateLiteral3.default)(['\n\tpadding-right: 20px;\n\tfont-weight: bold;\n\tcolor: ', ';\n\tposition: relative;\n\tz-index: 1;\n'], ['\n\tpadding-right: 20px;\n\tfont-weight: bold;\n\tcolor: ', ';\n\tposition: relative;\n\tz-index: 1;\n']),
    _templateObject20 = (0, _taggedTemplateLiteral3.default)(['\n\twhite-space: nowrap;\n\t&:link, &:active, &:visited, &:hover {\n\t\tcolor: ', ';\n\t\ttext-decoration: none;\n\t}\n'], ['\n\twhite-space: nowrap;\n\t&:link, &:active, &:visited, &:hover {\n\t\tcolor: ', ';\n\t\ttext-decoration: none;\n\t}\n']);

var _lodash = require('lodash');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _tagHoc = require('tag-hoc');

var _tagHoc2 = _interopRequireDefault(_tagHoc);

var _icon = require('./common/icon');

var _icon2 = _interopRequireDefault(_icon);

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

var InfoPane = (0, _withToggleStates2.default)(_infoPane.InnerInfoPane);

var NOOP = function NOOP() {};

var Search = function (_React$Component) {
	(0, _inherits3.default)(Search, _React$Component);

	function Search() {
		var _ref;

		(0, _classCallCheck3.default)(this, Search);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Search.__proto__ || (0, _getPrototypeOf2.default)(Search)).call.apply(_ref, [this].concat(args)));

		_this.handleSubmit = _this.handleSubmit.bind(_this);
		_this.handleUp = _this.handleUp.bind(_this);
		_this.handleDown = _this.handleDown.bind(_this);
		_this.handleActivate = _this.handleActivate.bind(_this);
		_this.handleScrollRequest = _this.handleScrollRequest.bind(_this);
		_this.getListRef = _this.getListRef.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(Search, [{
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
			var index = [].concat((0, _toConsumableArray3.default)(this.props.docs), (0, _toConsumableArray3.default)(this.props.components)).findIndex(function (i) {
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


Search.propTypes = {
	activeItem: _react.PropTypes.any.string,
	components: _react.PropTypes.array.isRequired,
	docs: _react.PropTypes.array.isRequired,
	enabled: _react.PropTypes.bool.isRequired,
	inline: _react.PropTypes.bool,
	onActivate: _react.PropTypes.func.isRequired,
	onBlur: _react.PropTypes.func.isRequired,
	onChange: _react.PropTypes.func.isRequired,
	onClickOutside: _react.PropTypes.func.isRequired,
	onComplete: _react.PropTypes.func.isRequired,
	onDown: _react.PropTypes.func.isRequired,
	onFocus: _react.PropTypes.func,
	onMount: _react.PropTypes.func.isRequired,
	onNavigate: _react.PropTypes.func.isRequired,
	onSubmit: _react.PropTypes.func.isRequired,
	onUp: _react.PropTypes.func.isRequired,
	suggestion: _react.PropTypes.string,
	value: _react.PropTypes.string.isRequired
};

var SEARCH_HEIGHT = '60vh';
var SEARCH_FIELD_HEIGHT = '80px';
var SEARCH_LEGEND_HEIGHT = '30px';

var StyledFormBox = (0, _styledComponents2.default)(_outside2.default)(_templateObject, function (props) {
	return props.inline ? 'calc(12.5vh - 30px) 0 60px 0' : 'none';
}, function (props) {
	return props.inline && props.enabled ? '0' : '1';
});

var StyledForm = _styledComponents2.default.form(_templateObject2, SEARCH_HEIGHT, function (props) {
	return withTint(props);
});

var StyledSearchFieldBox = _styledComponents2.default.div(_templateObject3);

var StyledResults = _styledComponents2.default.div(_templateObject4, SEARCH_HEIGHT, SEARCH_FIELD_HEIGHT, SEARCH_LEGEND_HEIGHT);

var StyledResultPreview = _styledComponents2.default.div(_templateObject5);

var StyledResultList = _styledComponents2.default.div(_templateObject6, function (props) {
	return props.theme.border;
});

var StyledResultHeading = (0, _styledComponents2.default)(_text2.default)(_templateObject7, function (props) {
	return props.theme.border;
}, function (props) {
	return props.theme.color;
}, function (props) {
	return props.theme.background;
});

var StyledIcon = (0, _styledComponents2.default)((0, _tagHoc2.default)(['active'])(_icon2.default))(_templateObject8, function (props) {
	return props.active ? props.theme.active : props.theme.color;
});

var Linkable = (0, _tagHoc2.default)(['active'])(_link2.default);

var StyledPreviewLink = (0, _styledComponents2.default)(Linkable)(_templateObject9, function (props) {
	return props.theme.border;
}, function (props) {
	return props.theme.color;
});

var StyledResultLink = (0, _styledComponents2.default)(Linkable)(_templateObject10, function (props) {
	return props.active ? props.theme.active : props.theme.color;
});

var StyledResult = _styledComponents2.default.div(_templateObject11, StyledResultLink, StyledPreviewLink);

var Result = function (_React$Component2) {
	(0, _inherits3.default)(Result, _React$Component2);

	function Result() {
		var _ref2;

		(0, _classCallCheck3.default)(this, Result);

		for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
			args[_key2] = arguments[_key2];
		}

		var _this3 = (0, _possibleConstructorReturn3.default)(this, (_ref2 = Result.__proto__ || (0, _getPrototypeOf2.default)(Result)).call.apply(_ref2, [this].concat(args)));

		_this3.getRef = _this3.getRef.bind(_this3);
		return _this3;
	}

	(0, _createClass3.default)(Result, [{
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

Result.propTypes = {
	active: _react.PropTypes.bool,
	icon: _react.PropTypes.string.isRequired,
	id: _react.PropTypes.string.isRequired,
	index: _react.PropTypes.number.isRequired,
	name: _react.PropTypes.string.isRequired,
	type: _react.PropTypes.string.isRequired,
	onHover: _react.PropTypes.func,
	onScrollRequest: _react.PropTypes.func
};

Result.defaultProps = {
	onScrollRequest: function onScrollRequest() {}
};

var Submit = function Submit(props) {
	return _react2.default.createElement('input', { className: props.className, type: 'submit' });
};

Submit.propTypes = {
	className: _react.PropTypes.string
};

var HiddenSubmit = (0, _styledComponents2.default)(Submit)(_templateObject12);

var StyledClose = (0, _styledComponents2.default)(_link2.default)(_templateObject13);

var StyledCloseIcon = (0, _styledComponents2.default)(_icon2.default)(_templateObject14, function (props) {
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

Close.propTypes = {
	clears: _react.PropTypes.bool,
	shortcut: _react.PropTypes.any
};

var StyledMarkdown = (0, _styledComponents2.default)(_markdown2.default)(_templateObject15);

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
					manifest: (0, _stringify2.default)(props.item.manifest, null, '  '),
					name: props.item.manifest.displayName,
					tags: props.item.manifest.tags,
					version: props.item.manifest.version
				})
			);
	}
}

ResultPreview.propTypes = {
	item: _react.PropTypes.any
};

var StyledSearchLegend = _styledComponents2.default.div(_templateObject16, function (props) {
	return props.theme.border;
}, function (props) {
	return props.theme.color;
}, function (props) {
	return withTint(props);
});

var StyledSearchLegendBox = _styledComponents2.default.div(_templateObject17);

var StyledField = (0, _styledComponents2.default)(_text2.default)(_templateObject18, function (props) {
	return props.theme.color;
});

var StyledLegendName = (0, _styledComponents2.default)(StyledField)(_templateObject19, function (props) {
	return props.theme.color;
});

var StyledFieldLink = (0, _styledComponents2.default)(_link2.default)(_templateObject20, function (props) {
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
	return '\n\t\t&::before {\n\t\t\tcontent: \'\';\n\t\t\tposition: absolute;\n\t\t\tz-index: 0;\n\t\t\ttop: 0;\n\t\t\tright: 0;\n\t\t\tbottom: 0;\n\t\t\tleft: 0;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tbackground: ' + props.theme.tint + ';\n\t\t\topacity: 0.975;\n\t\t}\n\t';
}
module.exports = exports['default'];
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL3NlYXJjaC5qcyJdLCJuYW1lcyI6WyJJbmZvUGFuZSIsIk5PT1AiLCJTZWFyY2giLCJhcmdzIiwiaGFuZGxlU3VibWl0IiwiYmluZCIsImhhbmRsZVVwIiwiaGFuZGxlRG93biIsImhhbmRsZUFjdGl2YXRlIiwiaGFuZGxlU2Nyb2xsUmVxdWVzdCIsImdldExpc3RSZWYiLCJlIiwibGlzdCIsImwiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJpIiwidGFyZ2V0IiwiYm90dG9tIiwic2Nyb2xsVG9wIiwib2Zmc2V0VG9wIiwiaGVpZ2h0IiwidG9wIiwicmVmIiwicHJvcHMiLCJvbk1vdW50IiwiaWQiLCJnZXRBdHRyaWJ1dGUiLCJpbmRleCIsImRvY3MiLCJjb21wb25lbnRzIiwiZmluZEluZGV4Iiwib25BY3RpdmF0ZSIsInN0b3BQcm9wYWdhdGlvbiIsImFjdGl2ZUl0ZW0iLCJwcmV2ZW50RGVmYXVsdCIsIm9uVXAiLCJhdmFpbGFibGUiLCJsZW5ndGgiLCJvbkRvd24iLCJvblN1Ym1pdCIsIm9uTmF2aWdhdGUiLCJ0eXBlIiwid2l0aENvbXBvbmVudHMiLCJ3aXRoRG9jcyIsImVuYWJsZWQiLCJpbmxpbmUiLCJvbkNsaWNrT3V0c2lkZSIsIm9uRm9jdXMiLCJ2YWx1ZSIsIm9uQ2xpY2siLCJvbkJsdXIiLCJvbkNoYW5nZSIsIm9uQ2xlYXIiLCJvbkNvbXBsZXRlIiwib25TdG9wIiwic3VnZ2VzdGlvbiIsInNob3J0Y3V0cyIsInRvZ2dsZVNlYXJjaCIsInRvU3RyaW5nIiwiY2xvc2UiLCJTdHJpbmciLCJsZWdlbmQiLCJuYW1lIiwiaXRlbXMiLCJtYXAiLCJkIiwibWFuaWZlc3QiLCJpY29uIiwiZGlzcGxheU5hbWUiLCJuYXZpZ2F0aW9uRW5hYmxlZCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImFueSIsInN0cmluZyIsImFycmF5IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJmdW5jIiwiU0VBUkNIX0hFSUdIVCIsIlNFQVJDSF9GSUVMRF9IRUlHSFQiLCJTRUFSQ0hfTEVHRU5EX0hFSUdIVCIsIlN0eWxlZEZvcm1Cb3giLCJTdHlsZWRGb3JtIiwiZm9ybSIsIndpdGhUaW50IiwiU3R5bGVkU2VhcmNoRmllbGRCb3giLCJkaXYiLCJTdHlsZWRSZXN1bHRzIiwiU3R5bGVkUmVzdWx0UHJldmlldyIsIlN0eWxlZFJlc3VsdExpc3QiLCJ0aGVtZSIsImJvcmRlciIsIlN0eWxlZFJlc3VsdEhlYWRpbmciLCJjb2xvciIsImJhY2tncm91bmQiLCJTdHlsZWRJY29uIiwiYWN0aXZlIiwiTGlua2FibGUiLCJTdHlsZWRQcmV2aWV3TGluayIsIlN0eWxlZFJlc3VsdExpbmsiLCJTdHlsZWRSZXN1bHQiLCJSZXN1bHQiLCJnZXRSZWYiLCJuZXh0Iiwib25TY3JvbGxSZXF1ZXN0IiwibnVtYmVyIiwib25Ib3ZlciIsImRlZmF1bHRQcm9wcyIsIlN1Ym1pdCIsImNsYXNzTmFtZSIsIkhpZGRlblN1Ym1pdCIsIlN0eWxlZENsb3NlIiwiU3R5bGVkQ2xvc2VJY29uIiwiQ2xvc2UiLCJ2ZXJiIiwiY2xlYXJzIiwicXVlcnkiLCJzZWFyY2giLCJzeW1ib2wiLCJzaG9ydGN1dCIsIlN0eWxlZE1hcmtkb3duIiwiUmVzdWx0UHJldmlldyIsIml0ZW0iLCJjb250ZW50cyIsImRlbW9EZXBlbmRlbmNpZXMiLCJkZW1vRGVwZW5kZW50cyIsImRlcGVuZGVuY2llcyIsImRlcGVuZGVudHMiLCJmbGFnIiwib3B0aW9ucyIsInRhZ3MiLCJ2ZXJzaW9uIiwiU3R5bGVkU2VhcmNoTGVnZW5kIiwiU3R5bGVkU2VhcmNoTGVnZW5kQm94IiwiU3R5bGVkRmllbGQiLCJTdHlsZWRMZWdlbmROYW1lIiwiU3R5bGVkRmllbGRMaW5rIiwiU2VhcmNoTGVnZW5kIiwia2V5IiwiZGVzY3JpcHRpb24iLCJ0aW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxXQUFXLHdEQUFqQjs7QUFFQSxJQUFNQyxPQUFPLFNBQVBBLElBQU8sR0FBTSxDQUFFLENBQXJCOztJQUVxQkMsTTs7O0FBQ3BCLG1CQUFxQjtBQUFBOztBQUFBOztBQUFBLG9DQUFOQyxJQUFNO0FBQU5BLE9BQU07QUFBQTs7QUFBQSwrSkFDWEEsSUFEVzs7QUFFcEIsUUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixPQUFwQjtBQUNBLFFBQUtDLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjRCxJQUFkLE9BQWhCO0FBQ0EsUUFBS0UsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCRixJQUFoQixPQUFsQjtBQUNBLFFBQUtHLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkgsSUFBcEIsT0FBdEI7QUFDQSxRQUFLSSxtQkFBTCxHQUEyQixNQUFLQSxtQkFBTCxDQUF5QkosSUFBekIsT0FBM0I7QUFDQSxRQUFLSyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JMLElBQWhCLE9BQWxCO0FBUG9CO0FBUXBCOzs7O3NDQUVtQk0sQyxFQUFHO0FBQ3RCLE9BQUksQ0FBQyxLQUFLQyxJQUFWLEVBQWdCO0FBQ2Y7QUFDQTtBQUNELE9BQU1DLElBQUksS0FBS0QsSUFBTCxDQUFVRSxxQkFBVixFQUFWO0FBQ0EsT0FBTUMsSUFBSUosRUFBRUssTUFBRixDQUFTRixxQkFBVCxFQUFWOztBQUVBLE9BQUlDLEVBQUVFLE1BQUYsR0FBV0osRUFBRUksTUFBakIsRUFBeUI7QUFDeEIsU0FBS0wsSUFBTCxDQUFVTSxTQUFWLEdBQXNCUCxFQUFFSyxNQUFGLENBQVNHLFNBQVQsR0FBcUJOLEVBQUVPLE1BQXZCLEdBQWdDTCxFQUFFSyxNQUF4RDtBQUNBOztBQUVELE9BQUlMLEVBQUVNLEdBQUYsR0FBUVIsRUFBRVEsR0FBZCxFQUFtQjtBQUNsQixTQUFLVCxJQUFMLENBQVVNLFNBQVYsR0FBc0JQLEVBQUVLLE1BQUYsQ0FBU0csU0FBVCxHQUFxQixFQUEzQztBQUNBO0FBQ0Q7Ozs2QkFFVUcsRyxFQUFLO0FBQ2YsUUFBS1YsSUFBTCxHQUFZVSxHQUFaO0FBQ0E7OztzQ0FFbUI7QUFDbkIsT0FBSSxPQUFPLEtBQUtDLEtBQUwsQ0FBV0MsT0FBbEIsS0FBOEIsVUFBbEMsRUFBOEM7QUFDN0MsU0FBS0QsS0FBTCxDQUFXQyxPQUFYO0FBQ0E7QUFDRDs7O2lDQUVjYixDLEVBQUc7QUFDakIsT0FBTWMsS0FBS2QsRUFBRUssTUFBRixDQUFTVSxZQUFULENBQXNCLFNBQXRCLENBQVg7QUFDQSxPQUFNQyxRQUFRLDJDQUFJLEtBQUtKLEtBQUwsQ0FBV0ssSUFBZixvQ0FBd0IsS0FBS0wsS0FBTCxDQUFXTSxVQUFuQyxHQUErQ0MsU0FBL0MsQ0FBeUQ7QUFBQSxXQUFLZixFQUFFVSxFQUFGLEtBQVNBLEVBQWQ7QUFBQSxJQUF6RCxDQUFkOztBQUVBLE9BQUlFLFFBQVEsQ0FBQyxDQUFiLEVBQWdCO0FBQ2YsU0FBS0osS0FBTCxDQUFXUSxVQUFYLENBQXNCSixLQUF0QjtBQUNBO0FBQ0Q7OzsyQkFFUWhCLEMsRUFBRztBQUNYQSxLQUFFcUIsZUFBRjtBQUNBLE9BQUksS0FBS1QsS0FBTCxDQUFXVSxVQUFYLElBQXlCLEtBQUtWLEtBQUwsQ0FBV1UsVUFBWCxDQUFzQk4sS0FBdEIsR0FBOEIsQ0FBM0QsRUFBOEQ7QUFDN0RoQixNQUFFdUIsY0FBRjtBQUNBLFNBQUtYLEtBQUwsQ0FBV1ksSUFBWDtBQUNBO0FBQ0Q7Ozs2QkFFVXhCLEMsRUFBRztBQUNiQSxLQUFFcUIsZUFBRjtBQUNBLE9BQU1JLFlBQVksS0FBS2IsS0FBTCxDQUFXTSxVQUFYLENBQXNCUSxNQUF0QixHQUErQixLQUFLZCxLQUFMLENBQVdLLElBQVgsQ0FBZ0JTLE1BQS9DLEdBQXdELENBQTFFOztBQUVBLE9BQUksS0FBS2QsS0FBTCxDQUFXVSxVQUFYLElBQXlCRyxhQUFhLEtBQUtiLEtBQUwsQ0FBV1UsVUFBWCxDQUFzQk4sS0FBaEUsRUFBdUU7QUFDdEUsU0FBS0osS0FBTCxDQUFXZSxNQUFYO0FBQ0E7QUFDRDs7OytCQUVZM0IsQyxFQUFHO0FBQ2ZBLEtBQUV1QixjQUFGO0FBQ0EsT0FBSSxDQUFDLEtBQUtYLEtBQUwsQ0FBV1UsVUFBaEIsRUFBNEI7QUFDM0IsV0FBTyxLQUFLVixLQUFMLENBQVdnQixRQUFYLENBQW9CNUIsQ0FBcEIsQ0FBUDtBQUNBO0FBQ0QsUUFBS1ksS0FBTCxDQUFXaUIsVUFBWCxPQUEwQixLQUFLakIsS0FBTCxDQUFXVSxVQUFYLENBQXNCUSxJQUFoRCxTQUF3RCxLQUFLbEIsS0FBTCxDQUFXVSxVQUFYLENBQXNCUixFQUE5RTtBQUNBOzs7MkJBRVE7QUFBQTs7QUFBQSxPQUNERixLQURDLEdBQ1EsSUFEUixDQUNEQSxLQURDOztBQUVSLE9BQU1tQixpQkFBaUJuQixNQUFNTSxVQUFOLENBQWlCUSxNQUFqQixHQUEwQixDQUFqRDtBQUNBLE9BQU1NLFdBQVdwQixNQUFNSyxJQUFOLENBQVdTLE1BQVgsR0FBb0IsQ0FBckM7O0FBRUEsVUFDQztBQUFDLGlCQUFEO0FBQUE7QUFDQyxjQUFTZCxNQUFNcUIsT0FEaEI7QUFFQyxhQUFRckIsTUFBTXNCLE1BRmY7QUFHQyxxQkFBZ0J0QixNQUFNc0IsTUFBTixJQUFnQixDQUFDdEIsTUFBTXFCLE9BQXZCLEdBQWlDM0MsSUFBakMsR0FBd0NzQixNQUFNdUIsY0FIL0Q7QUFJQyxjQUFTdkIsTUFBTXNCLE1BQU4sSUFBZ0IsQ0FBQ3RCLE1BQU1xQixPQUF2QixHQUFpQ3JCLE1BQU13QixPQUF2QyxHQUFpRDlDLElBSjNEO0FBS0MsWUFBT3NCLE1BQU15QjtBQUxkO0FBT0M7QUFBQyxlQUFEO0FBQUEsT0FBWSxVQUFVLEtBQUs1QyxZQUEzQixFQUF5QyxRQUFPLEtBQWhEO0FBQ0M7QUFBQywwQkFBRDtBQUFBLFFBQXNCLFNBQVNtQixNQUFNc0IsTUFBTixHQUFldEIsTUFBTTBCLE9BQXJCLEdBQStCaEQsSUFBOUQ7QUFDQztBQUFBO0FBQUE7QUFDQyxnQkFBTyxTQURSO0FBRUMsY0FBTXNCLE1BQU1zQixNQUFOLEdBQWUsSUFBZixHQUFzQixJQUY3QjtBQUdDLGNBQU10QixNQUFNc0IsTUFBTixHQUFlLGVBQWYsR0FBaUMsUUFIeEM7QUFJQyxnQkFBUXRCLE1BQU1zQixNQUFOLEdBQWU1QyxJQUFmLEdBQXNCc0IsTUFBTTJCLE1BSnJDO0FBS0Msa0JBQVUzQixNQUFNc0IsTUFBTixHQUFlNUMsSUFBZixHQUFzQnNCLE1BQU00QixRQUx2QztBQU1DLGlCQUFTNUIsTUFBTXNCLE1BQU4sR0FBZTVDLElBQWYsR0FBc0JzQixNQUFNNkIsT0FOdEM7QUFPQyxvQkFBWTdCLE1BQU1zQixNQUFOLEdBQWU1QyxJQUFmLEdBQXNCc0IsTUFBTThCLFVBUHpDO0FBUUMsaUJBQVM5QixNQUFNc0IsTUFBTixHQUFlNUMsSUFBZixHQUFzQnNCLE1BQU13QixPQVJ0QztBQVNDLGdCQUFReEIsTUFBTXNCLE1BQU4sR0FBZTVDLElBQWYsR0FBc0JzQixNQUFNK0IsTUFUckM7QUFVQyxjQUFNL0IsTUFBTXNCLE1BQU4sR0FBZTVDLElBQWYsR0FBc0IsS0FBS0ssUUFWbEM7QUFXQyxnQkFBUWlCLE1BQU1zQixNQUFOLEdBQWU1QyxJQUFmLEdBQXNCLEtBQUtNLFVBWHBDO0FBWUMscUJBQVksUUFaYjtBQWFDLG9CQUFZZ0IsTUFBTWdDLFVBYm5CO0FBY0Msd0NBQThCaEMsTUFBTWlDLFNBQU4sQ0FBZ0JDLFlBQWhCLENBQTZCQyxRQUE3QixFQWQvQjtBQWVDLGVBQU9uQyxNQUFNeUIsS0FBTixJQUFlO0FBZnZCO0FBaUJFekIsYUFBTXFCLE9BQU4sSUFDQSw4QkFBQyxLQUFEO0FBQ0Msa0JBQVVyQixNQUFNaUMsU0FBTixDQUFnQkcsS0FEM0I7QUFFQyxnQkFBUUMsT0FBT3JDLE1BQU15QixLQUFiLEVBQW9CWCxNQUFwQixHQUE2QjtBQUZ0QztBQWxCRixPQUREO0FBeUJDLDZEQUFhLE9BQU8sRUFBQyxrQkFBa0IsSUFBbkIsRUFBeUIsVUFBVSxJQUFuQyxFQUFwQixHQXpCRDtBQTBCQyxvQ0FBQyxZQUFELE9BMUJEO0FBMkJDLG9DQUFDLFlBQUQsSUFBYyxNQUFNZCxNQUFNc0MsTUFBTixDQUFhQyxJQUFqQyxFQUF1QyxPQUFPdkMsTUFBTXNDLE1BQU4sQ0FBYUUsS0FBM0Q7QUEzQkQsTUFERDtBQThCQztBQUFDLG1CQUFEO0FBQUE7QUFFRSxPQUFDckIsa0JBQWtCQyxRQUFuQixLQUNDO0FBQUMsdUJBQUQ7QUFBQSxTQUFrQixVQUFVLEtBQUtqQyxVQUFqQztBQUNFaUMsa0JBQVcsQ0FBWCxJQUNBO0FBQUMsMkJBQUQ7QUFBQTtBQUFBO0FBQ1FwQixjQUFNSyxJQUFOLENBQVdTLE1BRG5CO0FBQUE7QUFBQSxRQUZGO0FBT0VkLGFBQU1LLElBQU4sQ0FBV29DLEdBQVgsQ0FBZTtBQUFBLGVBQ2QsOEJBQUMsTUFBRDtBQUNDLGlCQUFRLENBQUN6QyxNQUFNVSxVQUFOLElBQW9CLEVBQXJCLEVBQXlCUixFQUF6QixLQUFnQ3dDLEVBQUV4QyxFQUQzQztBQUVDLGFBQUl3QyxFQUFFeEMsRUFGUDtBQUdDLGdCQUFPd0MsRUFBRXRDLEtBSFY7QUFJQyxlQUFNc0MsRUFBRUMsUUFBRixDQUFXQyxJQUFYLElBQW1CRixFQUFFeEIsSUFKNUI7QUFLQyxlQUFNd0IsRUFBRUMsUUFBRixDQUFXRSxXQUxsQjtBQU1DLGNBQUtILEVBQUV4QyxFQU5SO0FBT0MscUJBQVksT0FBS2pCLGNBUGxCO0FBUUMsMEJBQWlCLE9BQUtDLG1CQVJ2QjtBQVNDLGVBQUs7QUFUTixVQURjO0FBQUEsUUFBZixDQVBGO0FBcUJFaUMsd0JBQWlCLENBQWpCLElBQ0E7QUFBQywyQkFBRDtBQUFBLFVBQXFCLG1CQUFtQm5CLE1BQU04QyxpQkFBOUM7QUFBQTtBQUNjOUMsY0FBTU0sVUFBTixDQUFpQlEsTUFEL0I7QUFBQTtBQUFBLFFBdEJGO0FBMkJFZCxhQUFNTSxVQUFOLENBQWlCbUMsR0FBakIsQ0FBcUI7QUFBQSxlQUNwQiw4QkFBQyxNQUFEO0FBQ0MsaUJBQVEsQ0FBQ3pDLE1BQU1VLFVBQU4sSUFBb0IsRUFBckIsRUFBeUJSLEVBQXpCLEtBQWdDd0MsRUFBRXhDLEVBRDNDO0FBRUMsYUFBSXdDLEVBQUV4QyxFQUZQO0FBR0MsZ0JBQU93QyxFQUFFdEMsS0FIVjtBQUlDLGVBQU1zQyxFQUFFQyxRQUFGLENBQVdDLElBQVgsSUFBbUJGLEVBQUV4QixJQUo1QjtBQUtDLGVBQU13QixFQUFFQyxRQUFGLENBQVdFLFdBTGxCO0FBTUMsY0FBS0gsRUFBRXhDLEVBTlI7QUFPQyxxQkFBWSxPQUFLakIsY0FQbEI7QUFRQywwQkFBaUIsT0FBS0MsbUJBUnZCO0FBU0MsZUFBSztBQVROLFVBRG9CO0FBQUEsUUFBckI7QUEzQkYsT0FISDtBQThDRSxPQUFDaUMsa0JBQWtCQyxRQUFuQixLQUNBLDhCQUFDLGFBQUQ7QUFDQyxhQUFNcEIsTUFBTVU7QUFEYjtBQS9DRjtBQTlCRDtBQVBELElBREQ7QUE2RkE7OztFQXpLa0MsZ0JBQU1xQyxTOztrQkFBckJwRSxNOzs7QUE0S3JCQSxPQUFPcUUsU0FBUCxHQUFtQjtBQUNsQnRDLGFBQVksaUJBQUV1QyxHQUFGLENBQU1DLE1BREE7QUFFbEI1QyxhQUFZLGlCQUFFNkMsS0FBRixDQUFRQyxVQUZGO0FBR2xCL0MsT0FBTSxpQkFBRThDLEtBQUYsQ0FBUUMsVUFISTtBQUlsQi9CLFVBQVMsaUJBQUVnQyxJQUFGLENBQU9ELFVBSkU7QUFLbEI5QixTQUFRLGlCQUFFK0IsSUFMUTtBQU1sQjdDLGFBQVksaUJBQUU4QyxJQUFGLENBQU9GLFVBTkQ7QUFPbEJ6QixTQUFRLGlCQUFFMkIsSUFBRixDQUFPRixVQVBHO0FBUWxCeEIsV0FBVSxpQkFBRTBCLElBQUYsQ0FBT0YsVUFSQztBQVNsQjdCLGlCQUFnQixpQkFBRStCLElBQUYsQ0FBT0YsVUFUTDtBQVVsQnRCLGFBQVksaUJBQUV3QixJQUFGLENBQU9GLFVBVkQ7QUFXbEJyQyxTQUFRLGlCQUFFdUMsSUFBRixDQUFPRixVQVhHO0FBWWxCNUIsVUFBUyxpQkFBRThCLElBWk87QUFhbEJyRCxVQUFTLGlCQUFFcUQsSUFBRixDQUFPRixVQWJFO0FBY2xCbkMsYUFBWSxpQkFBRXFDLElBQUYsQ0FBT0YsVUFkRDtBQWVsQnBDLFdBQVUsaUJBQUVzQyxJQUFGLENBQU9GLFVBZkM7QUFnQmxCeEMsT0FBTSxpQkFBRTBDLElBQUYsQ0FBT0YsVUFoQks7QUFpQmxCcEIsYUFBWSxpQkFBRWtCLE1BakJJO0FBa0JsQnpCLFFBQU8saUJBQUV5QixNQUFGLENBQVNFO0FBbEJFLENBQW5COztBQXFCQSxJQUFNRyxnQkFBZ0IsTUFBdEI7QUFDQSxJQUFNQyxzQkFBc0IsTUFBNUI7QUFDQSxJQUFNQyx1QkFBdUIsTUFBN0I7O0FBRUEsSUFBTUMsZ0JBQWdCLGtEQUFoQixrQkFPSztBQUFBLFFBQVMxRCxNQUFNc0IsTUFBTixvQ0FBZ0QsTUFBekQ7QUFBQSxDQVBMLEVBUU07QUFBQSxRQUFTdEIsTUFBTXNCLE1BQU4sSUFBZ0J0QixNQUFNcUIsT0FBdEIsR0FBZ0MsR0FBaEMsR0FBc0MsR0FBL0M7QUFBQSxDQVJOLENBQU47O0FBV0EsSUFBTXNDLGFBQWEsMkJBQU9DLElBQXBCLG1CQU1TTCxhQU5ULEVBT0g7QUFBQSxRQUFTTSxTQUFTN0QsS0FBVCxDQUFUO0FBQUEsQ0FQRyxDQUFOOztBQVVBLElBQU04RCx1QkFBdUIsMkJBQU9DLEdBQTlCLGtCQUFOOztBQU1BLElBQU1DLGdCQUFnQiwyQkFBT0QsR0FBdkIsbUJBTWNSLGFBTmQsRUFNaUNDLG1CQU5qQyxFQU0wREMsb0JBTjFELENBQU47O0FBVUEsSUFBTVEsc0JBQXNCLDJCQUFPRixHQUE3QixrQkFBTjs7QUFNQSxJQUFNRyxtQkFBbUIsMkJBQU9ILEdBQTFCLG1CQUlxQjtBQUFBLFFBQVMvRCxNQUFNbUUsS0FBTixDQUFZQyxNQUFyQjtBQUFBLENBSnJCLENBQU47O0FBT0EsSUFBTUMsc0JBQXNCLCtDQUF0QixtQkFXVztBQUFBLFFBQVNyRSxNQUFNbUUsS0FBTixDQUFZQyxNQUFyQjtBQUFBLENBWFgsRUFZSTtBQUFBLFFBQVNwRSxNQUFNbUUsS0FBTixDQUFZRyxLQUFyQjtBQUFBLENBWkosRUFhUztBQUFBLFFBQVN0RSxNQUFNbUUsS0FBTixDQUFZSSxVQUFyQjtBQUFBLENBYlQsQ0FBTjs7QUFnQkEsSUFBTUMsYUFBYSxnQ0FBTyxzQkFBSSxDQUFDLFFBQUQsQ0FBSixpQkFBUCxDQUFiLG1CQUVHO0FBQUEsUUFBU3hFLE1BQU15RSxNQUFOLEdBQWV6RSxNQUFNbUUsS0FBTixDQUFZTSxNQUEzQixHQUFvQ3pFLE1BQU1tRSxLQUFOLENBQVlHLEtBQXpEO0FBQUEsQ0FGSCxDQUFOOztBQU1BLElBQU1JLFdBQVcsc0JBQUksQ0FBQyxRQUFELENBQUosaUJBQWpCOztBQUVBLElBQU1DLG9CQUFvQixnQ0FBT0QsUUFBUCxDQUFwQixtQkFNSTtBQUFBLFFBQVMxRSxNQUFNbUUsS0FBTixDQUFZQyxNQUFyQjtBQUFBLENBTkosRUFTSztBQUFBLFFBQVNwRSxNQUFNbUUsS0FBTixDQUFZRyxLQUFyQjtBQUFBLENBVEwsQ0FBTjs7QUFjQSxJQUFNTSxtQkFBbUIsZ0NBQU9GLFFBQVAsQ0FBbkIsb0JBTUk7QUFBQSxRQUFTMUUsTUFBTXlFLE1BQU4sR0FBZXpFLE1BQU1tRSxLQUFOLENBQVlNLE1BQTNCLEdBQW9DekUsTUFBTW1FLEtBQU4sQ0FBWUcsS0FBekQ7QUFBQSxDQU5KLENBQU47O0FBVUEsSUFBTU8sZUFBZSwyQkFBT2QsR0FBdEIsb0JBS0thLGdCQUxMLEVBU0tELGlCQVRMLENBQU47O0lBY01HLE07OztBQUNMLG1CQUFxQjtBQUFBOztBQUFBOztBQUFBLHFDQUFObEcsSUFBTTtBQUFOQSxPQUFNO0FBQUE7O0FBQUEsa0tBQ1hBLElBRFc7O0FBRXBCLFNBQUttRyxNQUFMLEdBQWMsT0FBS0EsTUFBTCxDQUFZakcsSUFBWixRQUFkO0FBRm9CO0FBR3BCOzs7O3lCQUVNaUIsRyxFQUFLO0FBQ1gsUUFBS0EsR0FBTCxHQUFXQSxHQUFYO0FBQ0E7OztzQ0FFbUJpRixJLEVBQU07QUFDekIsT0FBSUEsS0FBS1AsTUFBTCxJQUFlLEtBQUsxRSxHQUF4QixFQUE2QjtBQUM1QixTQUFLQyxLQUFMLENBQVdpRixlQUFYLENBQTJCLEVBQUN4RixRQUFRLEtBQUtNLEdBQWQsRUFBM0I7QUFDQTtBQUNEOzs7MkJBRVE7QUFBQSxPQUNEQyxLQURDLEdBQ1EsSUFEUixDQUNEQSxLQURDOztBQUVSLFVBQ0M7QUFBQyxnQkFBRDtBQUFBO0FBQ0MsZUFBVSxLQUFLK0UsTUFEaEI7QUFFQyxhQUFRL0UsTUFBTXlFLE1BRmY7QUFHQyx1Q0FBZ0N6RSxNQUFNdUMsSUFIdkM7QUFJQyxnQkFBU3ZDLE1BQU1FO0FBSmhCO0FBTUM7QUFBQyxxQkFBRDtBQUFBLE9BQWtCLFFBQVFGLE1BQU15RSxNQUFoQyxFQUF3QyxZQUFVekUsTUFBTWtCLElBQWhCLFNBQXdCbEIsTUFBTUUsRUFBdEUsRUFBNEUsT0FBTyxFQUFDLGtCQUFrQixLQUFuQixFQUFuRjtBQUNDLG1DQUFDLFVBQUQsSUFBWSxRQUFRRixNQUFNeUUsTUFBMUIsRUFBa0MsTUFBSyxHQUF2QyxFQUEyQyxRQUFRekUsTUFBTTRDLElBQXpELEdBREQ7QUFFQztBQUFBO0FBQUEsUUFBTSxRQUFRNUMsTUFBTXlFLE1BQXBCLEVBQTRCLE1BQUssR0FBakM7QUFBc0N6RSxZQUFNdUM7QUFBNUM7QUFGRCxLQU5EO0FBVUM7QUFBQyxzQkFBRDtBQUFBLE9BQW1CLFFBQVF2QyxNQUFNeUUsTUFBakMsRUFBeUMsT0FBTyxFQUFDLGtCQUFrQnpFLE1BQU1JLEtBQXpCLEVBQWhEO0FBQ0M7QUFBQTtBQUFBLFFBQU0sUUFBUUosTUFBTXlFLE1BQXBCLEVBQTRCLE1BQUssR0FBakM7QUFBQTtBQUFBO0FBREQ7QUFWRCxJQUREO0FBZ0JBOzs7RUFsQ21CLGdCQUFNMUIsUzs7QUFxQzNCK0IsT0FBTzlCLFNBQVAsR0FBbUI7QUFDbEJ5QixTQUFRLGlCQUFFcEIsSUFEUTtBQUVsQlQsT0FBTSxpQkFBRU0sTUFBRixDQUFTRSxVQUZHO0FBR2xCbEQsS0FBSSxpQkFBRWdELE1BQUYsQ0FBU0UsVUFISztBQUlsQmhELFFBQU8saUJBQUU4RSxNQUFGLENBQVM5QixVQUpFO0FBS2xCYixPQUFNLGlCQUFFVyxNQUFGLENBQVNFLFVBTEc7QUFNbEJsQyxPQUFNLGlCQUFFZ0MsTUFBRixDQUFTRSxVQU5HO0FBT2xCK0IsVUFBUyxpQkFBRTdCLElBUE87QUFRbEIyQixrQkFBaUIsaUJBQUUzQjtBQVJELENBQW5COztBQVdBd0IsT0FBT00sWUFBUCxHQUFzQjtBQUNyQkgsa0JBQWlCLDJCQUFNLENBQUU7QUFESixDQUF0Qjs7QUFJQSxJQUFNSSxTQUFTLFNBQVRBLE1BQVM7QUFBQSxRQUFTLHlDQUFPLFdBQVdyRixNQUFNc0YsU0FBeEIsRUFBbUMsTUFBSyxRQUF4QyxHQUFUO0FBQUEsQ0FBZjs7QUFFQUQsT0FBT3JDLFNBQVAsR0FBbUI7QUFDbEJzQyxZQUFXLGlCQUFFcEM7QUFESyxDQUFuQjs7QUFJQSxJQUFNcUMsZUFBZSxnQ0FBT0YsTUFBUCxDQUFmLG1CQUFOOztBQUlBLElBQU1HLGNBQWMsK0NBQWQsbUJBQU47O0FBS0EsSUFBTUMsa0JBQWtCLCtDQUFsQixvQkFDRztBQUFBLFFBQVN6RixNQUFNbUUsS0FBTixDQUFZRyxLQUFyQjtBQUFBLENBREgsQ0FBTjs7QUFJQSxTQUFTb0IsS0FBVCxDQUFlMUYsS0FBZixFQUFzQjtBQUNyQixLQUFNMkYsT0FBTzNGLE1BQU00RixNQUFOLGFBQXlCLE9BQXRDO0FBQ0EsS0FBTUMsUUFBUTdGLE1BQU00RixNQUFOLEdBQWUsRUFBQ0UsUUFBUSxJQUFULEVBQWYsR0FBZ0MsRUFBQyxrQkFBa0IsSUFBbkIsRUFBOUM7QUFDQSxLQUFNQyxTQUFTL0YsTUFBTTRGLE1BQU4sR0FBZSxRQUFmLEdBQTBCLE9BQXpDO0FBQ0EsUUFDQztBQUFDLGFBQUQ7QUFBQTtBQUNDLFVBQU9DLEtBRFI7QUFFQyxVQUFVRixJQUFWLGdCQUF5QjNGLE1BQU1nRyxRQUFOLENBQWU3RCxRQUFmO0FBRjFCO0FBSUMsZ0NBQUMsZUFBRCxJQUFpQixNQUFLLEdBQXRCLEVBQTBCLFFBQVE0RCxNQUFsQyxHQUpEO0FBS0VKO0FBTEYsRUFERDtBQVNBOztBQUVERCxNQUFNMUMsU0FBTixHQUFrQjtBQUNqQjRDLFNBQVEsaUJBQUV2QyxJQURPO0FBRWpCMkMsV0FBVSxpQkFBRS9DO0FBRkssQ0FBbEI7O0FBS0EsSUFBTWdELGlCQUFpQixtREFBakIsbUJBQU47O0FBS0EsU0FBU0MsYUFBVCxDQUF1QmxHLEtBQXZCLEVBQThCO0FBQzdCLEtBQUksQ0FBQ0EsTUFBTW1HLElBQVgsRUFBaUI7QUFDaEIsU0FBTyxJQUFQO0FBQ0E7QUFDRCxTQUFRbkcsTUFBTW1HLElBQU4sQ0FBV2pGLElBQW5CO0FBQ0MsT0FBSyxLQUFMO0FBQ0MsVUFDQztBQUFDLHVCQUFEO0FBQUE7QUFDQyxrQ0FBQyxjQUFELElBQWdCLFFBQVFsQixNQUFNbUcsSUFBTixDQUFXQyxRQUFuQztBQURELElBREQ7QUFLRDtBQUNDLFVBQ0M7QUFBQyx1QkFBRDtBQUFBO0FBQ0Msa0NBQUMsUUFBRDtBQUNDLGlCQUREO0FBRUMsdUJBQWtCLG9CQUFPcEcsTUFBTW1HLElBQU4sQ0FBV0UsZ0JBQWxCLENBRm5CO0FBR0MscUJBQWdCLG9CQUFPckcsTUFBTW1HLElBQU4sQ0FBV0csY0FBbEIsQ0FIakI7QUFJQyxtQkFBYyxvQkFBT3RHLE1BQU1tRyxJQUFOLENBQVdJLFlBQWxCLENBSmY7QUFLQyxpQkFBWSxvQkFBT3ZHLE1BQU1tRyxJQUFOLENBQVdLLFVBQWxCLENBTGI7QUFNQyxXQUFNeEcsTUFBTW1HLElBQU4sQ0FBV3hELFFBQVgsQ0FBb0I4RCxJQU4zQjtBQU9DLFdBQU16RyxNQUFNbUcsSUFBTixDQUFXeEQsUUFBWCxDQUFvQitELE9BQXBCLENBQTRCOUQsSUFBNUIsSUFBb0M1QyxNQUFNbUcsSUFBTixDQUFXakYsSUFQdEQ7QUFRQyxTQUFJbEIsTUFBTW1HLElBQU4sQ0FBV2pHLEVBUmhCO0FBU0MsZUFBVSx5QkFBZUYsTUFBTW1HLElBQU4sQ0FBV3hELFFBQTFCLEVBQW9DLElBQXBDLEVBQTBDLElBQTFDLENBVFg7QUFVQyxXQUFNM0MsTUFBTW1HLElBQU4sQ0FBV3hELFFBQVgsQ0FBb0JFLFdBVjNCO0FBV0MsV0FBTTdDLE1BQU1tRyxJQUFOLENBQVd4RCxRQUFYLENBQW9CZ0UsSUFYM0I7QUFZQyxjQUFTM0csTUFBTW1HLElBQU4sQ0FBV3hELFFBQVgsQ0FBb0JpRTtBQVo5QjtBQURELElBREQ7QUFSRjtBQTJCQTs7QUFFRFYsY0FBY2xELFNBQWQsR0FBMEI7QUFDekJtRCxPQUFNLGlCQUFFbEQ7QUFEaUIsQ0FBMUI7O0FBSUEsSUFBTTRELHFCQUFxQiwyQkFBTzlDLEdBQTVCLG9CQVFlO0FBQUEsUUFBUy9ELE1BQU1tRSxLQUFOLENBQVlDLE1BQXJCO0FBQUEsQ0FSZixFQVNJO0FBQUEsUUFBU3BFLE1BQU1tRSxLQUFOLENBQVlHLEtBQXJCO0FBQUEsQ0FUSixFQVVIO0FBQUEsUUFBU1QsU0FBUzdELEtBQVQsQ0FBVDtBQUFBLENBVkcsQ0FBTjs7QUFhQSxJQUFNOEcsd0JBQXdCLDJCQUFPL0MsR0FBL0IsbUJBQU47O0FBWUEsSUFBTWdELGNBQWMsK0NBQWQsb0JBRUk7QUFBQSxRQUFTL0csTUFBTW1FLEtBQU4sQ0FBWUcsS0FBckI7QUFBQSxDQUZKLENBQU47O0FBUUEsSUFBTTBDLG1CQUFtQixnQ0FBT0QsV0FBUCxDQUFuQixvQkFHSTtBQUFBLFFBQVMvRyxNQUFNbUUsS0FBTixDQUFZRyxLQUFyQjtBQUFBLENBSEosQ0FBTjs7QUFRQSxJQUFNMkMsa0JBQWtCLCtDQUFsQixvQkFHSztBQUFBLFFBQVNqSCxNQUFNbUUsS0FBTixDQUFZRyxLQUFyQjtBQUFBLENBSEwsQ0FBTjs7QUFRQSxTQUFTNEMsWUFBVCxDQUFzQmxILEtBQXRCLEVBQTZCO0FBQzVCLFFBQ0M7QUFBQyxvQkFBRDtBQUFBLElBQW9CLFdBQVdBLE1BQU1zRixTQUFyQztBQUNFdEYsUUFBTXVDLElBQU4sSUFDQTtBQUFDLG1CQUFEO0FBQUE7QUFDRXZDLFNBQU11QztBQURSLEdBRkY7QUFNQztBQUFDLHdCQUFEO0FBQUE7QUFDRSxJQUFDdkMsTUFBTXdDLEtBQU4sSUFBZSxFQUFoQixFQUFvQkMsR0FBcEIsQ0FBd0IsYUFBSztBQUM3QixZQUFRbkQsRUFBRTRCLElBQVY7QUFDQyxVQUFLLE9BQUw7QUFDQTtBQUNDLGFBQ0M7QUFBQyxrQkFBRDtBQUFBLFNBQWEsS0FBSzVCLEVBQUU2SCxHQUFwQjtBQUNDO0FBQUMsdUJBQUQ7QUFBQSxVQUFpQixPQUFPN0gsRUFBRThILFdBQTFCLEVBQXVDLE9BQU8sRUFBQ3RCLGFBQVd4RyxFQUFFbUMsS0FBZCxFQUE5QztBQUF1RW5DLFVBQUU2SDtBQUF6RTtBQURELE9BREQ7QUFIRjtBQVNBLElBVkE7QUFERjtBQU5ELEVBREQ7QUFzQkE7O0FBRUQsU0FBU3RELFFBQVQsQ0FBa0I3RCxLQUFsQixFQUF5QjtBQUN4QixpT0FXZ0JBLE1BQU1tRSxLQUFOLENBQVlrRCxJQVg1QjtBQWVBIiwiZmlsZSI6InNlYXJjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dmFsdWVzfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFJlYWN0LCB7UHJvcFR5cGVzIGFzIHR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHRhZyBmcm9tICd0YWctaG9jJztcblxuaW1wb3J0IEljb24gZnJvbSAnLi9jb21tb24vaWNvbic7XG5pbXBvcnQge0lubmVySW5mb1BhbmV9IGZyb20gJy4vaW5mby1wYW5lJztcbmltcG9ydCBMaW5rIGZyb20gJy4vY29tbW9uL2xpbmsnO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJy4vY29tbW9uL21hcmtkb3duJztcbmltcG9ydCBPdXRzaWRlIGZyb20gJy4vb3V0c2lkZSc7XG5pbXBvcnQgU2VhcmNoRmllbGQgZnJvbSAnLi9jb21tb24vc2VhcmNoLWZpZWxkJztcbmltcG9ydCBUZXh0IGZyb20gJy4vdGV4dCc7XG5pbXBvcnQgd2l0aFRvZ2dsZVN0YXRlcyBmcm9tICcuLi9jb25uZWN0b3JzL3dpdGgtdG9nZ2xlLXN0YXRlcyc7XG5pbXBvcnQgUGFzc1Rocm91Z2ggZnJvbSAnLi4vY29udGFpbmVycy9wYXNzLXRocm91Z2gnO1xuXG5jb25zdCBJbmZvUGFuZSA9IHdpdGhUb2dnbGVTdGF0ZXMoSW5uZXJJbmZvUGFuZSk7XG5cbmNvbnN0IE5PT1AgPSAoKSA9PiB7fTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VhcmNoIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IoLi4uYXJncykge1xuXHRcdHN1cGVyKC4uLmFyZ3MpO1xuXHRcdHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZVVwID0gdGhpcy5oYW5kbGVVcC5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaGFuZGxlRG93biA9IHRoaXMuaGFuZGxlRG93bi5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuaGFuZGxlQWN0aXZhdGUgPSB0aGlzLmhhbmRsZUFjdGl2YXRlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5oYW5kbGVTY3JvbGxSZXF1ZXN0ID0gdGhpcy5oYW5kbGVTY3JvbGxSZXF1ZXN0LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5nZXRMaXN0UmVmID0gdGhpcy5nZXRMaXN0UmVmLmJpbmQodGhpcyk7XG5cdH1cblxuXHRoYW5kbGVTY3JvbGxSZXF1ZXN0KGUpIHtcblx0XHRpZiAoIXRoaXMubGlzdCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBsID0gdGhpcy5saXN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGNvbnN0IGkgPSBlLnRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdGlmIChpLmJvdHRvbSA+IGwuYm90dG9tKSB7XG5cdFx0XHR0aGlzLmxpc3Quc2Nyb2xsVG9wID0gZS50YXJnZXQub2Zmc2V0VG9wIC0gbC5oZWlnaHQgKyBpLmhlaWdodDtcblx0XHR9XG5cblx0XHRpZiAoaS50b3AgPCBsLnRvcCkge1xuXHRcdFx0dGhpcy5saXN0LnNjcm9sbFRvcCA9IGUudGFyZ2V0Lm9mZnNldFRvcCAtIDMwO1xuXHRcdH1cblx0fVxuXG5cdGdldExpc3RSZWYocmVmKSB7XG5cdFx0dGhpcy5saXN0ID0gcmVmO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uTW91bnQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMucHJvcHMub25Nb3VudCgpO1xuXHRcdH1cblx0fVxuXG5cdGhhbmRsZUFjdGl2YXRlKGUpIHtcblx0XHRjb25zdCBpZCA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1pZCcpO1xuXHRcdGNvbnN0IGluZGV4ID0gWy4uLnRoaXMucHJvcHMuZG9jcywgLi4udGhpcy5wcm9wcy5jb21wb25lbnRzXS5maW5kSW5kZXgoaSA9PiBpLmlkID09PSBpZCk7XG5cblx0XHRpZiAoaW5kZXggPiAtMSkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkFjdGl2YXRlKGluZGV4KTtcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVVcChlKSB7XG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRpZiAodGhpcy5wcm9wcy5hY3RpdmVJdGVtICYmIHRoaXMucHJvcHMuYWN0aXZlSXRlbS5pbmRleCA+IDApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRcdHRoaXMucHJvcHMub25VcCgpO1xuXHRcdH1cblx0fVxuXG5cdGhhbmRsZURvd24oZSkge1xuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0Y29uc3QgYXZhaWxhYmxlID0gdGhpcy5wcm9wcy5jb21wb25lbnRzLmxlbmd0aCArIHRoaXMucHJvcHMuZG9jcy5sZW5ndGggLSAyO1xuXG5cdFx0aWYgKHRoaXMucHJvcHMuYWN0aXZlSXRlbSAmJiBhdmFpbGFibGUgPj0gdGhpcy5wcm9wcy5hY3RpdmVJdGVtLmluZGV4KSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uRG93bigpO1xuXHRcdH1cblx0fVxuXG5cdGhhbmRsZVN1Ym1pdChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdGlmICghdGhpcy5wcm9wcy5hY3RpdmVJdGVtKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wcy5vblN1Ym1pdChlKTtcblx0XHR9XG5cdFx0dGhpcy5wcm9wcy5vbk5hdmlnYXRlKGAvJHt0aGlzLnByb3BzLmFjdGl2ZUl0ZW0udHlwZX0vJHt0aGlzLnByb3BzLmFjdGl2ZUl0ZW0uaWR9YCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb3BzfSA9IHRoaXM7XG5cdFx0Y29uc3Qgd2l0aENvbXBvbmVudHMgPSBwcm9wcy5jb21wb25lbnRzLmxlbmd0aCA+IDA7XG5cdFx0Y29uc3Qgd2l0aERvY3MgPSBwcm9wcy5kb2NzLmxlbmd0aCA+IDA7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PFN0eWxlZEZvcm1Cb3hcblx0XHRcdFx0ZW5hYmxlZD17cHJvcHMuZW5hYmxlZH1cblx0XHRcdFx0aW5saW5lPXtwcm9wcy5pbmxpbmV9XG5cdFx0XHRcdG9uQ2xpY2tPdXRzaWRlPXtwcm9wcy5pbmxpbmUgfHwgIXByb3BzLmVuYWJsZWQgPyBOT09QIDogcHJvcHMub25DbGlja091dHNpZGV9XG5cdFx0XHRcdG9uQ2xpY2s9e3Byb3BzLmlubGluZSAmJiAhcHJvcHMuZW5hYmxlZCA/IHByb3BzLm9uRm9jdXMgOiBOT09QfVxuXHRcdFx0XHR2YWx1ZT17cHJvcHMudmFsdWV9XG5cdFx0XHRcdD5cblx0XHRcdFx0PFN0eWxlZEZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBtZXRob2Q9XCJHRVRcIj5cblx0XHRcdFx0XHQ8U3R5bGVkU2VhcmNoRmllbGRCb3ggb25DbGljaz17cHJvcHMuaW5saW5lID8gcHJvcHMub25DbGljayA6IE5PT1B9PlxuXHRcdFx0XHRcdFx0PFNlYXJjaEZpZWxkXG5cdFx0XHRcdFx0XHRcdGxpbmtUbz1cIi9zZWFyY2hcIlxuXHRcdFx0XHRcdFx0XHRtYXJrPXtwcm9wcy5pbmxpbmUgPyBudWxsIDogdHJ1ZX1cblx0XHRcdFx0XHRcdFx0bmFtZT17cHJvcHMuaW5saW5lID8gJ2lubGluZS1zZWFyY2gnIDogJ3NlYXJjaCd9XG5cdFx0XHRcdFx0XHRcdG9uQmx1cj17cHJvcHMuaW5saW5lID8gTk9PUCA6IHByb3BzLm9uQmx1cn1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3Byb3BzLmlubGluZSA/IE5PT1AgOiBwcm9wcy5vbkNoYW5nZX1cblx0XHRcdFx0XHRcdFx0b25DbGVhcj17cHJvcHMuaW5saW5lID8gTk9PUCA6IHByb3BzLm9uQ2xlYXJ9XG5cdFx0XHRcdFx0XHRcdG9uQ29tcGxldGU9e3Byb3BzLmlubGluZSA/IE5PT1AgOiBwcm9wcy5vbkNvbXBsZXRlfVxuXHRcdFx0XHRcdFx0XHRvbkZvY3VzPXtwcm9wcy5pbmxpbmUgPyBOT09QIDogcHJvcHMub25Gb2N1c31cblx0XHRcdFx0XHRcdFx0b25TdG9wPXtwcm9wcy5pbmxpbmUgPyBOT09QIDogcHJvcHMub25TdG9wfVxuXHRcdFx0XHRcdFx0XHRvblVwPXtwcm9wcy5pbmxpbmUgPyBOT09QIDogdGhpcy5oYW5kbGVVcH1cblx0XHRcdFx0XHRcdFx0b25Eb3duPXtwcm9wcy5pbmxpbmUgPyBOT09QIDogdGhpcy5oYW5kbGVEb3dufVxuXHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG5cdFx0XHRcdFx0XHRcdHN1Z2dlc3Rpb249e3Byb3BzLnN1Z2dlc3Rpb259XG5cdFx0XHRcdFx0XHRcdHRpdGxlPXtgU2VhcmNoIGZvciBwYXR0ZXJucyAke3Byb3BzLnNob3J0Y3V0cy50b2dnbGVTZWFyY2gudG9TdHJpbmcoKX1gfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMudmFsdWUgfHwgJyd9XG5cdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0e3Byb3BzLmVuYWJsZWQgJiZcblx0XHRcdFx0XHRcdFx0XHQ8Q2xvc2Vcblx0XHRcdFx0XHRcdFx0XHRcdHNob3J0Y3V0PXtwcm9wcy5zaG9ydGN1dHMuY2xvc2V9XG5cdFx0XHRcdFx0XHRcdFx0XHRjbGVhcnM9e1N0cmluZyhwcm9wcy52YWx1ZSkubGVuZ3RoID4gMH1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdDwvU2VhcmNoRmllbGQ+XG5cdFx0XHRcdFx0XHQ8UGFzc1Rocm91Z2ggcXVlcnk9e3snc2VhcmNoLWVuYWJsZWQnOiB0cnVlLCAnc2VhcmNoJzogbnVsbH19Lz5cblx0XHRcdFx0XHRcdDxIaWRkZW5TdWJtaXQvPlxuXHRcdFx0XHRcdFx0PFNlYXJjaExlZ2VuZCBuYW1lPXtwcm9wcy5sZWdlbmQubmFtZX0gaXRlbXM9e3Byb3BzLmxlZ2VuZC5pdGVtc30vPlxuXHRcdFx0XHRcdDwvU3R5bGVkU2VhcmNoRmllbGRCb3g+XG5cdFx0XHRcdFx0PFN0eWxlZFJlc3VsdHM+XG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdCh3aXRoQ29tcG9uZW50cyB8fCB3aXRoRG9jcykgJiZcblx0XHRcdFx0XHRcdFx0XHQ8U3R5bGVkUmVzdWx0TGlzdCBpbm5lclJlZj17dGhpcy5nZXRMaXN0UmVmfT5cblx0XHRcdFx0XHRcdFx0XHRcdHt3aXRoRG9jcyA+IDAgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFN0eWxlZFJlc3VsdEhlYWRpbmc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0RG9jcyAoe3Byb3BzLmRvY3MubGVuZ3RofSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9TdHlsZWRSZXN1bHRIZWFkaW5nPlxuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRwcm9wcy5kb2NzLm1hcChkID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVzdWx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhY3RpdmU9eyhwcm9wcy5hY3RpdmVJdGVtIHx8IHt9KS5pZCA9PT0gZC5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPXtkLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aW5kZXg9e2QuaW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uPXtkLm1hbmlmZXN0Lmljb24gfHwgZC50eXBlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT17ZC5tYW5pZmVzdC5kaXNwbGF5TmFtZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17ZC5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQWN0aXZhdGU9e3RoaXMuaGFuZGxlQWN0aXZhdGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvblNjcm9sbFJlcXVlc3Q9e3RoaXMuaGFuZGxlU2Nyb2xsUmVxdWVzdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJkb2NcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KSlcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdHt3aXRoQ29tcG9uZW50cyA+IDAgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0PFN0eWxlZFJlc3VsdEhlYWRpbmcgbmF2aWdhdGlvbkVuYWJsZWQ9e3Byb3BzLm5hdmlnYXRpb25FbmFibGVkfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRDb21wb25lbnRzICh7cHJvcHMuY29tcG9uZW50cy5sZW5ndGh9KVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1N0eWxlZFJlc3VsdEhlYWRpbmc+XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLmNvbXBvbmVudHMubWFwKGQgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZXN1bHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFjdGl2ZT17KHByb3BzLmFjdGl2ZUl0ZW0gfHwge30pLmlkID09PSBkLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9e2QuaWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpbmRleD17ZC5pbmRleH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb249e2QubWFuaWZlc3QuaWNvbiB8fCBkLnR5cGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPXtkLm1hbmlmZXN0LmRpc3BsYXlOYW1lfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtkLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25BY3RpdmF0ZT17dGhpcy5oYW5kbGVBY3RpdmF0ZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uU2Nyb2xsUmVxdWVzdD17dGhpcy5oYW5kbGVTY3JvbGxSZXF1ZXN0fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInBhdHRlcm5cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KSlcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHQ8L1N0eWxlZFJlc3VsdExpc3Q+XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR7KHdpdGhDb21wb25lbnRzIHx8IHdpdGhEb2NzKSAmJlxuXHRcdFx0XHRcdFx0XHQ8UmVzdWx0UHJldmlld1xuXHRcdFx0XHRcdFx0XHRcdGl0ZW09e3Byb3BzLmFjdGl2ZUl0ZW19XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L1N0eWxlZFJlc3VsdHM+XG5cdFx0XHRcdDwvU3R5bGVkRm9ybT5cblx0XHRcdDwvU3R5bGVkRm9ybUJveD5cblx0XHQpO1xuXHR9XG59XG5cblNlYXJjaC5wcm9wVHlwZXMgPSB7XG5cdGFjdGl2ZUl0ZW06IHQuYW55LnN0cmluZyxcblx0Y29tcG9uZW50czogdC5hcnJheS5pc1JlcXVpcmVkLFxuXHRkb2NzOiB0LmFycmF5LmlzUmVxdWlyZWQsXG5cdGVuYWJsZWQ6IHQuYm9vbC5pc1JlcXVpcmVkLFxuXHRpbmxpbmU6IHQuYm9vbCxcblx0b25BY3RpdmF0ZTogdC5mdW5jLmlzUmVxdWlyZWQsXG5cdG9uQmx1cjogdC5mdW5jLmlzUmVxdWlyZWQsXG5cdG9uQ2hhbmdlOiB0LmZ1bmMuaXNSZXF1aXJlZCxcblx0b25DbGlja091dHNpZGU6IHQuZnVuYy5pc1JlcXVpcmVkLFxuXHRvbkNvbXBsZXRlOiB0LmZ1bmMuaXNSZXF1aXJlZCxcblx0b25Eb3duOiB0LmZ1bmMuaXNSZXF1aXJlZCxcblx0b25Gb2N1czogdC5mdW5jLFxuXHRvbk1vdW50OiB0LmZ1bmMuaXNSZXF1aXJlZCxcblx0b25OYXZpZ2F0ZTogdC5mdW5jLmlzUmVxdWlyZWQsXG5cdG9uU3VibWl0OiB0LmZ1bmMuaXNSZXF1aXJlZCxcblx0b25VcDogdC5mdW5jLmlzUmVxdWlyZWQsXG5cdHN1Z2dlc3Rpb246IHQuc3RyaW5nLFxuXHR2YWx1ZTogdC5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuY29uc3QgU0VBUkNIX0hFSUdIVCA9ICc2MHZoJztcbmNvbnN0IFNFQVJDSF9GSUVMRF9IRUlHSFQgPSAnODBweCc7XG5jb25zdCBTRUFSQ0hfTEVHRU5EX0hFSUdIVCA9ICczMHB4JztcblxuY29uc3QgU3R5bGVkRm9ybUJveCA9IHN0eWxlZChPdXRzaWRlKWBcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0cG9pbnRlci1ldmVudHM6IGFsbDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0bWFyZ2luOiAke3Byb3BzID0+IHByb3BzLmlubGluZSA/IGBjYWxjKDEyLjV2aCAtIDMwcHgpIDAgNjBweCAwYCA6ICdub25lJ307XG5cdG9wYWNpdHk6ICR7cHJvcHMgPT4gcHJvcHMuaW5saW5lICYmIHByb3BzLmVuYWJsZWQgPyAnMCcgOiAnMSd9O1xuYDtcblxuY29uc3QgU3R5bGVkRm9ybSA9IHN0eWxlZC5mb3JtYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHotaW5kZXg6IDI7XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXgtaGVpZ2h0OiAke1NFQVJDSF9IRUlHSFR9O1xuXHQke3Byb3BzID0+IHdpdGhUaW50KHByb3BzKX1cbmA7XG5cbmNvbnN0IFN0eWxlZFNlYXJjaEZpZWxkQm94ID0gc3R5bGVkLmRpdmBcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAxO1xuXHRmbGV4OiAwIDAgYXV0bztcbmA7XG5cbmNvbnN0IFN0eWxlZFJlc3VsdHMgPSBzdHlsZWQuZGl2YFxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHotaW5kZXg6IDE7XG5cdGZsZXg6IDEgMSBhdXRvO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRtYXgtaGVpZ2h0OiBjYWxjKCR7U0VBUkNIX0hFSUdIVH0gLSAke1NFQVJDSF9GSUVMRF9IRUlHSFR9IC0gJHtTRUFSQ0hfTEVHRU5EX0hFSUdIVH0pOyAvKiBlbnN1cmUgZmlyZWZveCBzY3JvbGxzIHJlc3VsdCBsaXN0ICovXG5cdC8qIG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiBzdGlja3kgYnJlYWtzIHdoZW4gZG9pbmcgdGhpcyovXG5gO1xuXG5jb25zdCBTdHlsZWRSZXN1bHRQcmV2aWV3ID0gc3R5bGVkLmRpdmBcblx0ZmxleDogMSAxIDYwJTtcblx0b3ZlcmZsb3c6IHNjcm9sbDtcblx0LXdlYmtpdC10b3VjaC1zY3JvbGw6IGF1dG87XG5gO1xuXG5jb25zdCBTdHlsZWRSZXN1bHRMaXN0ID0gc3R5bGVkLmRpdmBcblx0ZmxleDogMSAwIDQwJTtcblx0b3ZlcmZsb3c6IHNjcm9sbDtcblx0LXdlYmtpdC10b3VjaC1zY3JvbGw6IGF1dG87XG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm9yZGVyfTtcbmA7XG5cbmNvbnN0IFN0eWxlZFJlc3VsdEhlYWRpbmcgPSBzdHlsZWQoVGV4dClgXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdHBvc2l0aW9uOiAtd2Via2l0LXN0aWNreTtcblx0cG9zaXRpb246IHN0aWNreTtcblx0ei1pbmRleDogMTtcblx0dG9wOiAwO1xuXHRtYXJnaW46IDA7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0cGFkZGluZzogM3B4IDE1cHg7XG5cdGJvcmRlci13aWR0aDogMXB4IDA7XG5cdGJvcmRlci1zdHlsZTogc29saWQ7XG5cdGJvcmRlci1jb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3JkZXJ9O1xuXHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcn07XG5cdGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYmFja2dyb3VuZH07XG5gO1xuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKHRhZyhbJ2FjdGl2ZSddKShJY29uKSlgXG5cdGZsZXg6IDAgMCBhdXRvO1xuXHRmaWxsOiAke3Byb3BzID0+IHByb3BzLmFjdGl2ZSA/IHByb3BzLnRoZW1lLmFjdGl2ZSA6IHByb3BzLnRoZW1lLmNvbG9yfTtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuYDtcblxuY29uc3QgTGlua2FibGUgPSB0YWcoWydhY3RpdmUnXSkoTGluayk7XG5cbmNvbnN0IFN0eWxlZFByZXZpZXdMaW5rID0gc3R5bGVkKExpbmthYmxlKWBcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHRyaWdodDogMTVweDtcblx0dG9wOiA1MCU7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5ib3JkZXJ9O1xuXHRvcGFjaXR5OiAwO1xuXHQmOmhvdmVyIHtcblx0XHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcn07XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdH1cbmA7XG5cbmNvbnN0IFN0eWxlZFJlc3VsdExpbmsgPSBzdHlsZWQoTGlua2FibGUpYFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogMTBweCAxNXB4O1xuXHRsaW5lLWhlaWdodDogMjBweDtcblx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMuYWN0aXZlID8gcHJvcHMudGhlbWUuYWN0aXZlIDogcHJvcHMudGhlbWUuY29sb3J9O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gO1xuXG5jb25zdCBTdHlsZWRSZXN1bHQgPSBzdHlsZWQuZGl2YFxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdCY6aG92ZXIgJHtTdHlsZWRSZXN1bHRMaW5rfSB7XG5cdFx0bWFzay1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsIHJnYmEoMCwgMCwgMCwgMCkgNzVweCwgcmdiYSgwLCAwLCAwLCAxKSAxMjVweCk7XG5cdFx0LXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgwLCAwLCAwLCAwKSA3NXB4LCByZ2JhKDAsIDAsIDAsIDEpIDEyNXB4KTtcblx0fVxuXHQmOmhvdmVyICR7U3R5bGVkUHJldmlld0xpbmt9IHtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5gO1xuXG5jbGFzcyBSZXN1bHQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG5cdFx0c3VwZXIoLi4uYXJncyk7XG5cdFx0dGhpcy5nZXRSZWYgPSB0aGlzLmdldFJlZi5iaW5kKHRoaXMpO1xuXHR9XG5cblx0Z2V0UmVmKHJlZikge1xuXHRcdHRoaXMucmVmID0gcmVmO1xuXHR9XG5cblx0Y29tcG9uZW50V2lsbFVwZGF0ZShuZXh0KSB7XG5cdFx0aWYgKG5leHQuYWN0aXZlICYmIHRoaXMucmVmKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uU2Nyb2xsUmVxdWVzdCh7dGFyZ2V0OiB0aGlzLnJlZn0pO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRjb25zdCB7cHJvcHN9ID0gdGhpcztcblx0XHRyZXR1cm4gKFxuXHRcdFx0PFN0eWxlZFJlc3VsdFxuXHRcdFx0XHRpbm5lclJlZj17dGhpcy5nZXRSZWZ9XG5cdFx0XHRcdGFjdGl2ZT17cHJvcHMuYWN0aXZlfVxuXHRcdFx0XHR0aXRsZT17YE5hdmlnYXRpb24gdG8gcGF0dGVybiAke3Byb3BzLm5hbWV9YH1cblx0XHRcdFx0ZGF0YS1pZD17cHJvcHMuaWR9XG5cdFx0XHRcdD5cblx0XHRcdFx0PFN0eWxlZFJlc3VsdExpbmsgYWN0aXZlPXtwcm9wcy5hY3RpdmV9IGhyZWY9e2AvJHtwcm9wcy50eXBlfS8ke3Byb3BzLmlkfWB9IHF1ZXJ5PXt7J3NlYXJjaC1lbmFibGVkJzogZmFsc2V9fT5cblx0XHRcdFx0XHQ8U3R5bGVkSWNvbiBhY3RpdmU9e3Byb3BzLmFjdGl2ZX0gc2l6ZT1cIm1cIiBzeW1ib2w9e3Byb3BzLmljb259Lz5cblx0XHRcdFx0XHQ8VGV4dCBhY3RpdmU9e3Byb3BzLmFjdGl2ZX0gc2l6ZT1cImxcIj57cHJvcHMubmFtZX08L1RleHQ+XG5cdFx0XHRcdDwvU3R5bGVkUmVzdWx0TGluaz5cblx0XHRcdFx0PFN0eWxlZFByZXZpZXdMaW5rIGFjdGl2ZT17cHJvcHMuYWN0aXZlfSBxdWVyeT17eydzZWFyY2gtcHJldmlldyc6IHByb3BzLmluZGV4fX0+XG5cdFx0XHRcdFx0PFRleHQgYWN0aXZlPXtwcm9wcy5hY3RpdmV9IHNpemU9XCJzXCI+UHJldmlldzwvVGV4dD5cblx0XHRcdFx0PC9TdHlsZWRQcmV2aWV3TGluaz5cblx0XHRcdDwvU3R5bGVkUmVzdWx0PlxuXHRcdCk7XG5cdH1cbn1cblxuUmVzdWx0LnByb3BUeXBlcyA9IHtcblx0YWN0aXZlOiB0LmJvb2wsXG5cdGljb246IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGlkOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRpbmRleDogdC5udW1iZXIuaXNSZXF1aXJlZCxcblx0bmFtZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0dHlwZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0b25Ib3ZlcjogdC5mdW5jLFxuXHRvblNjcm9sbFJlcXVlc3Q6IHQuZnVuY1xufTtcblxuUmVzdWx0LmRlZmF1bHRQcm9wcyA9IHtcblx0b25TY3JvbGxSZXF1ZXN0OiAoKSA9PiB7fVxufTtcblxuY29uc3QgU3VibWl0ID0gcHJvcHMgPT4gPGlucHV0IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfSB0eXBlPVwic3VibWl0XCIvPjtcblxuU3VibWl0LnByb3BUeXBlcyA9IHtcblx0Y2xhc3NOYW1lOiB0LnN0cmluZ1xufTtcblxuY29uc3QgSGlkZGVuU3VibWl0ID0gc3R5bGVkKFN1Ym1pdClgXG5cdGRpc3BsYXk6IG5vbmU7XG5gO1xuXG5jb25zdCBTdHlsZWRDbG9zZSA9IHN0eWxlZChMaW5rKWBcblx0Zm9udC1zaXplOiAwO1xuXHRsaW5lLWhlaWdodDogMDtcbmA7XG5cbmNvbnN0IFN0eWxlZENsb3NlSWNvbiA9IHN0eWxlZChJY29uKWBcblx0ZmlsbDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcn07XG5gO1xuXG5mdW5jdGlvbiBDbG9zZShwcm9wcykge1xuXHRjb25zdCB2ZXJiID0gcHJvcHMuY2xlYXJzID8gYENsZWFyYCA6ICdDbG9zZSc7XG5cdGNvbnN0IHF1ZXJ5ID0gcHJvcHMuY2xlYXJzID8ge3NlYXJjaDogbnVsbH0gOiB7J3NlYXJjaC1lbmFibGVkJzogbnVsbH07XG5cdGNvbnN0IHN5bWJvbCA9IHByb3BzLmNsZWFycyA/ICdyZXR1cm4nIDogJ2Nsb3NlJztcblx0cmV0dXJuIChcblx0XHQ8U3R5bGVkQ2xvc2Vcblx0XHRcdHF1ZXJ5PXtxdWVyeX1cblx0XHRcdHRpdGxlPXtgJHt2ZXJifSBzZWFyY2ggJHtwcm9wcy5zaG9ydGN1dC50b1N0cmluZygpfWB9XG5cdFx0XHQ+XG5cdFx0XHQ8U3R5bGVkQ2xvc2VJY29uIHNpemU9XCJzXCIgc3ltYm9sPXtzeW1ib2x9Lz5cblx0XHRcdHt2ZXJifVxuXHRcdDwvU3R5bGVkQ2xvc2U+XG5cdCk7XG59XG5cbkNsb3NlLnByb3BUeXBlcyA9IHtcblx0Y2xlYXJzOiB0LmJvb2wsXG5cdHNob3J0Y3V0OiB0LmFueVxufTtcblxuY29uc3QgU3R5bGVkTWFya2Rvd24gPSBzdHlsZWQoTWFya2Rvd24pYFxuXHR3aWR0aDogODAlO1xuXHRtYXJnaW46IDAgYXV0bztcbmA7XG5cbmZ1bmN0aW9uIFJlc3VsdFByZXZpZXcocHJvcHMpIHtcblx0aWYgKCFwcm9wcy5pdGVtKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0c3dpdGNoIChwcm9wcy5pdGVtLnR5cGUpIHtcblx0XHRjYXNlICdkb2MnOlxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PFN0eWxlZFJlc3VsdFByZXZpZXc+XG5cdFx0XHRcdFx0PFN0eWxlZE1hcmtkb3duIHNvdXJjZT17cHJvcHMuaXRlbS5jb250ZW50c30vPlxuXHRcdFx0XHQ8L1N0eWxlZFJlc3VsdFByZXZpZXc+XG5cdFx0XHQpO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8U3R5bGVkUmVzdWx0UHJldmlldz5cblx0XHRcdFx0XHQ8SW5mb1BhbmVcblx0XHRcdFx0XHRcdGFjdGl2ZVxuXHRcdFx0XHRcdFx0ZGVtb0RlcGVuZGVuY2llcz17dmFsdWVzKHByb3BzLml0ZW0uZGVtb0RlcGVuZGVuY2llcyl9XG5cdFx0XHRcdFx0XHRkZW1vRGVwZW5kZW50cz17dmFsdWVzKHByb3BzLml0ZW0uZGVtb0RlcGVuZGVudHMpfVxuXHRcdFx0XHRcdFx0ZGVwZW5kZW5jaWVzPXt2YWx1ZXMocHJvcHMuaXRlbS5kZXBlbmRlbmNpZXMpfVxuXHRcdFx0XHRcdFx0ZGVwZW5kZW50cz17dmFsdWVzKHByb3BzLml0ZW0uZGVwZW5kZW50cyl9XG5cdFx0XHRcdFx0XHRmbGFnPXtwcm9wcy5pdGVtLm1hbmlmZXN0LmZsYWd9XG5cdFx0XHRcdFx0XHRpY29uPXtwcm9wcy5pdGVtLm1hbmlmZXN0Lm9wdGlvbnMuaWNvbiB8fCBwcm9wcy5pdGVtLnR5cGV9XG5cdFx0XHRcdFx0XHRpZD17cHJvcHMuaXRlbS5pZH1cblx0XHRcdFx0XHRcdG1hbmlmZXN0PXtKU09OLnN0cmluZ2lmeShwcm9wcy5pdGVtLm1hbmlmZXN0LCBudWxsLCAnICAnKX1cblx0XHRcdFx0XHRcdG5hbWU9e3Byb3BzLml0ZW0ubWFuaWZlc3QuZGlzcGxheU5hbWV9XG5cdFx0XHRcdFx0XHR0YWdzPXtwcm9wcy5pdGVtLm1hbmlmZXN0LnRhZ3N9XG5cdFx0XHRcdFx0XHR2ZXJzaW9uPXtwcm9wcy5pdGVtLm1hbmlmZXN0LnZlcnNpb259XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1N0eWxlZFJlc3VsdFByZXZpZXc+XG5cdFx0XHQpO1xuXHR9XG59XG5cblJlc3VsdFByZXZpZXcucHJvcFR5cGVzID0ge1xuXHRpdGVtOiB0LmFueVxufTtcblxuY29uc3QgU3R5bGVkU2VhcmNoTGVnZW5kID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0aGVpZ2h0OiAzMHB4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdHdpZHRoOiAxMDAlO1xuXHRwYWRkaW5nOiAwIDE1cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm9yZGVyfTtcblx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3J9O1xuXHQke3Byb3BzID0+IHdpdGhUaW50KHByb3BzKX1cbmA7XG5cbmNvbnN0IFN0eWxlZFNlYXJjaExlZ2VuZEJveCA9IHN0eWxlZC5kaXZgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdG92ZXJmbG93OiBzY3JvbGw7XG5cdC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcblx0d2lkdGg6IDEwMCU7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMTtcblx0Ojotd2Via2l0LXNjcm9sbGJhciB7XG5cdFx0ZGlzcGxheTogbm9uZTtcblx0fVxuYDtcblxuY29uc3QgU3R5bGVkRmllbGQgPSBzdHlsZWQoVGV4dClgXG5cdHBhZGRpbmc6IDAgMTBweDtcblx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3J9O1xuXHQmOmZpcnN0LWNoaWxkIHtcblx0XHRwYWRkaW5nLWxlZnQ6IDA7XG5cdH1cbmA7XG5cbmNvbnN0IFN0eWxlZExlZ2VuZE5hbWUgPSBzdHlsZWQoU3R5bGVkRmllbGQpYFxuXHRwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3J9O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHotaW5kZXg6IDE7XG5gO1xuXG5jb25zdCBTdHlsZWRGaWVsZExpbmsgPSBzdHlsZWQoTGluaylgXG5cdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdCY6bGluaywgJjphY3RpdmUsICY6dmlzaXRlZCwgJjpob3ZlciB7XG5cdFx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3J9O1xuXHRcdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0fVxuYDtcblxuZnVuY3Rpb24gU2VhcmNoTGVnZW5kKHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PFN0eWxlZFNlYXJjaExlZ2VuZCBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+XG5cdFx0XHR7cHJvcHMubmFtZSAmJlxuXHRcdFx0XHQ8U3R5bGVkTGVnZW5kTmFtZT5cblx0XHRcdFx0XHR7cHJvcHMubmFtZX1cblx0XHRcdFx0PC9TdHlsZWRMZWdlbmROYW1lPlxuXHRcdFx0fVxuXHRcdFx0PFN0eWxlZFNlYXJjaExlZ2VuZEJveD5cblx0XHRcdFx0eyhwcm9wcy5pdGVtcyB8fCBbXSkubWFwKGwgPT4ge1xuXHRcdFx0XHRcdHN3aXRjaCAobC50eXBlKSB7XG5cdFx0XHRcdFx0XHRjYXNlICdmaWVsZCc6XG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdDxTdHlsZWRGaWVsZCBrZXk9e2wua2V5fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxTdHlsZWRGaWVsZExpbmsgdGl0bGU9e2wuZGVzY3JpcHRpb259IHF1ZXJ5PXt7c2VhcmNoOiBgJHtsLnZhbHVlfWB9fT57bC5rZXl9PC9TdHlsZWRGaWVsZExpbms+XG5cdFx0XHRcdFx0XHRcdFx0PC9TdHlsZWRGaWVsZD5cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9TdHlsZWRTZWFyY2hMZWdlbmRCb3g+XG5cdFx0PC9TdHlsZWRTZWFyY2hMZWdlbmQ+XG5cdCk7XG59XG5cbmZ1bmN0aW9uIHdpdGhUaW50KHByb3BzKSB7XG5cdHJldHVybiBgXG5cdFx0Jjo6YmVmb3JlIHtcblx0XHRcdGNvbnRlbnQ6ICcnO1xuXHRcdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdFx0ei1pbmRleDogMDtcblx0XHRcdHRvcDogMDtcblx0XHRcdHJpZ2h0OiAwO1xuXHRcdFx0Ym90dG9tOiAwO1xuXHRcdFx0bGVmdDogMDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0YmFja2dyb3VuZDogJHtwcm9wcy50aGVtZS50aW50fTtcblx0XHRcdG9wYWNpdHk6IDAuOTc1O1xuXHRcdH1cblx0YDtcbn1cbiJdfQ==
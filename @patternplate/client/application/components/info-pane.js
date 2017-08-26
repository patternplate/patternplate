'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InnerInfoPane = undefined;

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

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

var _taggedTemplateLiteral2 = require('babel-runtime/helpers/taggedTemplateLiteral');

var _taggedTemplateLiteral3 = _interopRequireDefault(_taggedTemplateLiteral2);

var _templateObject = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\twidth: 300px;\n\tmin-height: 300px;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tborder-radius: ', ';\n\tborder-right: 1px solid ', ';\n\tborder-right-width: ', 'px;\n\toverflow: scroll;\n\toverflow-x: hidden;\n\tbackground: ', ';\n'], ['\n\tposition: relative;\n\twidth: 300px;\n\tmin-height: 300px;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tborder-radius: ', ';\n\tborder-right: 1px solid ', ';\n\tborder-right-width: ', 'px;\n\toverflow: scroll;\n\toverflow-x: hidden;\n\tbackground: ', ';\n']),
    _templateObject2 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\tz-index: 1;\n\tbackground: ', ';\n'], ['\n\tposition: relative;\n\tz-index: 1;\n\tbackground: ', ';\n']),
    _templateObject3 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\tz-index: 1;\n\tdisplay: flex;\n\tflex: 0 0 auto;\n\talign-items: center;\n\tmargin-bottom: 10px;\n\tpadding: 10px 15px 0 15px;\n'], ['\n\tposition: relative;\n\tz-index: 1;\n\tdisplay: flex;\n\tflex: 0 0 auto;\n\talign-items: center;\n\tmargin-bottom: 10px;\n\tpadding: 10px 15px 0 15px;\n']),
    _templateObject4 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: flex;\n\tposition: relative;\n\tz-index: 1;\n\talign-items: center;\n\tpadding: 0 15px 10px 15px;\n'], ['\n\tdisplay: flex;\n\tposition: relative;\n\tz-index: 1;\n\talign-items: center;\n\tpadding: 0 15px 10px 15px;\n']),
    _templateObject5 = (0, _taggedTemplateLiteral3.default)(['\n\tflex: 1 0 auto;\n\tcolor: ', ';\n\tmargin-right: 10px;\n'], ['\n\tflex: 1 0 auto;\n\tcolor: ', ';\n\tmargin-right: 10px;\n']),
    _templateObject6 = (0, _taggedTemplateLiteral3.default)(['\n\tflex: 0 1 auto;\n\tcolor: ', ';\n\ttext-align: right;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n'], ['\n\tflex: 0 1 auto;\n\tcolor: ', ';\n\ttext-align: right;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n']),
    _templateObject7 = (0, _taggedTemplateLiteral3.default)(['\n\tflex: 0 0 auto;\n\tfill: ', ';\n\tmargin-right: 5px;\n'], ['\n\tflex: 0 0 auto;\n\tfill: ', ';\n\tmargin-right: 5px;\n']),
    _templateObject8 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\tz-index: 1;\n\tflex: 0 0 auto;\n\twidth: 100%;\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n'], ['\n\tposition: relative;\n\tz-index: 1;\n\tflex: 0 0 auto;\n\twidth: 100%;\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n']),
    _templateObject9 = (0, _taggedTemplateLiteral3.default)(['\n\tbox-sizing: border-box;\n\theight: 30px;\n\tpadding: 4px 6px;\n\tborder-top: 1px solid ', ';\n\t&:first-child {\n\t\tpadding-left: 20px;\n\t}\n\t&:last-child {\n\t\ttext-align: right;\n\t\tpadding-right: 15px;\n\t}\n'], ['\n\tbox-sizing: border-box;\n\theight: 30px;\n\tpadding: 4px 6px;\n\tborder-top: 1px solid ', ';\n\t&:first-child {\n\t\tpadding-left: 20px;\n\t}\n\t&:last-child {\n\t\ttext-align: right;\n\t\tpadding-right: 15px;\n\t}\n']),
    _templateObject10 = (0, _taggedTemplateLiteral3.default)(['\n\tfont-weight: bold;\n\tcolor: ', ';\n'], ['\n\tfont-weight: bold;\n\tcolor: ', ';\n']),
    _templateObject11 = (0, _taggedTemplateLiteral3.default)(['\n\t&:link, &:visited {\n\t\ttext-decoration: none;\n\t\tcolor: ', '\n\t}\n'], ['\n\t&:link, &:visited {\n\t\ttext-decoration: none;\n\t\tcolor: ', '\n\t}\n']),
    _templateObject12 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: inline-block;\n\tpadding: 2px 4px;\n\tmargin-top: 1.5px;\n\tmargin-bottom: 1.5px;\n\tborder: 1px solid ', ';\n\tborder-radius: 3px;\n\t&:link, &:visited, &:active {\n\t\ttext-decoration: none;\n\t\tcolor: ', ';\n\t}\n\t&:nth-child(2n) {\n\t\tmargin-left: 3px;\n\t}\n'], ['\n\tdisplay: inline-block;\n\tpadding: 2px 4px;\n\tmargin-top: 1.5px;\n\tmargin-bottom: 1.5px;\n\tborder: 1px solid ', ';\n\tborder-radius: 3px;\n\t&:link, &:visited, &:active {\n\t\ttext-decoration: none;\n\t\tcolor: ', ';\n\t}\n\t&:nth-child(2n) {\n\t\tmargin-left: 3px;\n\t}\n']),
    _templateObject13 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: flex;\n\talign-items: center;\n\theight: 30px;\n\tfont-weight: bold;\n\tcolor: ', ';\n\tpadding: 3px 15px 3px 20px;\n\tbox-sizing: border-box;\n\tborder-top: 1px solid ', ';\n'], ['\n\tdisplay: flex;\n\talign-items: center;\n\theight: 30px;\n\tfont-weight: bold;\n\tcolor: ', ';\n\tpadding: 3px 15px 3px 20px;\n\tbox-sizing: border-box;\n\tborder-top: 1px solid ', ';\n']),
    _templateObject14 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: flex;\n\tcolor: ', ';\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tpadding: 5px 15px 5px 20px;\n\tbox-sizing: border-box;\n\tbackground: ', ';\n'], ['\n\tdisplay: flex;\n\tcolor: ', ';\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tpadding: 5px 15px 5px 20px;\n\tbox-sizing: border-box;\n\tbackground: ', ';\n']),
    _templateObject15 = (0, _taggedTemplateLiteral3.default)(['\n\twidth: 100%;\n'], ['\n\twidth: 100%;\n']),
    _templateObject16 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\t&::after {\n\t\tposition: absolute;\n\t\tright: 0;\n\t\ttop: 50%;\n\t\tz-index: 1;\n\t\tcontent: \'\u25BC\';\n\t\tfont-size: 0.8em;\n\t\tcolor: ', ';\n\t\ttransform: translateY(-50%);\n\t}\n'], ['\n\tposition: relative;\n\t&::after {\n\t\tposition: absolute;\n\t\tright: 0;\n\t\ttop: 50%;\n\t\tz-index: 1;\n\t\tcontent: \'\u25BC\';\n\t\tfont-size: 0.8em;\n\t\tcolor: ', ';\n\t\ttransform: translateY(-50%);\n\t}\n']),
    _templateObject17 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\tz-index: 2;\n\tappearance: none;\n\tcolor: ', ';\n\tbackground: transparent;\n\tfont-size: 16px;\n\tborder: none;\n\tborder-radius: none;\n\tpadding-right: 20px;\n\t&:focus {\n\t\toutline: none;\n\t}\n'], ['\n\tposition: relative;\n\tz-index: 2;\n\tappearance: none;\n\tcolor: ', ';\n\tbackground: transparent;\n\tfont-size: 16px;\n\tborder: none;\n\tborder-radius: none;\n\tpadding-right: 20px;\n\t&:focus {\n\t\toutline: none;\n\t}\n']),
    _templateObject18 = (0, _taggedTemplateLiteral3.default)(['\n\tfont-size: .8em;\n\ttransform: ', ';\n'], ['\n\tfont-size: .8em;\n\ttransform: ', ';\n']),
    _templateObject19 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\ttext-decoration: none;\n'], ['\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\ttext-decoration: none;\n']),
    _templateObject20 = (0, _taggedTemplateLiteral3.default)(['\n\tdisplay: block;\n\tcolor: ', ';\n\ttext-decoration: none;\n\tpadding: 3px 0;\n'], ['\n\tdisplay: block;\n\tcolor: ', ';\n\ttext-decoration: none;\n\tpadding: 3px 0;\n']),
    _templateObject21 = (0, _taggedTemplateLiteral3.default)(['\n\tposition: relative;\n\tz-index: 1;\n\tflex: 1 1 auto;\n\tmin-height: 30px;\n'], ['\n\tposition: relative;\n\tz-index: 1;\n\tflex: 1 1 auto;\n\tmin-height: 30px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semver = require('semver');

var _semver2 = _interopRequireDefault(_semver);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactAddonsTextContent = require('react-addons-text-content');

var _reactAddonsTextContent2 = _interopRequireDefault(_reactAddonsTextContent);

var _code = require('./common/code');

var _code2 = _interopRequireDefault(_code);

var _flag = require('./flag');

var _flag2 = _interopRequireDefault(_flag);

var _icon = require('./common/icon');

var _icon2 = _interopRequireDefault(_icon);

var _link = require('./common/link');

var _link2 = _interopRequireDefault(_link);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = InfoPane;
exports.InnerInfoPane = InnerInfoPane;


var BORDER_RADIUS = 10;

var StyledInfoPane = _styledComponents2.default.div(_templateObject, function (props) {
	return props.hermit ? BORDER_RADIUS + 'px' : BORDER_RADIUS + 'px 0 0 ' + BORDER_RADIUS + 'px';
}, function (props) {
	return props.theme.border;
}, function (props) {
	return props.hermit ? 0 : 1;
}, function (props) {
	return props.theme.tint;
});

var StyledInnerPane = _styledComponents2.default.div(_templateObject2, function (props) {
	return props.theme.tint;
});

var StyledName = _styledComponents2.default.div(_templateObject3);

var StyledToolbar = _styledComponents2.default.div(_templateObject4);

var StyledDisplayName = (0, _styledComponents2.default)(_text2.default)(_templateObject5, function (props) {
	return props.theme.color;
});

var StyledId = (0, _styledComponents2.default)(_text2.default)(_templateObject6, function (props) {
	return props.theme.recess;
});

var StyledIcon = (0, _styledComponents2.default)(_icon2.default)(_templateObject7, function (props) {
	return props.theme.color;
});

var StyledData = _styledComponents2.default.table(_templateObject8);

var StyledDataCell = _styledComponents2.default.td(_templateObject9, function (props) {
	return props.theme.border;
});

var StyledKey = (0, _styledComponents2.default)(_text2.default)(_templateObject10, function (props) {
	return props.theme.color;
});

var SearchTrigger = function (_React$Component) {
	(0, _inherits3.default)(SearchTrigger, _React$Component);

	function SearchTrigger() {
		var _ref;

		(0, _classCallCheck3.default)(this, SearchTrigger);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = SearchTrigger.__proto__ || (0, _getPrototypeOf2.default)(SearchTrigger)).call.apply(_ref, [this].concat(args)));

		_this.handleClick = _this.handleClick.bind(_this);
		return _this;
	}

	(0, _createClass3.default)(SearchTrigger, [{
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
			var props = this.props;

			return _react2.default.createElement(
				_link2.default,
				{
					className: props.className,
					onClick: this.handleClick,
					query: { 'search-enabled': true, 'search': props.field + '=' + props.search },
					title: 'Search other patterns with ' + props.field + ' "' + props.search + '"'
				},
				props.children
			);
		}
	}]);
	return SearchTrigger;
}(_react2.default.Component);

SearchTrigger.propTypes = {
	children: _react.PropTypes.any,
	className: _react.PropTypes.string.isRequired,
	field: _react.PropTypes.string.isRequired,
	onClick: _react.PropTypes.func,
	search: _react.PropTypes.string.isRequired,
	title: _react.PropTypes.string.isRequired
};

var StyledVersion = (0, _styledComponents2.default)(Version)(_templateObject11, function (props) {
	var v = (0, _reactAddonsTextContent2.default)(props.children);
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

var StyledTag = (0, _styledComponents2.default)(Tag)(_templateObject12, function (props) {
	return props.theme.color;
}, function (props) {
	return props.theme.color;
});

var StyledToggleHead = (0, _styledComponents2.default)(ToggleHead)(_templateObject13, function (props) {
	return props.theme.color;
}, function (props) {
	return props.theme.border;
});

var StyledToggleBody = _styledComponents2.default.div(_templateObject14, function (props) {
	return props.theme.color;
}, function (props) {
	return props.theme.tint;
});

var StyledCode = (0, _styledComponents2.default)(_code2.default)(_templateObject15);

function InfoPane(props) {
	var className = props.className,
	    rest = (0, _objectWithoutProperties3.default)(props, ['className']);


	return _react2.default.createElement(
		StyledInfoPane,
		{ className: className, hermit: props.hermit },
		_react2.default.createElement(InnerInfoPane, (0, _extends3.default)({}, rest, { standalone: true }))
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
						props.tags.map(function (t) {
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
							props.envs.map(function (e) {
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
						_react2.default.createElement('input', { type: 'checkbox', checked: props.mount, onChange: props.onMountChange })
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
				props.dependencies.map(function (d) {
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
				props.dependents.map(function (d) {
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
				props.demoDependencies.map(function (d) {
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
				props.demoDependents.map(function (d) {
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

InnerInfoPane.propTypes = {
	className: _react.PropTypes.string,
	demoDependents: _react.PropTypes.array.isRequired,
	demoDependentsEnabled: _react.PropTypes.bool.isRequired,
	demoDependencies: _react.PropTypes.array.isRequired,
	demoDependenciesEnabled: _react.PropTypes.bool.isRequired,
	dependents: _react.PropTypes.array.isRequired,
	dependentsEnabled: _react.PropTypes.bool.isRequired,
	dependencies: _react.PropTypes.array.isRequired,
	dependenciesEnabled: _react.PropTypes.bool.isRequired,
	flag: _react.PropTypes.string.isRequired,
	icon: _react.PropTypes.string.isRequired,
	id: _react.PropTypes.string.isRequired,
	manifest: _react.PropTypes.string.isRequired,
	manifestEnabled: _react.PropTypes.bool.isRequired,
	name: _react.PropTypes.string.isRequired,
	standalone: _react.PropTypes.bool.isRequired,
	style: _react.PropTypes.string,
	tags: _react.PropTypes.array.isRequired,
	version: _react.PropTypes.string.isRequired
};

var StyledSelectContainer = _styledComponents2.default.div(_templateObject16, function (props) {
	return props.theme.color;
});

var StyledSelect = _styledComponents2.default.select(_templateObject17, function (props) {
	return props.theme.color;
});

function Select(props) {
	return _react2.default.createElement(
		StyledSelectContainer,
		{ className: props.className },
		_react2.default.createElement(
			StyledSelect,
			{
				onChange: props.onChange,
				value: props.value
			},
			props.children
		)
	);
}

function Version(props) {
	return _react2.default.createElement(
		SearchTrigger,
		{ className: props.className, search: props.search, field: 'version' },
		_react2.default.createElement(
			_text2.default,
			null,
			props.search
		)
	);
}

Version.propTypes = {
	className: _react.PropTypes.string.isRequired,
	search: _react.PropTypes.string.isRequired,
	children: _react.PropTypes.string.isRequired
};

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

Tag.propTypes = {
	className: _react.PropTypes.string.isRequired,
	tag: _react.PropTypes.string.isRequired
};

var StyledArrow = (0, _styledComponents2.default)(_text2.default)(_templateObject18, function (props) {
	return props.rotated ? 'rotate(0deg)' : 'rotate(90deg)';
});

var StyledHead = (0, _styledComponents2.default)(_link2.default)(_templateObject19);

function ToggleHead(props) {
	return _react2.default.createElement(
		StyledHead,
		{ query: (0, _defineProperty3.default)({}, props.name + '-enabled', !props.enabled), className: props.className },
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

ToggleHead.propTypes = {
	name: _react.PropTypes.string.isRequired,
	enabled: _react.PropTypes.string.isRequired,
	className: _react.PropTypes.string.isRequired,
	children: _react.PropTypes.string.isRequired
};

var StyledPatternList = _styledComponents2.default.div(_templateObject15);

function PatternList(props) {
	return _react2.default.createElement(
		StyledPatternList,
		null,
		props.children
	);
}

PatternList.propTypes = {
	children: _react.PropTypes.any
};

var StyledPatternItem = (0, _styledComponents2.default)(_link2.default)(_templateObject20, function (props) {
	return props.theme.color;
});

function PatternItem(props) {
	return _react2.default.createElement(
		StyledPatternItem,
		{ href: 'pattern/' + props.pattern.id, 'data-id': props.pattern.id },
		_react2.default.createElement(
			_text2.default,
			null,
			props.pattern.manifest.displayName
		)
	);
}

PatternItem.propTypes = {
	pattern: _react.PropTypes.any
};

var StyledToggle = _styledComponents2.default.div(_templateObject21);

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

Toggle.propTypes = {
	children: _react.PropTypes.any,
	enabled: _react.PropTypes.bool,
	head: _react.PropTypes.any,
	name: _react.PropTypes.string
};

function has(val) {
	return Array.isArray(val) && val.length > 0;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NvdXJjZS9hcHBsaWNhdGlvbi9jb21wb25lbnRzL2luZm8tcGFuZS5qcyJdLCJuYW1lcyI6WyJJbmZvUGFuZSIsIklubmVySW5mb1BhbmUiLCJCT1JERVJfUkFESVVTIiwiU3R5bGVkSW5mb1BhbmUiLCJkaXYiLCJwcm9wcyIsImhlcm1pdCIsInRoZW1lIiwiYm9yZGVyIiwidGludCIsIlN0eWxlZElubmVyUGFuZSIsIlN0eWxlZE5hbWUiLCJTdHlsZWRUb29sYmFyIiwiU3R5bGVkRGlzcGxheU5hbWUiLCJjb2xvciIsIlN0eWxlZElkIiwicmVjZXNzIiwiU3R5bGVkSWNvbiIsIlN0eWxlZERhdGEiLCJ0YWJsZSIsIlN0eWxlZERhdGFDZWxsIiwidGQiLCJTdHlsZWRLZXkiLCJTZWFyY2hUcmlnZ2VyIiwiYXJncyIsImhhbmRsZUNsaWNrIiwiYmluZCIsImUiLCJocmVmIiwicHJldmVudERlZmF1bHQiLCJzdG9wUHJvcGFnYXRpb24iLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiZmllbGQiLCJzZWFyY2giLCJjaGlsZHJlbiIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsImFueSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwidGl0bGUiLCJTdHlsZWRWZXJzaW9uIiwiVmVyc2lvbiIsInYiLCJ2YWxpZCIsImVycm9yIiwic2F0aXNmaWVzIiwic3VjY2VzcyIsIlN0eWxlZFRhZyIsIlRhZyIsIlN0eWxlZFRvZ2dsZUhlYWQiLCJUb2dnbGVIZWFkIiwiU3R5bGVkVG9nZ2xlQm9keSIsIlN0eWxlZENvZGUiLCJyZXN0Iiwic3RhbmRhbG9uZSIsImljb24iLCJuYW1lIiwiaWQiLCJ2ZXJzaW9uIiwiZmxhZyIsImhhcyIsInRhZ3MiLCJtYXAiLCJ0IiwiZW52cyIsImxlbmd0aCIsIm9uRW52Q2hhbmdlIiwiZW52IiwiZGlzcGxheU5hbWUiLCJtb3VudCIsIm9uTW91bnRDaGFuZ2UiLCJkZXBlbmRlbmNpZXMiLCJkZXBlbmRlbmNpZXNFbmFibGVkIiwiZCIsImRlcGVuZGVudHMiLCJkZXBlbmRlbnRzRW5hYmxlZCIsImRlbW9EZXBlbmRlbmNpZXMiLCJkZW1vRGVwZW5kZW5jaWVzRW5hYmxlZCIsImRlbW9EZXBlbmRlbnRzIiwiZGVtb0RlcGVuZGVudHNFbmFibGVkIiwibWFuaWZlc3RFbmFibGVkIiwibWFuaWZlc3QiLCJhcnJheSIsImJvb2wiLCJzdHlsZSIsIlN0eWxlZFNlbGVjdENvbnRhaW5lciIsIlN0eWxlZFNlbGVjdCIsInNlbGVjdCIsIlNlbGVjdCIsIm9uQ2hhbmdlIiwidmFsdWUiLCJ0YWciLCJTdHlsZWRBcnJvdyIsInJvdGF0ZWQiLCJTdHlsZWRIZWFkIiwiZW5hYmxlZCIsIlN0eWxlZFBhdHRlcm5MaXN0IiwiUGF0dGVybkxpc3QiLCJTdHlsZWRQYXR0ZXJuSXRlbSIsIlBhdHRlcm5JdGVtIiwicGF0dGVybiIsIlN0eWxlZFRvZ2dsZSIsIlRvZ2dsZSIsImhlYWQiLCJ2YWwiLCJBcnJheSIsImlzQXJyYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7a0JBRWVBLFE7UUFDUEMsYSxHQUFBQSxhOzs7QUFFUixJQUFNQyxnQkFBZ0IsRUFBdEI7O0FBRUEsSUFBTUMsaUJBQWlCLDJCQUFPQyxHQUF4QixrQkFNWTtBQUFBLFFBQVNDLE1BQU1DLE1BQU4sR0FBa0JKLGFBQWxCLFVBQXlDQSxhQUF6QyxlQUFnRUEsYUFBaEUsT0FBVDtBQUFBLENBTlosRUFPcUI7QUFBQSxRQUFTRyxNQUFNRSxLQUFOLENBQVlDLE1BQXJCO0FBQUEsQ0FQckIsRUFRaUI7QUFBQSxRQUFTSCxNQUFNQyxNQUFOLEdBQWUsQ0FBZixHQUFtQixDQUE1QjtBQUFBLENBUmpCLEVBV1M7QUFBQSxRQUFTRCxNQUFNRSxLQUFOLENBQVlFLElBQXJCO0FBQUEsQ0FYVCxDQUFOOztBQWNBLElBQU1DLGtCQUFrQiwyQkFBT04sR0FBekIsbUJBR1M7QUFBQSxRQUFTQyxNQUFNRSxLQUFOLENBQVlFLElBQXJCO0FBQUEsQ0FIVCxDQUFOOztBQU1BLElBQU1FLGFBQWEsMkJBQU9QLEdBQXBCLGtCQUFOOztBQVVBLElBQU1RLGdCQUFnQiwyQkFBT1IsR0FBdkIsa0JBQU47O0FBUUEsSUFBTVMsb0JBQW9CLCtDQUFwQixtQkFFSTtBQUFBLFFBQVNSLE1BQU1FLEtBQU4sQ0FBWU8sS0FBckI7QUFBQSxDQUZKLENBQU47O0FBTUEsSUFBTUMsV0FBVywrQ0FBWCxtQkFFSTtBQUFBLFFBQVNWLE1BQU1FLEtBQU4sQ0FBWVMsTUFBckI7QUFBQSxDQUZKLENBQU47O0FBU0EsSUFBTUMsYUFBYSwrQ0FBYixtQkFFRztBQUFBLFFBQVNaLE1BQU1FLEtBQU4sQ0FBWU8sS0FBckI7QUFBQSxDQUZILENBQU47O0FBTUEsSUFBTUksYUFBYSwyQkFBT0MsS0FBcEIsa0JBQU47O0FBU0EsSUFBTUMsaUJBQWlCLDJCQUFPQyxFQUF4QixtQkFJbUI7QUFBQSxRQUFTaEIsTUFBTUUsS0FBTixDQUFZQyxNQUFyQjtBQUFBLENBSm5CLENBQU47O0FBY0EsSUFBTWMsWUFBWSwrQ0FBWixvQkFFSTtBQUFBLFFBQVNqQixNQUFNRSxLQUFOLENBQVlPLEtBQXJCO0FBQUEsQ0FGSixDQUFOOztJQUtNUyxhOzs7QUFDTCwwQkFBcUI7QUFBQTs7QUFBQTs7QUFBQSxvQ0FBTkMsSUFBTTtBQUFOQSxPQUFNO0FBQUE7O0FBQUEsNktBQ1hBLElBRFc7O0FBRXBCLFFBQUtDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQkMsSUFBakIsT0FBbkI7QUFGb0I7QUFHcEI7Ozs7OEJBRVdDLEMsRUFBR0MsSSxFQUFNO0FBQ3BCRCxLQUFFRSxjQUFGO0FBQ0FGLEtBQUVHLGVBQUY7O0FBRUEsT0FBSSxPQUFPLEtBQUt6QixLQUFMLENBQVcwQixPQUFsQixLQUE4QixVQUFsQyxFQUE4QztBQUM3QyxTQUFLMUIsS0FBTCxDQUFXMEIsT0FBWCxDQUFtQkosQ0FBbkIsRUFBc0JDLElBQXRCO0FBQ0E7QUFDRDs7OzJCQUVRO0FBQUEsT0FDRHZCLEtBREMsR0FDUSxJQURSLENBQ0RBLEtBREM7O0FBRVIsVUFDQztBQUFBO0FBQUE7QUFDQyxnQkFBV0EsTUFBTTJCLFNBRGxCO0FBRUMsY0FBUyxLQUFLUCxXQUZmO0FBR0MsWUFBTyxFQUFDLGtCQUFrQixJQUFuQixFQUF5QixVQUFhcEIsTUFBTTRCLEtBQW5CLFNBQTRCNUIsTUFBTTZCLE1BQTNELEVBSFI7QUFJQyw0Q0FBcUM3QixNQUFNNEIsS0FBM0MsVUFBcUQ1QixNQUFNNkIsTUFBM0Q7QUFKRDtBQU1FN0IsVUFBTThCO0FBTlIsSUFERDtBQVVBOzs7RUEzQjBCLGdCQUFNQyxTOztBQThCbENiLGNBQWNjLFNBQWQsR0FBMEI7QUFDekJGLFdBQVUsaUJBQUVHLEdBRGE7QUFFekJOLFlBQVcsaUJBQUVPLE1BQUYsQ0FBU0MsVUFGSztBQUd6QlAsUUFBTyxpQkFBRU0sTUFBRixDQUFTQyxVQUhTO0FBSXpCVCxVQUFTLGlCQUFFVSxJQUpjO0FBS3pCUCxTQUFRLGlCQUFFSyxNQUFGLENBQVNDLFVBTFE7QUFNekJFLFFBQU8saUJBQUVILE1BQUYsQ0FBU0M7QUFOUyxDQUExQjs7QUFTQSxJQUFNRyxnQkFBZ0IsZ0NBQU9DLE9BQVAsQ0FBaEIsb0JBR0ssaUJBQVM7QUFDakIsS0FBTUMsSUFBSSxzQ0FBS3hDLE1BQU04QixRQUFYLENBQVY7QUFDQSxLQUFJLENBQUMsaUJBQU9XLEtBQVAsQ0FBYUQsQ0FBYixDQUFMLEVBQXNCO0FBQ3JCLFNBQU94QyxNQUFNRSxLQUFOLENBQVl3QyxLQUFuQjtBQUNBO0FBQ0QsS0FBSSxpQkFBT0MsU0FBUCxDQUFpQkgsQ0FBakIsRUFBb0IsT0FBcEIsQ0FBSixFQUFrQztBQUNqQyxTQUFPeEMsTUFBTUUsS0FBTixDQUFZd0MsS0FBbkI7QUFDQTtBQUNELEtBQUksaUJBQU9DLFNBQVAsQ0FBaUJILENBQWpCLEVBQW9CLFdBQXBCLENBQUosRUFBc0M7QUFDckMsU0FBT3hDLE1BQU1FLEtBQU4sQ0FBWU8sS0FBbkI7QUFDQTtBQUNELFFBQU9ULE1BQU1FLEtBQU4sQ0FBWTBDLE9BQW5CO0FBQ0EsQ0FmRyxDQUFOOztBQW1CQSxJQUFNQyxZQUFZLGdDQUFPQyxHQUFQLENBQVosb0JBS2U7QUFBQSxRQUFTOUMsTUFBTUUsS0FBTixDQUFZTyxLQUFyQjtBQUFBLENBTGYsRUFTSztBQUFBLFFBQVNULE1BQU1FLEtBQU4sQ0FBWU8sS0FBckI7QUFBQSxDQVRMLENBQU47O0FBZ0JBLElBQU1zQyxtQkFBbUIsZ0NBQU9DLFVBQVAsQ0FBbkIsb0JBS0k7QUFBQSxRQUFTaEQsTUFBTUUsS0FBTixDQUFZTyxLQUFyQjtBQUFBLENBTEosRUFRbUI7QUFBQSxRQUFTVCxNQUFNRSxLQUFOLENBQVlDLE1BQXJCO0FBQUEsQ0FSbkIsQ0FBTjs7QUFXQSxJQUFNOEMsbUJBQW1CLDJCQUFPbEQsR0FBMUIsb0JBRUk7QUFBQSxRQUFTQyxNQUFNRSxLQUFOLENBQVlPLEtBQXJCO0FBQUEsQ0FGSixFQU9TO0FBQUEsUUFBU1QsTUFBTUUsS0FBTixDQUFZRSxJQUFyQjtBQUFBLENBUFQsQ0FBTjs7QUFVQSxJQUFNOEMsYUFBYSwrQ0FBYixtQkFBTjs7QUFJQSxTQUFTdkQsUUFBVCxDQUFrQkssS0FBbEIsRUFBeUI7QUFBQSxLQUNqQjJCLFNBRGlCLEdBQ0szQixLQURMLENBQ2pCMkIsU0FEaUI7QUFBQSxLQUNId0IsSUFERywwQ0FDS25ELEtBREw7OztBQUd4QixRQUNDO0FBQUMsZ0JBQUQ7QUFBQSxJQUFnQixXQUFXMkIsU0FBM0IsRUFBc0MsUUFBUTNCLE1BQU1DLE1BQXBEO0FBQ0MsZ0NBQUMsYUFBRCw2QkFBbUJrRCxJQUFuQixJQUF5QixnQkFBekI7QUFERCxFQUREO0FBS0E7O0FBRUQsU0FBU3ZELGFBQVQsQ0FBdUJJLEtBQXZCLEVBQThCO0FBQzdCLFFBQ0M7QUFBQyxpQkFBRDtBQUFBLElBQWlCLFlBQVlBLE1BQU1vRCxVQUFuQyxFQUErQyxXQUFXcEQsTUFBTTJCLFNBQWhFO0FBQ0M7QUFBQyxhQUFEO0FBQUE7QUFDQyxpQ0FBQyxVQUFELElBQVksUUFBUTNCLE1BQU1xRCxJQUExQixHQUREO0FBRUM7QUFBQyxxQkFBRDtBQUFBO0FBQW9CckQsVUFBTXNEO0FBQTFCLElBRkQ7QUFHQztBQUFDLFlBQUQ7QUFBQTtBQUFXdEQsVUFBTXVEO0FBQWpCO0FBSEQsR0FERDtBQU1FdkQsUUFBTThCLFFBQU4sSUFDQTtBQUFDLGdCQUFEO0FBQUE7QUFDRTlCLFNBQU04QjtBQURSLEdBUEY7QUFXQztBQUFDLGFBQUQ7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUE7QUFBQTtBQUNDO0FBQUMsb0JBQUQ7QUFBQTtBQUNDO0FBQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFERCxNQUREO0FBSUM7QUFBQyxvQkFBRDtBQUFBO0FBQ0M7QUFBQyxvQkFBRDtBQUFBLFNBQWUsT0FBTSxTQUFyQixFQUErQixRQUFROUIsTUFBTXdELE9BQTdDO0FBQ0V4RCxhQUFNd0Q7QUFEUjtBQUREO0FBSkQsS0FERDtBQVdDO0FBQUE7QUFBQTtBQUNDO0FBQUMsb0JBQUQ7QUFBQTtBQUNDO0FBQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFERCxNQUREO0FBSUM7QUFBQyxvQkFBRDtBQUFBO0FBQ0M7QUFBQyxvQkFBRDtBQUFBLFNBQWUsT0FBTSxNQUFyQixFQUE0QixRQUFReEQsTUFBTXlELElBQTFDO0FBQ0M7QUFBQTtBQUFBO0FBQU96RCxjQUFNeUQ7QUFBYjtBQUREO0FBREQ7QUFKRCxLQVhEO0FBc0JFQyxRQUFJMUQsTUFBTTJELElBQVYsS0FDQztBQUFBO0FBQUE7QUFDQztBQUFDLG9CQUFEO0FBQUE7QUFDQztBQUFDLGdCQUFEO0FBQUE7QUFBQTtBQUFBO0FBREQsTUFERDtBQUlDO0FBQUMsb0JBQUQ7QUFBQTtBQUNFM0QsWUFBTTJELElBQU4sQ0FBV0MsR0FBWCxDQUFlO0FBQUEsY0FBSyw4QkFBQyxTQUFELElBQVcsS0FBS0MsQ0FBaEIsRUFBbUIsS0FBS0EsQ0FBeEIsR0FBTDtBQUFBLE9BQWY7QUFERjtBQUpELEtBdkJIO0FBaUNFSCxRQUFJMUQsTUFBTThELElBQVYsS0FBbUI5RCxNQUFNOEQsSUFBTixDQUFXQyxNQUFYLEdBQW9CLENBQXZDLElBQ0M7QUFBQTtBQUFBO0FBQ0M7QUFBQyxvQkFBRDtBQUFBO0FBQ0M7QUFBQyxnQkFBRDtBQUFBO0FBQUE7QUFBQTtBQURELE1BREQ7QUFJQztBQUFDLG9CQUFEO0FBQUE7QUFDQztBQUFDLGFBQUQ7QUFBQTtBQUNDLGNBQUssYUFETjtBQUVDLGtCQUFVL0QsTUFBTWdFLFdBRmpCO0FBR0MsZUFBT2hFLE1BQU1pRSxHQUFOLENBQVVYO0FBSGxCO0FBTUV0RCxhQUFNOEQsSUFBTixDQUFXRixHQUFYLENBQWU7QUFBQSxlQUFNO0FBQUE7QUFBQSxXQUFRLEtBQUt0QyxFQUFFZ0MsSUFBZixFQUFxQixPQUFPaEMsRUFBRWdDLElBQTlCO0FBQXFDaEMsV0FBRTRDO0FBQXZDLFNBQU47QUFBQSxRQUFmO0FBTkY7QUFERDtBQUpELEtBbENIO0FBb0RFO0FBQUE7QUFBQTtBQUNDO0FBQUMsb0JBQUQ7QUFBQTtBQUNDO0FBQUMsZ0JBQUQ7QUFBQTtBQUFBO0FBQUE7QUFERCxNQUREO0FBSUM7QUFBQyxvQkFBRDtBQUFBO0FBQ0MsK0NBQU8sTUFBSyxVQUFaLEVBQXVCLFNBQVNsRSxNQUFNbUUsS0FBdEMsRUFBNkMsVUFBVW5FLE1BQU1vRSxhQUE3RDtBQUREO0FBSkQ7QUFwREY7QUFERCxHQVhEO0FBNEVFVixNQUFJMUQsTUFBTXFFLFlBQVYsS0FDQztBQUFDLFNBQUQ7QUFBQTtBQUNDLDZCQUF1QnJFLE1BQU1xRSxZQUFOLENBQW1CTixNQUExQyxNQUREO0FBRUMsYUFBUy9ELE1BQU1zRSxtQkFGaEI7QUFHQyxVQUFLO0FBSE47QUFLQztBQUFDLGVBQUQ7QUFBQTtBQUNFdEUsVUFBTXFFLFlBQU4sQ0FBbUJULEdBQW5CLENBQXVCO0FBQUEsWUFBSyw4QkFBQyxXQUFELElBQWEsS0FBS1csRUFBRWhCLEVBQXBCLEVBQXdCLFNBQVNnQixDQUFqQyxHQUFMO0FBQUEsS0FBdkI7QUFERjtBQUxELEdBN0VIO0FBd0ZFYixNQUFJMUQsTUFBTXdFLFVBQVYsS0FDQztBQUFDLFNBQUQ7QUFBQTtBQUNDLDJCQUFxQnhFLE1BQU13RSxVQUFOLENBQWlCVCxNQUF0QyxNQUREO0FBRUMsYUFBUy9ELE1BQU15RSxpQkFGaEI7QUFHQyxVQUFLO0FBSE47QUFLQztBQUFDLGVBQUQ7QUFBQTtBQUNFekUsVUFBTXdFLFVBQU4sQ0FBaUJaLEdBQWpCLENBQXFCO0FBQUEsWUFBSyw4QkFBQyxXQUFELElBQWEsS0FBS1csRUFBRWhCLEVBQXBCLEVBQXdCLFNBQVNnQixDQUFqQyxHQUFMO0FBQUEsS0FBckI7QUFERjtBQUxELEdBekZIO0FBb0dFYixNQUFJMUQsTUFBTTBFLGdCQUFWLEtBQ0M7QUFBQyxTQUFEO0FBQUE7QUFDQyxrQ0FBNEIxRSxNQUFNMEUsZ0JBQU4sQ0FBdUJYLE1BQW5ELE1BREQ7QUFFQyxhQUFTL0QsTUFBTTJFLHVCQUZoQjtBQUdDLFVBQUs7QUFITjtBQUtDO0FBQUMsZUFBRDtBQUFBO0FBQ0UzRSxVQUFNMEUsZ0JBQU4sQ0FBdUJkLEdBQXZCLENBQTJCO0FBQUEsWUFBSyw4QkFBQyxXQUFELElBQWEsS0FBS1csRUFBRWhCLEVBQXBCLEVBQXdCLFNBQVNnQixDQUFqQyxHQUFMO0FBQUEsS0FBM0I7QUFERjtBQUxELEdBckdIO0FBZ0hFYixNQUFJMUQsTUFBTTRFLGNBQVYsS0FDQztBQUFDLFNBQUQ7QUFBQTtBQUNDLGdDQUEwQjVFLE1BQU00RSxjQUFOLENBQXFCYixNQUEvQyxNQUREO0FBRUMsYUFBUy9ELE1BQU02RSxxQkFGaEI7QUFHQyxVQUFLO0FBSE47QUFLQztBQUFDLGVBQUQ7QUFBQTtBQUNFN0UsVUFBTTRFLGNBQU4sQ0FBcUJoQixHQUFyQixDQUF5QjtBQUFBLFlBQUssOEJBQUMsV0FBRCxJQUFhLEtBQUtXLEVBQUVoQixFQUFwQixFQUF3QixTQUFTZ0IsQ0FBakMsR0FBTDtBQUFBLEtBQXpCO0FBREY7QUFMRCxHQWpISDtBQTJIQztBQUFDLFNBQUQ7QUFBQSxLQUFRLE1BQUssVUFBYixFQUF3QixTQUFTdkUsTUFBTThFLGVBQXZDLEVBQXdELE1BQUssVUFBN0Q7QUFDQztBQUFDLGNBQUQ7QUFBQSxNQUFZLFdBQVosRUFBa0IsVUFBUyxNQUEzQjtBQUFtQzlFLFVBQU0rRTtBQUF6QztBQUREO0FBM0hELEVBREQ7QUFpSUE7O0FBRURuRixjQUFjb0MsU0FBZCxHQUEwQjtBQUN6QkwsWUFBVyxpQkFBRU8sTUFEWTtBQUV6QjBDLGlCQUFnQixpQkFBRUksS0FBRixDQUFRN0MsVUFGQztBQUd6QjBDLHdCQUF1QixpQkFBRUksSUFBRixDQUFPOUMsVUFITDtBQUl6QnVDLG1CQUFrQixpQkFBRU0sS0FBRixDQUFRN0MsVUFKRDtBQUt6QndDLDBCQUF5QixpQkFBRU0sSUFBRixDQUFPOUMsVUFMUDtBQU16QnFDLGFBQVksaUJBQUVRLEtBQUYsQ0FBUTdDLFVBTks7QUFPekJzQyxvQkFBbUIsaUJBQUVRLElBQUYsQ0FBTzlDLFVBUEQ7QUFRekJrQyxlQUFjLGlCQUFFVyxLQUFGLENBQVE3QyxVQVJHO0FBU3pCbUMsc0JBQXFCLGlCQUFFVyxJQUFGLENBQU85QyxVQVRIO0FBVXpCc0IsT0FBTSxpQkFBRXZCLE1BQUYsQ0FBU0MsVUFWVTtBQVd6QmtCLE9BQU0saUJBQUVuQixNQUFGLENBQVNDLFVBWFU7QUFZekJvQixLQUFJLGlCQUFFckIsTUFBRixDQUFTQyxVQVpZO0FBYXpCNEMsV0FBVSxpQkFBRTdDLE1BQUYsQ0FBU0MsVUFiTTtBQWN6QjJDLGtCQUFpQixpQkFBRUcsSUFBRixDQUFPOUMsVUFkQztBQWV6Qm1CLE9BQU0saUJBQUVwQixNQUFGLENBQVNDLFVBZlU7QUFnQnpCaUIsYUFBWSxpQkFBRTZCLElBQUYsQ0FBTzlDLFVBaEJNO0FBaUJ6QitDLFFBQU8saUJBQUVoRCxNQWpCZ0I7QUFrQnpCeUIsT0FBTSxpQkFBRXFCLEtBQUYsQ0FBUTdDLFVBbEJXO0FBbUJ6QnFCLFVBQVMsaUJBQUV0QixNQUFGLENBQVNDO0FBbkJPLENBQTFCOztBQXNCQSxJQUFNZ0Qsd0JBQXdCLDJCQUFPcEYsR0FBL0Isb0JBU0s7QUFBQSxRQUFTQyxNQUFNRSxLQUFOLENBQVlPLEtBQXJCO0FBQUEsQ0FUTCxDQUFOOztBQWNBLElBQU0yRSxlQUFlLDJCQUFPQyxNQUF0QixvQkFJSTtBQUFBLFFBQVNyRixNQUFNRSxLQUFOLENBQVlPLEtBQXJCO0FBQUEsQ0FKSixDQUFOOztBQWVBLFNBQVM2RSxNQUFULENBQWdCdEYsS0FBaEIsRUFBdUI7QUFDdEIsUUFDQztBQUFDLHVCQUFEO0FBQUEsSUFBdUIsV0FBV0EsTUFBTTJCLFNBQXhDO0FBQ0M7QUFBQyxlQUFEO0FBQUE7QUFDQyxjQUFVM0IsTUFBTXVGLFFBRGpCO0FBRUMsV0FBT3ZGLE1BQU13RjtBQUZkO0FBSUV4RixTQUFNOEI7QUFKUjtBQURELEVBREQ7QUFVQTs7QUFFRCxTQUFTUyxPQUFULENBQWlCdkMsS0FBakIsRUFBd0I7QUFDdkIsUUFDQztBQUFDLGVBQUQ7QUFBQSxJQUFlLFdBQVdBLE1BQU0yQixTQUFoQyxFQUEyQyxRQUFRM0IsTUFBTTZCLE1BQXpELEVBQWlFLE9BQU0sU0FBdkU7QUFDQztBQUFBO0FBQUE7QUFBTzdCLFNBQU02QjtBQUFiO0FBREQsRUFERDtBQUtBOztBQUVEVSxRQUFRUCxTQUFSLEdBQW9CO0FBQ25CTCxZQUFXLGlCQUFFTyxNQUFGLENBQVNDLFVBREQ7QUFFbkJOLFNBQVEsaUJBQUVLLE1BQUYsQ0FBU0MsVUFGRTtBQUduQkwsV0FBVSxpQkFBRUksTUFBRixDQUFTQztBQUhBLENBQXBCOztBQU1BLFNBQVNXLEdBQVQsQ0FBYTlDLEtBQWIsRUFBb0I7QUFDbkIsUUFDQztBQUFDLGVBQUQ7QUFBQSxJQUFlLFdBQVdBLE1BQU0yQixTQUFoQyxFQUEyQyxRQUFRM0IsTUFBTXlGLEdBQXpELEVBQThELE9BQU0sTUFBcEU7QUFDQztBQUFBO0FBQUE7QUFBT3pGLFNBQU15RjtBQUFiO0FBREQsRUFERDtBQUtBOztBQUVEM0MsSUFBSWQsU0FBSixHQUFnQjtBQUNmTCxZQUFXLGlCQUFFTyxNQUFGLENBQVNDLFVBREw7QUFFZnNELE1BQUssaUJBQUV2RCxNQUFGLENBQVNDO0FBRkMsQ0FBaEI7O0FBS0EsSUFBTXVELGNBQWMsK0NBQWQsb0JBRVE7QUFBQSxRQUFTMUYsTUFBTTJGLE9BQU4sbUNBQVQ7QUFBQSxDQUZSLENBQU47O0FBS0EsSUFBTUMsYUFBYSwrQ0FBYixtQkFBTjs7QUFPQSxTQUFTNUMsVUFBVCxDQUFvQmhELEtBQXBCLEVBQTJCO0FBQzFCLFFBQ0M7QUFBQyxZQUFEO0FBQUEsSUFBWSx5Q0FBWUEsTUFBTXNELElBQWxCLGVBQW1DLENBQUN0RCxNQUFNNkYsT0FBMUMsQ0FBWixFQUFnRSxXQUFXN0YsTUFBTTJCLFNBQWpGO0FBQ0M7QUFBQTtBQUFBO0FBQU8zQixTQUFNOEI7QUFBYixHQUREO0FBRUM7QUFBQyxjQUFEO0FBQUEsS0FBYSxTQUFTOUIsTUFBTTZGLE9BQTVCO0FBQUE7QUFBQTtBQUZELEVBREQ7QUFNQTs7QUFFRDdDLFdBQVdoQixTQUFYLEdBQXVCO0FBQ3RCc0IsT0FBTSxpQkFBRXBCLE1BQUYsQ0FBU0MsVUFETztBQUV0QjBELFVBQVMsaUJBQUUzRCxNQUFGLENBQVNDLFVBRkk7QUFHdEJSLFlBQVcsaUJBQUVPLE1BQUYsQ0FBU0MsVUFIRTtBQUl0QkwsV0FBVSxpQkFBRUksTUFBRixDQUFTQztBQUpHLENBQXZCOztBQU9BLElBQU0yRCxvQkFBb0IsMkJBQU8vRixHQUEzQixtQkFBTjs7QUFJQSxTQUFTZ0csV0FBVCxDQUFxQi9GLEtBQXJCLEVBQTRCO0FBQzNCLFFBQ0M7QUFBQyxtQkFBRDtBQUFBO0FBQ0VBLFFBQU04QjtBQURSLEVBREQ7QUFLQTs7QUFFRGlFLFlBQVkvRCxTQUFaLEdBQXdCO0FBQ3ZCRixXQUFVLGlCQUFFRztBQURXLENBQXhCOztBQUlBLElBQU0rRCxvQkFBb0IsK0NBQXBCLG9CQUVJO0FBQUEsUUFBU2hHLE1BQU1FLEtBQU4sQ0FBWU8sS0FBckI7QUFBQSxDQUZKLENBQU47O0FBT0EsU0FBU3dGLFdBQVQsQ0FBcUJqRyxLQUFyQixFQUE0QjtBQUMzQixRQUNDO0FBQUMsbUJBQUQ7QUFBQSxJQUFtQixtQkFBaUJBLE1BQU1rRyxPQUFOLENBQWMzQyxFQUFsRCxFQUF3RCxXQUFTdkQsTUFBTWtHLE9BQU4sQ0FBYzNDLEVBQS9FO0FBQ0M7QUFBQTtBQUFBO0FBQU92RCxTQUFNa0csT0FBTixDQUFjbkIsUUFBZCxDQUF1QmI7QUFBOUI7QUFERCxFQUREO0FBS0E7O0FBRUQrQixZQUFZakUsU0FBWixHQUF3QjtBQUN2QmtFLFVBQVMsaUJBQUVqRTtBQURZLENBQXhCOztBQUlBLElBQU1rRSxlQUFlLDJCQUFPcEcsR0FBdEIsbUJBQU47O0FBT0EsU0FBU3FHLE1BQVQsQ0FBZ0JwRyxLQUFoQixFQUF1QjtBQUN0QixRQUNDO0FBQUMsY0FBRDtBQUFBO0FBQ0M7QUFBQyxtQkFBRDtBQUFBLEtBQWtCLE1BQU1BLE1BQU1zRCxJQUE5QixFQUFvQyxTQUFTdEQsTUFBTTZGLE9BQW5EO0FBQ0U3RixTQUFNcUc7QUFEUixHQUREO0FBSUVyRyxRQUFNNkYsT0FBTixJQUNBO0FBQUMsbUJBQUQ7QUFBQTtBQUNFN0YsU0FBTThCO0FBRFI7QUFMRixFQUREO0FBWUE7O0FBRURzRSxPQUFPcEUsU0FBUCxHQUFtQjtBQUNsQkYsV0FBVSxpQkFBRUcsR0FETTtBQUVsQjRELFVBQVMsaUJBQUVaLElBRk87QUFHbEJvQixPQUFNLGlCQUFFcEUsR0FIVTtBQUlsQnFCLE9BQU0saUJBQUVwQjtBQUpVLENBQW5COztBQU9BLFNBQVN3QixHQUFULENBQWE0QyxHQUFiLEVBQWtCO0FBQ2pCLFFBQU9DLE1BQU1DLE9BQU4sQ0FBY0YsR0FBZCxLQUFzQkEsSUFBSXZDLE1BQUosR0FBYSxDQUExQztBQUNBIiwiZmlsZSI6ImluZm8tcGFuZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge1Byb3BUeXBlcyBhcyB0fSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc2VtdmVyIGZyb20gJ3NlbXZlcic7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCB0ZXh0IGZyb20gJ3JlYWN0LWFkZG9ucy10ZXh0LWNvbnRlbnQnO1xuaW1wb3J0IENvZGUgZnJvbSAnLi9jb21tb24vY29kZSc7XG5pbXBvcnQgRmxhZyBmcm9tICcuL2ZsYWcnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9jb21tb24vaWNvbic7XG5pbXBvcnQgTGluayBmcm9tICcuL2NvbW1vbi9saW5rJztcbmltcG9ydCBUZXh0IGZyb20gJy4vdGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IEluZm9QYW5lO1xuZXhwb3J0IHtJbm5lckluZm9QYW5lfTtcblxuY29uc3QgQk9SREVSX1JBRElVUyA9IDEwO1xuXG5jb25zdCBTdHlsZWRJbmZvUGFuZSA9IHN0eWxlZC5kaXZgXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0d2lkdGg6IDMwMHB4O1xuXHRtaW4taGVpZ2h0OiAzMDBweDtcblx0aGVpZ2h0OiAxMDAlO1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IHByb3BzLmhlcm1pdCA/IGAke0JPUkRFUl9SQURJVVN9cHhgIDogYCR7Qk9SREVSX1JBRElVU31weCAwIDAgJHtCT1JERVJfUkFESVVTfXB4YH07XG5cdGJvcmRlci1yaWdodDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm9yZGVyfTtcblx0Ym9yZGVyLXJpZ2h0LXdpZHRoOiAke3Byb3BzID0+IHByb3BzLmhlcm1pdCA/IDAgOiAxfXB4O1xuXHRvdmVyZmxvdzogc2Nyb2xsO1xuXHRvdmVyZmxvdy14OiBoaWRkZW47XG5cdGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGludH07XG5gO1xuXG5jb25zdCBTdHlsZWRJbm5lclBhbmUgPSBzdHlsZWQuZGl2YFxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHotaW5kZXg6IDE7XG5cdGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGludH07XG5gO1xuXG5jb25zdCBTdHlsZWROYW1lID0gc3R5bGVkLmRpdmBcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAxO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4OiAwIDAgYXV0bztcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0cGFkZGluZzogMTBweCAxNXB4IDAgMTVweDtcbmA7XG5cbmNvbnN0IFN0eWxlZFRvb2xiYXIgPSBzdHlsZWQuZGl2YFxuXHRkaXNwbGF5OiBmbGV4O1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHotaW5kZXg6IDE7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHBhZGRpbmc6IDAgMTVweCAxMHB4IDE1cHg7XG5gO1xuXG5jb25zdCBTdHlsZWREaXNwbGF5TmFtZSA9IHN0eWxlZChUZXh0KWBcblx0ZmxleDogMSAwIGF1dG87XG5cdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9yfTtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuYDtcblxuY29uc3QgU3R5bGVkSWQgPSBzdHlsZWQoVGV4dClgXG5cdGZsZXg6IDAgMSBhdXRvO1xuXHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5yZWNlc3N9O1xuXHR0ZXh0LWFsaWduOiByaWdodDtcblx0d2hpdGUtc3BhY2U6IG5vd3JhcDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0dGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5gO1xuXG5jb25zdCBTdHlsZWRJY29uID0gc3R5bGVkKEljb24pYFxuXHRmbGV4OiAwIDAgYXV0bztcblx0ZmlsbDogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcn07XG5cdG1hcmdpbi1yaWdodDogNXB4O1xuYDtcblxuY29uc3QgU3R5bGVkRGF0YSA9IHN0eWxlZC50YWJsZWBcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAxO1xuXHRmbGV4OiAwIDAgYXV0bztcblx0d2lkdGg6IDEwMCU7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xuYDtcblxuY29uc3QgU3R5bGVkRGF0YUNlbGwgPSBzdHlsZWQudGRgXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGhlaWdodDogMzBweDtcblx0cGFkZGluZzogNHB4IDZweDtcblx0Ym9yZGVyLXRvcDogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYm9yZGVyfTtcblx0JjpmaXJzdC1jaGlsZCB7XG5cdFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xuXHR9XG5cdCY6bGFzdC1jaGlsZCB7XG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdFx0cGFkZGluZy1yaWdodDogMTVweDtcblx0fVxuYDtcblxuY29uc3QgU3R5bGVkS2V5ID0gc3R5bGVkKFRleHQpYFxuXHRmb250LXdlaWdodDogYm9sZDtcblx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3J9O1xuYDtcblxuY2xhc3MgU2VhcmNoVHJpZ2dlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcblx0XHRzdXBlciguLi5hcmdzKTtcblx0XHR0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuXHR9XG5cblx0aGFuZGxlQ2xpY2soZSwgaHJlZikge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG5cdFx0aWYgKHR5cGVvZiB0aGlzLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRoaXMucHJvcHMub25DbGljayhlLCBocmVmKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3Qge3Byb3BzfSA9IHRoaXM7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxMaW5rXG5cdFx0XHRcdGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfVxuXHRcdFx0XHRvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuXHRcdFx0XHRxdWVyeT17eydzZWFyY2gtZW5hYmxlZCc6IHRydWUsICdzZWFyY2gnOiBgJHtwcm9wcy5maWVsZH09JHtwcm9wcy5zZWFyY2h9YH19XG5cdFx0XHRcdHRpdGxlPXtgU2VhcmNoIG90aGVyIHBhdHRlcm5zIHdpdGggJHtwcm9wcy5maWVsZH0gXCIke3Byb3BzLnNlYXJjaH1cImB9XG5cdFx0XHRcdD5cblx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdFx0PC9MaW5rPlxuXHRcdCk7XG5cdH1cbn1cblxuU2VhcmNoVHJpZ2dlci5wcm9wVHlwZXMgPSB7XG5cdGNoaWxkcmVuOiB0LmFueSxcblx0Y2xhc3NOYW1lOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRmaWVsZDogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0b25DbGljazogdC5mdW5jLFxuXHRzZWFyY2g6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdHRpdGxlOiB0LnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5jb25zdCBTdHlsZWRWZXJzaW9uID0gc3R5bGVkKFZlcnNpb24pYFxuXHQmOmxpbmssICY6dmlzaXRlZCB7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdGNvbG9yOiAke3Byb3BzID0+IHtcblx0XHRcdGNvbnN0IHYgPSB0ZXh0KHByb3BzLmNoaWxkcmVuKTtcblx0XHRcdGlmICghc2VtdmVyLnZhbGlkKHYpKSB7XG5cdFx0XHRcdHJldHVybiBwcm9wcy50aGVtZS5lcnJvcjtcblx0XHRcdH1cblx0XHRcdGlmIChzZW12ZXIuc2F0aXNmaWVzKHYsICc8PTAuMScpKSB7XG5cdFx0XHRcdHJldHVybiBwcm9wcy50aGVtZS5lcnJvcjtcblx0XHRcdH1cblx0XHRcdGlmIChzZW12ZXIuc2F0aXNmaWVzKHYsICc+IDAuMSA8IDEnKSkge1xuXHRcdFx0XHRyZXR1cm4gcHJvcHMudGhlbWUuY29sb3I7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcHJvcHMudGhlbWUuc3VjY2Vzcztcblx0XHR9fVxuXHR9XG5gO1xuXG5jb25zdCBTdHlsZWRUYWcgPSBzdHlsZWQoVGFnKWBcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXHRwYWRkaW5nOiAycHggNHB4O1xuXHRtYXJnaW4tdG9wOiAxLjVweDtcblx0bWFyZ2luLWJvdHRvbTogMS41cHg7XG5cdGJvcmRlcjogMXB4IHNvbGlkICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3J9O1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdCY6bGluaywgJjp2aXNpdGVkLCAmOmFjdGl2ZSB7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9yfTtcblx0fVxuXHQmOm50aC1jaGlsZCgybikge1xuXHRcdG1hcmdpbi1sZWZ0OiAzcHg7XG5cdH1cbmA7XG5cbmNvbnN0IFN0eWxlZFRvZ2dsZUhlYWQgPSBzdHlsZWQoVG9nZ2xlSGVhZClgXG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGhlaWdodDogMzBweDtcblx0Zm9udC13ZWlnaHQ6IGJvbGQ7XG5cdGNvbG9yOiAke3Byb3BzID0+IHByb3BzLnRoZW1lLmNvbG9yfTtcblx0cGFkZGluZzogM3B4IDE1cHggM3B4IDIwcHg7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGJvcmRlci10b3A6IDFweCBzb2xpZCAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJvcmRlcn07XG5gO1xuXG5jb25zdCBTdHlsZWRUb2dnbGVCb2R5ID0gc3R5bGVkLmRpdmBcblx0ZGlzcGxheTogZmxleDtcblx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3J9O1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHR3aWR0aDogMTAwJTtcblx0cGFkZGluZzogNXB4IDE1cHggNXB4IDIwcHg7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGJhY2tncm91bmQ6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUudGludH07XG5gO1xuXG5jb25zdCBTdHlsZWRDb2RlID0gc3R5bGVkKENvZGUpYFxuXHR3aWR0aDogMTAwJTtcbmA7XG5cbmZ1bmN0aW9uIEluZm9QYW5lKHByb3BzKSB7XG5cdGNvbnN0IHtjbGFzc05hbWUsIC4uLnJlc3R9ID0gcHJvcHM7XG5cblx0cmV0dXJuIChcblx0XHQ8U3R5bGVkSW5mb1BhbmUgY2xhc3NOYW1lPXtjbGFzc05hbWV9IGhlcm1pdD17cHJvcHMuaGVybWl0fT5cblx0XHRcdDxJbm5lckluZm9QYW5lIHsuLi5yZXN0fSBzdGFuZGFsb25lLz5cblx0XHQ8L1N0eWxlZEluZm9QYW5lPlxuXHQpO1xufVxuXG5mdW5jdGlvbiBJbm5lckluZm9QYW5lKHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PFN0eWxlZElubmVyUGFuZSBzdGFuZGFsb25lPXtwcm9wcy5zdGFuZGFsb25lfSBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+XG5cdFx0XHQ8U3R5bGVkTmFtZT5cblx0XHRcdFx0PFN0eWxlZEljb24gc3ltYm9sPXtwcm9wcy5pY29ufS8+XG5cdFx0XHRcdDxTdHlsZWREaXNwbGF5TmFtZT57cHJvcHMubmFtZX08L1N0eWxlZERpc3BsYXlOYW1lPlxuXHRcdFx0XHQ8U3R5bGVkSWQ+e3Byb3BzLmlkfTwvU3R5bGVkSWQ+XG5cdFx0XHQ8L1N0eWxlZE5hbWU+XG5cdFx0XHR7cHJvcHMuY2hpbGRyZW4gJiZcblx0XHRcdFx0PFN0eWxlZFRvb2xiYXI+XG5cdFx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdFx0XHQ8L1N0eWxlZFRvb2xiYXI+XG5cdFx0XHR9XG5cdFx0XHQ8U3R5bGVkRGF0YT5cblx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdDxTdHlsZWREYXRhQ2VsbD5cblx0XHRcdFx0XHRcdFx0PFN0eWxlZEtleT5WZXJzaW9uPC9TdHlsZWRLZXk+XG5cdFx0XHRcdFx0XHQ8L1N0eWxlZERhdGFDZWxsPlxuXHRcdFx0XHRcdFx0PFN0eWxlZERhdGFDZWxsPlxuXHRcdFx0XHRcdFx0XHQ8U3R5bGVkVmVyc2lvbiBmaWVsZD1cInZlcnNpb25cIiBzZWFyY2g9e3Byb3BzLnZlcnNpb259PlxuXHRcdFx0XHRcdFx0XHRcdHtwcm9wcy52ZXJzaW9ufVxuXHRcdFx0XHRcdFx0XHQ8L1N0eWxlZFZlcnNpb24+XG5cdFx0XHRcdFx0XHQ8L1N0eWxlZERhdGFDZWxsPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0PFN0eWxlZERhdGFDZWxsPlxuXHRcdFx0XHRcdFx0XHQ8U3R5bGVkS2V5PkZsYWc8L1N0eWxlZEtleT5cblx0XHRcdFx0XHRcdDwvU3R5bGVkRGF0YUNlbGw+XG5cdFx0XHRcdFx0XHQ8U3R5bGVkRGF0YUNlbGw+XG5cdFx0XHRcdFx0XHRcdDxTZWFyY2hUcmlnZ2VyIGZpZWxkPVwiZmxhZ1wiIHNlYXJjaD17cHJvcHMuZmxhZ30+XG5cdFx0XHRcdFx0XHRcdFx0PEZsYWc+e3Byb3BzLmZsYWd9PC9GbGFnPlxuXHRcdFx0XHRcdFx0XHQ8L1NlYXJjaFRyaWdnZXI+XG5cdFx0XHRcdFx0XHQ8L1N0eWxlZERhdGFDZWxsPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0aGFzKHByb3BzLnRhZ3MpICYmXG5cdFx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0XHQ8U3R5bGVkRGF0YUNlbGw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8U3R5bGVkS2V5PlRhZ3M8L1N0eWxlZEtleT5cblx0XHRcdFx0XHRcdFx0XHQ8L1N0eWxlZERhdGFDZWxsPlxuXHRcdFx0XHRcdFx0XHRcdDxTdHlsZWREYXRhQ2VsbD5cblx0XHRcdFx0XHRcdFx0XHRcdHtwcm9wcy50YWdzLm1hcCh0ID0+IDxTdHlsZWRUYWcga2V5PXt0fSB0YWc9e3R9Lz4pfVxuXHRcdFx0XHRcdFx0XHRcdDwvU3R5bGVkRGF0YUNlbGw+XG5cdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGhhcyhwcm9wcy5lbnZzKSAmJiBwcm9wcy5lbnZzLmxlbmd0aCA+IDEgJiZcblx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdDxTdHlsZWREYXRhQ2VsbD5cblx0XHRcdFx0XHRcdFx0XHRcdDxTdHlsZWRLZXk+RW52aXJvbm1lbnQ8L1N0eWxlZEtleT5cblx0XHRcdFx0XHRcdFx0XHQ8L1N0eWxlZERhdGFDZWxsPlxuXHRcdFx0XHRcdFx0XHRcdDxTdHlsZWREYXRhQ2VsbD5cblx0XHRcdFx0XHRcdFx0XHRcdDxTZWxlY3Rcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImVudmlyb25tZW50XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9e3Byb3BzLm9uRW52Q2hhbmdlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZT17cHJvcHMuZW52Lm5hbWV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHByb3BzLmVudnMubWFwKGUgPT4gKDxvcHRpb24ga2V5PXtlLm5hbWV9IHZhbHVlPXtlLm5hbWV9PntlLmRpc3BsYXlOYW1lfTwvb3B0aW9uPikpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdDwvU2VsZWN0PlxuXHRcdFx0XHRcdFx0XHRcdDwvU3R5bGVkRGF0YUNlbGw+XG5cdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdDx0cj5cblx0XHRcdFx0XHRcdFx0PFN0eWxlZERhdGFDZWxsPlxuXHRcdFx0XHRcdFx0XHRcdDxTdHlsZWRLZXk+TW91bnQ8L1N0eWxlZEtleT5cblx0XHRcdFx0XHRcdFx0PC9TdHlsZWREYXRhQ2VsbD5cblx0XHRcdFx0XHRcdFx0PFN0eWxlZERhdGFDZWxsPlxuXHRcdFx0XHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjaGVja2VkPXtwcm9wcy5tb3VudH0gb25DaGFuZ2U9e3Byb3BzLm9uTW91bnRDaGFuZ2V9Lz5cblx0XHRcdFx0XHRcdFx0PC9TdHlsZWREYXRhQ2VsbD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0PC9TdHlsZWREYXRhPlxuXHRcdFx0e1xuXHRcdFx0XHRoYXMocHJvcHMuZGVwZW5kZW5jaWVzKSAmJlxuXHRcdFx0XHRcdDxUb2dnbGVcblx0XHRcdFx0XHRcdGhlYWQ9e2BEZXBlbmRlbmNpZXMgKCR7cHJvcHMuZGVwZW5kZW5jaWVzLmxlbmd0aH0pYH1cblx0XHRcdFx0XHRcdGVuYWJsZWQ9e3Byb3BzLmRlcGVuZGVuY2llc0VuYWJsZWR9XG5cdFx0XHRcdFx0XHRuYW1lPVwiZGVwZW5kZW5jaWVzXCJcblx0XHRcdFx0XHRcdD5cblx0XHRcdFx0XHRcdDxQYXR0ZXJuTGlzdD5cblx0XHRcdFx0XHRcdFx0e3Byb3BzLmRlcGVuZGVuY2llcy5tYXAoZCA9PiA8UGF0dGVybkl0ZW0ga2V5PXtkLmlkfSBwYXR0ZXJuPXtkfS8+KX1cblx0XHRcdFx0XHRcdDwvUGF0dGVybkxpc3Q+XG5cdFx0XHRcdFx0PC9Ub2dnbGU+XG5cdFx0XHR9XG5cdFx0XHR7XG5cdFx0XHRcdGhhcyhwcm9wcy5kZXBlbmRlbnRzKSAmJlxuXHRcdFx0XHRcdDxUb2dnbGVcblx0XHRcdFx0XHRcdGhlYWQ9e2BEZXBlbmRlbnRzICgke3Byb3BzLmRlcGVuZGVudHMubGVuZ3RofSlgfVxuXHRcdFx0XHRcdFx0ZW5hYmxlZD17cHJvcHMuZGVwZW5kZW50c0VuYWJsZWR9XG5cdFx0XHRcdFx0XHRuYW1lPVwiZGVwZW5kZW50c1wiXG5cdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHQ8UGF0dGVybkxpc3Q+XG5cdFx0XHRcdFx0XHRcdHtwcm9wcy5kZXBlbmRlbnRzLm1hcChkID0+IDxQYXR0ZXJuSXRlbSBrZXk9e2QuaWR9IHBhdHRlcm49e2R9Lz4pfVxuXHRcdFx0XHRcdFx0PC9QYXR0ZXJuTGlzdD5cblx0XHRcdFx0XHQ8L1RvZ2dsZT5cblx0XHRcdH1cblx0XHRcdHtcblx0XHRcdFx0aGFzKHByb3BzLmRlbW9EZXBlbmRlbmNpZXMpICYmXG5cdFx0XHRcdFx0PFRvZ2dsZVxuXHRcdFx0XHRcdFx0aGVhZD17YERlbW8gRGVwZW5kZW5jaWVzICgke3Byb3BzLmRlbW9EZXBlbmRlbmNpZXMubGVuZ3RofSlgfVxuXHRcdFx0XHRcdFx0ZW5hYmxlZD17cHJvcHMuZGVtb0RlcGVuZGVuY2llc0VuYWJsZWR9XG5cdFx0XHRcdFx0XHRuYW1lPVwiZGVtby1kZXBlbmRlbmNpZXNcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFBhdHRlcm5MaXN0PlxuXHRcdFx0XHRcdFx0XHR7cHJvcHMuZGVtb0RlcGVuZGVuY2llcy5tYXAoZCA9PiA8UGF0dGVybkl0ZW0ga2V5PXtkLmlkfSBwYXR0ZXJuPXtkfS8+KX1cblx0XHRcdFx0XHRcdDwvUGF0dGVybkxpc3Q+XG5cdFx0XHRcdFx0PC9Ub2dnbGU+XG5cdFx0XHR9XG5cdFx0XHR7XG5cdFx0XHRcdGhhcyhwcm9wcy5kZW1vRGVwZW5kZW50cykgJiZcblx0XHRcdFx0XHQ8VG9nZ2xlXG5cdFx0XHRcdFx0XHRoZWFkPXtgRGVtbyBEZXBlbmRlbnRzICgke3Byb3BzLmRlbW9EZXBlbmRlbnRzLmxlbmd0aH0pYH1cblx0XHRcdFx0XHRcdGVuYWJsZWQ9e3Byb3BzLmRlbW9EZXBlbmRlbnRzRW5hYmxlZH1cblx0XHRcdFx0XHRcdG5hbWU9XCJkZW1vLWRlcGVuZGVudHNcIlxuXHRcdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PFBhdHRlcm5MaXN0PlxuXHRcdFx0XHRcdFx0XHR7cHJvcHMuZGVtb0RlcGVuZGVudHMubWFwKGQgPT4gPFBhdHRlcm5JdGVtIGtleT17ZC5pZH0gcGF0dGVybj17ZH0vPil9XG5cdFx0XHRcdFx0XHQ8L1BhdHRlcm5MaXN0PlxuXHRcdFx0XHRcdDwvVG9nZ2xlPlxuXHRcdFx0fVxuXHRcdFx0PFRvZ2dsZSBoZWFkPVwiTWFuaWZlc3RcIiBlbmFibGVkPXtwcm9wcy5tYW5pZmVzdEVuYWJsZWR9IG5hbWU9XCJtYW5pZmVzdFwiPlxuXHRcdFx0XHQ8U3R5bGVkQ29kZSBibG9jayBsYW5ndWFnZT1cImpzb25cIj57cHJvcHMubWFuaWZlc3R9PC9TdHlsZWRDb2RlPlxuXHRcdFx0PC9Ub2dnbGU+XG5cdFx0PC9TdHlsZWRJbm5lclBhbmU+XG5cdCk7XG59XG5cbklubmVySW5mb1BhbmUucHJvcFR5cGVzID0ge1xuXHRjbGFzc05hbWU6IHQuc3RyaW5nLFxuXHRkZW1vRGVwZW5kZW50czogdC5hcnJheS5pc1JlcXVpcmVkLFxuXHRkZW1vRGVwZW5kZW50c0VuYWJsZWQ6IHQuYm9vbC5pc1JlcXVpcmVkLFxuXHRkZW1vRGVwZW5kZW5jaWVzOiB0LmFycmF5LmlzUmVxdWlyZWQsXG5cdGRlbW9EZXBlbmRlbmNpZXNFbmFibGVkOiB0LmJvb2wuaXNSZXF1aXJlZCxcblx0ZGVwZW5kZW50czogdC5hcnJheS5pc1JlcXVpcmVkLFxuXHRkZXBlbmRlbnRzRW5hYmxlZDogdC5ib29sLmlzUmVxdWlyZWQsXG5cdGRlcGVuZGVuY2llczogdC5hcnJheS5pc1JlcXVpcmVkLFxuXHRkZXBlbmRlbmNpZXNFbmFibGVkOiB0LmJvb2wuaXNSZXF1aXJlZCxcblx0ZmxhZzogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0aWNvbjogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0aWQ6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdG1hbmlmZXN0OiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRtYW5pZmVzdEVuYWJsZWQ6IHQuYm9vbC5pc1JlcXVpcmVkLFxuXHRuYW1lOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRzdGFuZGFsb25lOiB0LmJvb2wuaXNSZXF1aXJlZCxcblx0c3R5bGU6IHQuc3RyaW5nLFxuXHR0YWdzOiB0LmFycmF5LmlzUmVxdWlyZWQsXG5cdHZlcnNpb246IHQuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmNvbnN0IFN0eWxlZFNlbGVjdENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0Jjo6YWZ0ZXIge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRyaWdodDogMDtcblx0XHR0b3A6IDUwJTtcblx0XHR6LWluZGV4OiAxO1xuXHRcdGNvbnRlbnQ6ICfilrwnO1xuXHRcdGZvbnQtc2l6ZTogMC44ZW07XG5cdFx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3J9O1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0fVxuYDtcblxuY29uc3QgU3R5bGVkU2VsZWN0ID0gc3R5bGVkLnNlbGVjdGBcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAyO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHRjb2xvcjogJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5jb2xvcn07XG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuXHRmb250LXNpemU6IDE2cHg7XG5cdGJvcmRlcjogbm9uZTtcblx0Ym9yZGVyLXJhZGl1czogbm9uZTtcblx0cGFkZGluZy1yaWdodDogMjBweDtcblx0Jjpmb2N1cyB7XG5cdFx0b3V0bGluZTogbm9uZTtcblx0fVxuYDtcblxuZnVuY3Rpb24gU2VsZWN0KHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PFN0eWxlZFNlbGVjdENvbnRhaW5lciBjbGFzc05hbWU9e3Byb3BzLmNsYXNzTmFtZX0+XG5cdFx0XHQ8U3R5bGVkU2VsZWN0XG5cdFx0XHRcdG9uQ2hhbmdlPXtwcm9wcy5vbkNoYW5nZX1cblx0XHRcdFx0dmFsdWU9e3Byb3BzLnZhbHVlfVxuXHRcdFx0XHQ+XG5cdFx0XHRcdHtwcm9wcy5jaGlsZHJlbn1cblx0XHRcdDwvU3R5bGVkU2VsZWN0PlxuXHRcdDwvU3R5bGVkU2VsZWN0Q29udGFpbmVyPlxuXHQpO1xufVxuXG5mdW5jdGlvbiBWZXJzaW9uKHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PFNlYXJjaFRyaWdnZXIgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9IHNlYXJjaD17cHJvcHMuc2VhcmNofSBmaWVsZD1cInZlcnNpb25cIj5cblx0XHRcdDxUZXh0Pntwcm9wcy5zZWFyY2h9PC9UZXh0PlxuXHRcdDwvU2VhcmNoVHJpZ2dlcj5cblx0KTtcbn1cblxuVmVyc2lvbi5wcm9wVHlwZXMgPSB7XG5cdGNsYXNzTmFtZTogdC5zdHJpbmcuaXNSZXF1aXJlZCxcblx0c2VhcmNoOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRjaGlsZHJlbjogdC5zdHJpbmcuaXNSZXF1aXJlZFxufTtcblxuZnVuY3Rpb24gVGFnKHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PFNlYXJjaFRyaWdnZXIgY2xhc3NOYW1lPXtwcm9wcy5jbGFzc05hbWV9IHNlYXJjaD17cHJvcHMudGFnfSBmaWVsZD1cInRhZ3NcIj5cblx0XHRcdDxUZXh0Pntwcm9wcy50YWd9PC9UZXh0PlxuXHRcdDwvU2VhcmNoVHJpZ2dlcj5cblx0KTtcbn1cblxuVGFnLnByb3BUeXBlcyA9IHtcblx0Y2xhc3NOYW1lOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHR0YWc6IHQuc3RyaW5nLmlzUmVxdWlyZWRcbn07XG5cbmNvbnN0IFN0eWxlZEFycm93ID0gc3R5bGVkKFRleHQpYFxuXHRmb250LXNpemU6IC44ZW07XG5cdHRyYW5zZm9ybTogJHtwcm9wcyA9PiBwcm9wcy5yb3RhdGVkID8gYHJvdGF0ZSgwZGVnKWAgOiBgcm90YXRlKDkwZGVnKWB9O1xuYDtcblxuY29uc3QgU3R5bGVkSGVhZCA9IHN0eWxlZChMaW5rKWBcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5gO1xuXG5mdW5jdGlvbiBUb2dnbGVIZWFkKHByb3BzKSB7XG5cdHJldHVybiAoXG5cdFx0PFN0eWxlZEhlYWQgcXVlcnk9e3tbYCR7cHJvcHMubmFtZX0tZW5hYmxlZGBdOiAhcHJvcHMuZW5hYmxlZH19IGNsYXNzTmFtZT17cHJvcHMuY2xhc3NOYW1lfT5cblx0XHRcdDxUZXh0Pntwcm9wcy5jaGlsZHJlbn08L1RleHQ+XG5cdFx0XHQ8U3R5bGVkQXJyb3cgcm90YXRlZD17cHJvcHMuZW5hYmxlZH0+4pa8PC9TdHlsZWRBcnJvdz5cblx0XHQ8L1N0eWxlZEhlYWQ+XG5cdCk7XG59XG5cblRvZ2dsZUhlYWQucHJvcFR5cGVzID0ge1xuXHRuYW1lOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRlbmFibGVkOiB0LnN0cmluZy5pc1JlcXVpcmVkLFxuXHRjbGFzc05hbWU6IHQuc3RyaW5nLmlzUmVxdWlyZWQsXG5cdGNoaWxkcmVuOiB0LnN0cmluZy5pc1JlcXVpcmVkXG59O1xuXG5jb25zdCBTdHlsZWRQYXR0ZXJuTGlzdCA9IHN0eWxlZC5kaXZgXG5cdHdpZHRoOiAxMDAlO1xuYDtcblxuZnVuY3Rpb24gUGF0dGVybkxpc3QocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8U3R5bGVkUGF0dGVybkxpc3Q+XG5cdFx0XHR7cHJvcHMuY2hpbGRyZW59XG5cdFx0PC9TdHlsZWRQYXR0ZXJuTGlzdD5cblx0KTtcbn1cblxuUGF0dGVybkxpc3QucHJvcFR5cGVzID0ge1xuXHRjaGlsZHJlbjogdC5hbnlcbn07XG5cbmNvbnN0IFN0eWxlZFBhdHRlcm5JdGVtID0gc3R5bGVkKExpbmspYFxuXHRkaXNwbGF5OiBibG9jaztcblx0Y29sb3I6ICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuY29sb3J9O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdHBhZGRpbmc6IDNweCAwO1xuYDtcblxuZnVuY3Rpb24gUGF0dGVybkl0ZW0ocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8U3R5bGVkUGF0dGVybkl0ZW0gaHJlZj17YHBhdHRlcm4vJHtwcm9wcy5wYXR0ZXJuLmlkfWB9IGRhdGEtaWQ9e3Byb3BzLnBhdHRlcm4uaWR9PlxuXHRcdFx0PFRleHQ+e3Byb3BzLnBhdHRlcm4ubWFuaWZlc3QuZGlzcGxheU5hbWV9PC9UZXh0PlxuXHRcdDwvU3R5bGVkUGF0dGVybkl0ZW0+XG5cdCk7XG59XG5cblBhdHRlcm5JdGVtLnByb3BUeXBlcyA9IHtcblx0cGF0dGVybjogdC5hbnlcbn07XG5cbmNvbnN0IFN0eWxlZFRvZ2dsZSA9IHN0eWxlZC5kaXZgXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ei1pbmRleDogMTtcblx0ZmxleDogMSAxIGF1dG87XG5cdG1pbi1oZWlnaHQ6IDMwcHg7XG5gO1xuXG5mdW5jdGlvbiBUb2dnbGUocHJvcHMpIHtcblx0cmV0dXJuIChcblx0XHQ8U3R5bGVkVG9nZ2xlPlxuXHRcdFx0PFN0eWxlZFRvZ2dsZUhlYWQgbmFtZT17cHJvcHMubmFtZX0gZW5hYmxlZD17cHJvcHMuZW5hYmxlZH0+XG5cdFx0XHRcdHtwcm9wcy5oZWFkfVxuXHRcdFx0PC9TdHlsZWRUb2dnbGVIZWFkPlxuXHRcdFx0e3Byb3BzLmVuYWJsZWQgJiZcblx0XHRcdFx0PFN0eWxlZFRvZ2dsZUJvZHk+XG5cdFx0XHRcdFx0e3Byb3BzLmNoaWxkcmVufVxuXHRcdFx0XHQ8L1N0eWxlZFRvZ2dsZUJvZHk+XG5cdFx0XHR9XG5cdFx0PC9TdHlsZWRUb2dnbGU+XG5cdCk7XG59XG5cblRvZ2dsZS5wcm9wVHlwZXMgPSB7XG5cdGNoaWxkcmVuOiB0LmFueSxcblx0ZW5hYmxlZDogdC5ib29sLFxuXHRoZWFkOiB0LmFueSxcblx0bmFtZTogdC5zdHJpbmdcbn07XG5cbmZ1bmN0aW9uIGhhcyh2YWwpIHtcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsKSAmJiB2YWwubGVuZ3RoID4gMDtcbn1cbiJdfQ==
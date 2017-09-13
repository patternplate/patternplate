'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InnerInfoPane = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\tposition: relative;\n\twidth: 300px;\n\tmin-height: 300px;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tborder-radius: ', ';\n\tborder-right: 1px solid ', ';\n\tborder-right-width: ', 'px;\n\toverflow: scroll;\n\toverflow-x: hidden;\n\tbackground: ', ';\n'], ['\n\tposition: relative;\n\twidth: 300px;\n\tmin-height: 300px;\n\theight: 100%;\n\tbox-sizing: border-box;\n\tborder-radius: ', ';\n\tborder-right: 1px solid ', ';\n\tborder-right-width: ', 'px;\n\toverflow: scroll;\n\toverflow-x: hidden;\n\tbackground: ', ';\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tposition: relative;\n\tz-index: 1;\n\tbackground: ', ';\n'], ['\n\tposition: relative;\n\tz-index: 1;\n\tbackground: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n\tposition: relative;\n\tz-index: 1;\n\tdisplay: flex;\n\tflex: 0 0 auto;\n\talign-items: center;\n\tmargin-bottom: 10px;\n\tpadding: 10px 15px 0 15px;\n'], ['\n\tposition: relative;\n\tz-index: 1;\n\tdisplay: flex;\n\tflex: 0 0 auto;\n\talign-items: center;\n\tmargin-bottom: 10px;\n\tpadding: 10px 15px 0 15px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\tposition: relative;\n\tz-index: 1;\n\talign-items: center;\n\tpadding: 0 15px 10px 15px;\n'], ['\n\tdisplay: flex;\n\tposition: relative;\n\tz-index: 1;\n\talign-items: center;\n\tpadding: 0 15px 10px 15px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n\tflex: 1 0 auto;\n\tcolor: ', ';\n\tmargin-right: 10px;\n'], ['\n\tflex: 1 0 auto;\n\tcolor: ', ';\n\tmargin-right: 10px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\tflex: 0 1 auto;\n\tcolor: ', ';\n\ttext-align: right;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n'], ['\n\tflex: 0 1 auto;\n\tcolor: ', ';\n\ttext-align: right;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\ttext-overflow: ellipsis;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n\tflex: 0 0 auto;\n\tfill: ', ';\n\tmargin-right: 5px;\n'], ['\n\tflex: 0 0 auto;\n\tfill: ', ';\n\tmargin-right: 5px;\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n\tposition: relative;\n\tz-index: 1;\n\tflex: 0 0 auto;\n\twidth: 100%;\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n'], ['\n\tposition: relative;\n\tz-index: 1;\n\tflex: 0 0 auto;\n\twidth: 100%;\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n\tbox-sizing: border-box;\n\theight: 30px;\n\tpadding: 4px 6px;\n\tborder-top: 1px solid ', ';\n\t&:first-child {\n\t\tpadding-left: 20px;\n\t}\n\t&:last-child {\n\t\ttext-align: right;\n\t\tpadding-right: 15px;\n\t}\n'], ['\n\tbox-sizing: border-box;\n\theight: 30px;\n\tpadding: 4px 6px;\n\tborder-top: 1px solid ', ';\n\t&:first-child {\n\t\tpadding-left: 20px;\n\t}\n\t&:last-child {\n\t\ttext-align: right;\n\t\tpadding-right: 15px;\n\t}\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n\tfont-weight: bold;\n\tcolor: ', ';\n'], ['\n\tfont-weight: bold;\n\tcolor: ', ';\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n\t&:link, &:visited {\n\t\ttext-decoration: none;\n\t\tcolor: ', '\n\t}\n'], ['\n\t&:link, &:visited {\n\t\ttext-decoration: none;\n\t\tcolor: ', '\n\t}\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n\tdisplay: inline-block;\n\tpadding: 2px 4px;\n\tmargin-top: 1.5px;\n\tmargin-bottom: 1.5px;\n\tborder: 1px solid ', ';\n\tborder-radius: 3px;\n\t&:link, &:visited, &:active {\n\t\ttext-decoration: none;\n\t\tcolor: ', ';\n\t}\n\t&:nth-child(2n) {\n\t\tmargin-left: 3px;\n\t}\n'], ['\n\tdisplay: inline-block;\n\tpadding: 2px 4px;\n\tmargin-top: 1.5px;\n\tmargin-bottom: 1.5px;\n\tborder: 1px solid ', ';\n\tborder-radius: 3px;\n\t&:link, &:visited, &:active {\n\t\ttext-decoration: none;\n\t\tcolor: ', ';\n\t}\n\t&:nth-child(2n) {\n\t\tmargin-left: 3px;\n\t}\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\talign-items: center;\n\theight: 30px;\n\tfont-weight: bold;\n\tcolor: ', ';\n\tpadding: 3px 15px 3px 20px;\n\tbox-sizing: border-box;\n\tborder-top: 1px solid ', ';\n'], ['\n\tdisplay: flex;\n\talign-items: center;\n\theight: 30px;\n\tfont-weight: bold;\n\tcolor: ', ';\n\tpadding: 3px 15px 3px 20px;\n\tbox-sizing: border-box;\n\tborder-top: 1px solid ', ';\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\tcolor: ', ';\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tpadding: 5px 15px 5px 20px;\n\tbox-sizing: border-box;\n\tbackground: ', ';\n'], ['\n\tdisplay: flex;\n\tcolor: ', ';\n\tbox-sizing: border-box;\n\twidth: 100%;\n\tpadding: 5px 15px 5px 20px;\n\tbox-sizing: border-box;\n\tbackground: ', ';\n']),
    _templateObject15 = _taggedTemplateLiteral(['\n\twidth: 100%;\n'], ['\n\twidth: 100%;\n']),
    _templateObject16 = _taggedTemplateLiteral(['\n\tposition: relative;\n\t&::after {\n\t\tposition: absolute;\n\t\tright: 0;\n\t\ttop: 50%;\n\t\tz-index: 1;\n\t\tcontent: \'\u25BC\';\n\t\tfont-size: 0.8em;\n\t\tcolor: ', ';\n\t\ttransform: translateY(-50%);\n\t}\n'], ['\n\tposition: relative;\n\t&::after {\n\t\tposition: absolute;\n\t\tright: 0;\n\t\ttop: 50%;\n\t\tz-index: 1;\n\t\tcontent: \'\u25BC\';\n\t\tfont-size: 0.8em;\n\t\tcolor: ', ';\n\t\ttransform: translateY(-50%);\n\t}\n']),
    _templateObject17 = _taggedTemplateLiteral(['\n\tposition: relative;\n\tz-index: 2;\n\tappearance: none;\n\tcolor: ', ';\n\tbackground: transparent;\n\tfont-size: 16px;\n\tborder: none;\n\tborder-radius: none;\n\tpadding-right: 20px;\n\t&:focus {\n\t\toutline: none;\n\t}\n'], ['\n\tposition: relative;\n\tz-index: 2;\n\tappearance: none;\n\tcolor: ', ';\n\tbackground: transparent;\n\tfont-size: 16px;\n\tborder: none;\n\tborder-radius: none;\n\tpadding-right: 20px;\n\t&:focus {\n\t\toutline: none;\n\t}\n']),
    _templateObject18 = _taggedTemplateLiteral(['\n\tfont-size: .8em;\n\ttransform: ', ';\n'], ['\n\tfont-size: .8em;\n\ttransform: ', ';\n']),
    _templateObject19 = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\ttext-decoration: none;\n'], ['\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-between;\n\ttext-decoration: none;\n']),
    _templateObject20 = _taggedTemplateLiteral(['\n\tdisplay: block;\n\tcolor: ', ';\n\ttext-decoration: none;\n\tpadding: 3px 0;\n'], ['\n\tdisplay: block;\n\tcolor: ', ';\n\ttext-decoration: none;\n\tpadding: 3px 0;\n']),
    _templateObject21 = _taggedTemplateLiteral(['\n\tposition: relative;\n\tz-index: 1;\n\tflex: 1 1 auto;\n\tmin-height: 30px;\n'], ['\n\tposition: relative;\n\tz-index: 1;\n\tflex: 1 1 auto;\n\tmin-height: 30px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semver = require('semver');

var _semver2 = _interopRequireDefault(_semver);

var _components = require('@patternplate/components');

var _reactAddonsTextContent = require('react-addons-text-content');

var _reactAddonsTextContent2 = _interopRequireDefault(_reactAddonsTextContent);

var _code = require('./common/code');

var _code2 = _interopRequireDefault(_code);

var _flag = require('./flag');

var _flag2 = _interopRequireDefault(_flag);

var _link = require('./common/link');

var _link2 = _interopRequireDefault(_link);

var _text = require('./text');

var _text2 = _interopRequireDefault(_text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = InfoPane;
exports.InnerInfoPane = InnerInfoPane;


var BORDER_RADIUS = 10;

var StyledInfoPane = _components.styled.div(_templateObject, function (props) {
	return props.hermit ? BORDER_RADIUS + 'px' : BORDER_RADIUS + 'px 0 0 ' + BORDER_RADIUS + 'px';
}, function (props) {
	return props.theme.border;
}, function (props) {
	return props.hermit ? 0 : 1;
}, function (props) {
	return props.theme.background;
});

var StyledInnerPane = _components.styled.div(_templateObject2, function (props) {
	return props.theme.background;
});

var StyledName = _components.styled.div(_templateObject3);

var StyledToolbar = _components.styled.div(_templateObject4);

var StyledDisplayName = (0, _components.styled)(_text2.default)(_templateObject5, function (props) {
	return props.theme.color;
});

var StyledId = (0, _components.styled)(_text2.default)(_templateObject6, function (props) {
	return props.theme.recess;
});

var StyledIcon = (0, _components.styled)(_components.Icon)(_templateObject7, function (props) {
	return props.theme.color;
});

var StyledData = _components.styled.table(_templateObject8);

var StyledDataCell = _components.styled.td(_templateObject9, function (props) {
	return props.theme.border;
});

var StyledKey = (0, _components.styled)(_text2.default)(_templateObject10, function (props) {
	return props.theme.color;
});

var SearchTrigger = function (_React$Component) {
	_inherits(SearchTrigger, _React$Component);

	function SearchTrigger() {
		var _ref;

		_classCallCheck(this, SearchTrigger);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		var _this = _possibleConstructorReturn(this, (_ref = SearchTrigger.__proto__ || Object.getPrototypeOf(SearchTrigger)).call.apply(_ref, [this].concat(args)));

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

var StyledVersion = (0, _components.styled)(Version)(_templateObject11, function (props) {
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

var StyledTag = (0, _components.styled)(Tag)(_templateObject12, function (props) {
	return props.theme.color;
}, function (props) {
	return props.theme.color;
});

var StyledToggleHead = (0, _components.styled)(ToggleHead)(_templateObject13, function (props) {
	return props.theme.color;
}, function (props) {
	return props.theme.border;
});

var StyledToggleBody = _components.styled.div(_templateObject14, function (props) {
	return props.theme.color;
}, function (props) {
	return props.theme.background;
});

var StyledCode = (0, _components.styled)(_code2.default)(_templateObject15);

function InfoPane(props) {
	var className = props.className,
	    rest = _objectWithoutProperties(props, ['className']);

	return _react2.default.createElement(
		StyledInfoPane,
		{ className: className, hermit: props.hermit },
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

var StyledSelectContainer = _components.styled.div(_templateObject16, function (props) {
	return props.theme.color;
});

var StyledSelect = _components.styled.select(_templateObject17, function (props) {
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

var StyledArrow = (0, _components.styled)(_text2.default)(_templateObject18, function (props) {
	return props.rotated ? 'rotate(0deg)' : 'rotate(90deg)';
});

var StyledHead = (0, _components.styled)(_link2.default)(_templateObject19);

function ToggleHead(props) {
	return _react2.default.createElement(
		StyledHead,
		{ query: _defineProperty({}, props.name + '-enabled', !props.enabled), className: props.className },
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

var StyledPatternList = _components.styled.div(_templateObject15);

function PatternList(props) {
	return _react2.default.createElement(
		StyledPatternList,
		null,
		props.children
	);
}

var StyledPatternItem = (0, _components.styled)(_link2.default)(_templateObject20, function (props) {
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

var StyledToggle = _components.styled.div(_templateObject21);

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
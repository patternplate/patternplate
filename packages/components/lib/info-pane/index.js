'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var styled = require('styled-components').default;
var semver = require('semver');
var text = require('react-addons-text-content');

var _require = require('lodash'),
    omit = _require.omit;

var Code = require('../code');
var Link = require('../link');
var Flag = require('../flag');
var Icon = require('../icon');
var Text = require('../text');

module.exports = InfoPane;
module.exports.InnerInfoPane = InnerInfoPane;

var BORDER_RADIUS = 10;

var StyledInfoPane = styled.div`
	position: relative;
	width: 300px;
	min-height: 300px;
	height: 100%;
	box-sizing: border-box;
	border-radius: ${function (props) {
  return props.hermit ? `${BORDER_RADIUS}px` : `${BORDER_RADIUS}px 0 0 ${BORDER_RADIUS}px`;
}};
	border-right: 1px solid ${function (props) {
  return props.theme.border;
}};
	border-right-width: ${function (props) {
  return props.hermit ? 0 : 1;
}}px;
	overflow: scroll;
	overflow-x: hidden;
	background: ${function (props) {
  return props.theme.background;
}};
`;

var StyledInnerPane = styled.div`
	position: relative;
	z-index: 1;
	background: ${function (props) {
  return props.theme.background;
}};
`;

var StyledName = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	flex: 0 0 auto;
	align-items: center;
	margin-bottom: 10px;
	padding: 10px 15px 0 15px;
`;

var StyledToolbar = styled.div`
	display: flex;
	position: relative;
	z-index: 1;
	align-items: center;
	padding: 0 15px 10px 15px;
`;

var StyledDisplayName = styled(Text)`
	flex: 1 0 auto;
	color: ${function (props) {
  return props.theme.color;
}};
	margin-right: 10px;
`;

var StyledId = styled(Text)`
	flex: 0 1 auto;
	color: ${function (props) {
  return props.theme.recess;
}};
	text-align: right;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

var StyledIcon = styled(Icon)`
	flex: 0 0 auto;
	fill: ${function (props) {
  return props.theme.color;
}};
	margin-right: 5px;
`;

var StyledData = styled.table`
	position: relative;
	z-index: 1;
	flex: 0 0 auto;
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
`;

var StyledDataCell = styled.td`
	box-sizing: border-box;
	height: 30px;
	padding: 4px 6px;
	border-top: 1px solid ${function (props) {
  return props.theme.border;
}};
	&:first-child {
		padding-left: 20px;
	}
	&:last-child {
		text-align: right;
		padding-right: 15px;
	}
`;

var StyledKey = styled(Text)`
	font-weight: bold;
	color: ${function (props) {
  return props.theme.color;
}};
`;

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

      return React.createElement(
        Link,
        {
          className: props.className,
          onClick: this.handleClick,
          query: { 'search-enabled': true, 'search': `${props.field}=${props.search}` },
          title: `Search other patterns with ${props.field} "${props.search}"`
        },
        props.children
      );
    }
  }]);

  return SearchTrigger;
}(React.Component);

var StyledVersion = styled(Version)`
	&:link, &:visited {
		text-decoration: none;
		color: ${function (props) {
  var v = text(props.children);
  if (!semver.valid(v)) {
    return props.theme.error;
  }
  if (semver.satisfies(v, '<=0.1')) {
    return props.theme.error;
  }
  if (semver.satisfies(v, '> 0.1 < 1')) {
    return props.theme.color;
  }
  return props.theme.success;
}}
	}
`;

var StyledTag = styled(Tag)`
	display: inline-block;
	padding: 2px 4px;
	margin-top: 1.5px;
	margin-bottom: 1.5px;
	border: 1px solid ${function (props) {
  return props.theme.color;
}};
	border-radius: 3px;
	&:link, &:visited, &:active {
		text-decoration: none;
		color: ${function (props) {
  return props.theme.color;
}};
	}
	&:nth-child(2n) {
		margin-left: 3px;
	}
`;

var StyledToggleHead = styled(ToggleHead)`
	display: flex;
	align-items: center;
	height: 30px;
	font-weight: bold;
	color: ${function (props) {
  return props.theme.color;
}};
	padding: 3px 15px 3px 20px;
	box-sizing: border-box;
	border-top: 1px solid ${function (props) {
  return props.theme.border;
}};
`;

var StyledToggleBody = styled.div`
	display: flex;
	color: ${function (props) {
  return props.theme.color;
}};
	box-sizing: border-box;
	width: 100%;
	padding: 5px 15px 5px 20px;
	box-sizing: border-box;
	background: ${function (props) {
  return props.theme.background;
}};
`;

var StyledCode = styled(Code)`
	width: 100%;
`;

function InfoPane(props) {
  var className = props.className;

  var innerProps = omit(props, ['className']);

  return React.createElement(
    StyledInfoPane,
    { className: className, hermit: props.hermit },
    React.createElement(InnerInfoPane, _extends({}, innerProps, { standalone: true }))
  );
}

function InnerInfoPane(props) {
  return React.createElement(
    StyledInnerPane,
    { standalone: props.standalone, className: props.className },
    React.createElement(
      StyledName,
      null,
      React.createElement(StyledIcon, { symbol: props.icon }),
      React.createElement(
        StyledDisplayName,
        null,
        props.name
      ),
      React.createElement(
        StyledId,
        null,
        props.id
      )
    ),
    props.children && React.createElement(
      StyledToolbar,
      null,
      props.children
    ),
    React.createElement(
      StyledData,
      null,
      React.createElement(
        'tbody',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement(
            StyledDataCell,
            null,
            React.createElement(
              StyledKey,
              null,
              'Version'
            )
          ),
          React.createElement(
            StyledDataCell,
            null,
            React.createElement(
              StyledVersion,
              { field: 'version', search: props.version },
              props.version
            )
          )
        ),
        React.createElement(
          'tr',
          null,
          React.createElement(
            StyledDataCell,
            null,
            React.createElement(
              StyledKey,
              null,
              'Flag'
            )
          ),
          React.createElement(
            StyledDataCell,
            null,
            React.createElement(
              SearchTrigger,
              { field: 'flag', search: props.flag },
              React.createElement(
                Flag,
                null,
                props.flag
              )
            )
          )
        ),
        has(props.tags) && React.createElement(
          'tr',
          null,
          React.createElement(
            StyledDataCell,
            null,
            React.createElement(
              StyledKey,
              null,
              'Tags'
            )
          ),
          React.createElement(
            StyledDataCell,
            null,
            props.tags.map(function (t) {
              return React.createElement(StyledTag, { key: t, tag: t });
            })
          )
        ),
        has(props.envs) && props.envs.length > 1 && React.createElement(
          'tr',
          null,
          React.createElement(
            StyledDataCell,
            null,
            React.createElement(
              StyledKey,
              null,
              'Environment'
            )
          ),
          React.createElement(
            StyledDataCell,
            null,
            React.createElement(
              Select,
              {
                name: 'environment',
                onChange: props.onEnvChange,
                value: props.env.name
              },
              props.envs.map(function (e) {
                return React.createElement(
                  'option',
                  { key: e.name, value: e.name },
                  e.displayName
                );
              })
            )
          )
        ),
        React.createElement(
          'tr',
          null,
          React.createElement(
            StyledDataCell,
            null,
            React.createElement(
              StyledKey,
              null,
              'Mount'
            )
          ),
          React.createElement(
            StyledDataCell,
            null,
            React.createElement('input', { type: 'checkbox', checked: props.mount, onChange: props.onMountChange })
          )
        )
      )
    ),
    has(props.dependencies) && React.createElement(
      Toggle,
      {
        head: `Dependencies (${props.dependencies.length})`,
        enabled: props.dependenciesEnabled,
        name: 'dependencies'
      },
      React.createElement(
        PatternList,
        null,
        props.dependencies.map(function (d) {
          return React.createElement(PatternItem, { key: d.id, pattern: d });
        })
      )
    ),
    has(props.dependents) && React.createElement(
      Toggle,
      {
        head: `Dependents (${props.dependents.length})`,
        enabled: props.dependentsEnabled,
        name: 'dependents'
      },
      React.createElement(
        PatternList,
        null,
        props.dependents.map(function (d) {
          return React.createElement(PatternItem, { key: d.id, pattern: d });
        })
      )
    ),
    has(props.demoDependencies) && React.createElement(
      Toggle,
      {
        head: `Demo Dependencies (${props.demoDependencies.length})`,
        enabled: props.demoDependenciesEnabled,
        name: 'demo-dependencies'
      },
      React.createElement(
        PatternList,
        null,
        props.demoDependencies.map(function (d) {
          return React.createElement(PatternItem, { key: d.id, pattern: d });
        })
      )
    ),
    has(props.demoDependents) && React.createElement(
      Toggle,
      {
        head: `Demo Dependents (${props.demoDependents.length})`,
        enabled: props.demoDependentsEnabled,
        name: 'demo-dependents'
      },
      React.createElement(
        PatternList,
        null,
        props.demoDependents.map(function (d) {
          return React.createElement(PatternItem, { key: d.id, pattern: d });
        })
      )
    ),
    React.createElement(
      Toggle,
      { head: 'Manifest', enabled: props.manifestEnabled, name: 'manifest' },
      React.createElement(
        StyledCode,
        { block: true, language: 'json' },
        props.manifest
      )
    )
  );
}

var StyledSelectContainer = styled.div`
	position: relative;
	&::after {
		position: absolute;
		right: 0;
		top: 50%;
		z-index: 1;
		content: '▼';
		font-size: 0.8em;
		color: ${function (props) {
  return props.theme.color;
}};
		transform: translateY(-50%);
	}
`;

var StyledSelect = styled.select`
	position: relative;
	z-index: 2;
	appearance: none;
	color: ${function (props) {
  return props.theme.color;
}};
	background: transparent;
	font-size: 16px;
	border: none;
	border-radius: none;
	padding-right: 20px;
	&:focus {
		outline: none;
	}
`;

function Select(props) {
  return React.createElement(
    StyledSelectContainer,
    { className: props.className },
    React.createElement(
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
  return React.createElement(
    SearchTrigger,
    { className: props.className, search: props.search, field: 'version' },
    React.createElement(
      Text,
      null,
      props.search
    )
  );
}

function Tag(props) {
  return React.createElement(
    SearchTrigger,
    { className: props.className, search: props.tag, field: 'tags' },
    React.createElement(
      Text,
      null,
      props.tag
    )
  );
}

var StyledArrow = styled(Text)`
	font-size: .8em;
	transform: ${function (props) {
  return props.rotated ? `rotate(0deg)` : `rotate(-90deg)`;
}};
`;

var StyledHead = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-decoration: none;
`;

function ToggleHead(props) {
  return React.createElement(
    StyledHead,
    { query: { [`${props.name}-enabled`]: !props.enabled }, className: props.className },
    React.createElement(
      Text,
      null,
      props.children
    ),
    React.createElement(
      StyledArrow,
      { rotated: props.enabled },
      '\u25BC'
    )
  );
}

var StyledPatternList = styled.div`
	width: 100%;
`;

function PatternList(props) {
  return React.createElement(
    StyledPatternList,
    null,
    props.children
  );
}

var StyledPatternItem = styled(Link)`
	display: block;
	color: ${function (props) {
  return props.theme.color;
}};
	text-decoration: none;
	padding: 3px 0;
`;

function PatternItem(props) {
  return React.createElement(
    StyledPatternItem,
    { href: `pattern/${props.pattern.id}`, 'data-id': props.pattern.id },
    React.createElement(
      Text,
      null,
      props.pattern.manifest.displayName
    )
  );
}

var StyledToggle = styled.div`
	position: relative;
	z-index: 1;
	flex: 1 1 auto;
	min-height: 30px;
`;

function Toggle(props) {
  return React.createElement(
    StyledToggle,
    null,
    React.createElement(
      StyledToggleHead,
      { name: props.name, enabled: props.enabled },
      props.head
    ),
    props.enabled && React.createElement(
      StyledToggleBody,
      null,
      props.children
    )
  );
}

function has(val) {
  return Array.isArray(val) && val.length > 0;
}
//# sourceMappingURL=index.js.map
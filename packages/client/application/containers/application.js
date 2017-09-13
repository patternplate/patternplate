'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    html,\n    body {\n      height: 100%;\n      overflow: hidden;\n    }\n    body {\n      margin: 0;\n      height: 100%;\n    }\n    [data-application] {\n      height: 100%;\n    }\n  '], ['\n    html,\n    body {\n      height: 100%;\n      overflow: hidden;\n    }\n    body {\n      margin: 0;\n      height: 100%;\n    }\n    [data-application] {\n      height: 100%;\n    }\n  ']),
    _templateObject2 = _taggedTemplateLiteral(['\n  box-sizing: border-box;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background: ', ';\n'], ['\n  box-sizing: border-box;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background: ', ';\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  width: ', 'px;\n  flex: 0 0 ', 'px;\n'], ['\n  position: relative;\n  z-index: 2;\n  height: 100%;\n  width: ', 'px;\n  flex: 0 0 ', 'px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  position: absolute;\n  box-sizing: border-box;\n  z-index: 2;\n  padding: 15px;\n  width: 100%;\n'], ['\n  position: absolute;\n  box-sizing: border-box;\n  z-index: 2;\n  padding: 15px;\n  width: 100%;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: flex;\n  ', ';\n'], ['\n  display: flex;\n  ', ';\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  display: flex;\n  align-items: center;\n  flex: 0 0 ', 'px;\n  position: relative;\n  z-index: 2;\n  box-sizing: border-box;\n  height: ', 'px;\n  padding: 0 15px;\n'], ['\n  display: flex;\n  align-items: center;\n  flex: 0 0 ', 'px;\n  position: relative;\n  z-index: 2;\n  box-sizing: border-box;\n  height: ', 'px;\n  padding: 0 15px;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  & + & {\n    padding-left: 10px;\n  }\n'], ['\n  & + & {\n    padding-left: 10px;\n  }\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  flex: 1 1 100%;\n  width: 100%;\n  height: calc(100% - 60px);\n  position: relative;\n'], ['\n  flex: 1 1 100%;\n  width: 100%;\n  height: calc(100% - 60px);\n  position: relative;\n']),
    _templateObject9 = _taggedTemplateLiteral(['\n  display: flex;\n  flex: 1 1 calc(100% - ', 'px);\n  width: calc(100% - ', 'px);\n  height: 100%;\n  flex-direction: column;\n  overflow: hidden;\n'], ['\n  display: flex;\n  flex: 1 1 calc(100% - ', 'px);\n  width: calc(100% - ', 'px);\n  height: 100%;\n  flex-direction: column;\n  overflow: hidden;\n']),
    _templateObject10 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 12.5vh;\n  bottom: 10vh;\n  right: 0;\n  left: 0;\n  width: 100%;\n  pointer-events: none;\n'], ['\n  position: absolute;\n  top: 12.5vh;\n  bottom: 10vh;\n  right: 0;\n  left: 0;\n  width: 100%;\n  pointer-events: none;\n']),
    _templateObject11 = _taggedTemplateLiteral(['\n  width: 90%;\n  min-width: 320px;\n  max-width: 750px;\n  max-height: 100%;\n  margin: 0 auto;\n  overflow: hidden;\n'], ['\n  width: 90%;\n  min-width: 320px;\n  max-width: 750px;\n  max-height: 100%;\n  margin: 0 auto;\n  overflow: hidden;\n']),
    _templateObject12 = _taggedTemplateLiteral(['\n  position: absolute;\n  pointer-events: none;\n  z-index: 2;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 10px 15px;\n  height: 300px;\n  display: flex;\n'], ['\n  position: absolute;\n  pointer-events: none;\n  z-index: 2;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  padding: 10px 15px;\n  height: 300px;\n  display: flex;\n']),
    _templateObject13 = _taggedTemplateLiteral(['\n  flex: 0 0 auto;\n  box-sizing: border-box;\n  pointer-events: all;\n'], ['\n  flex: 0 0 auto;\n  box-sizing: border-box;\n  pointer-events: all;\n']),
    _templateObject14 = _taggedTemplateLiteral(['\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: all;\n'], ['\n  flex: 1 1 auto;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: all;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _tagHoc = require('tag-hoc');

var _tagHoc2 = _interopRequireDefault(_tagHoc);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reselect = require('reselect');

var _components = require('@patternplate/components');

var _actions = require('../actions');

var actions = _interopRequireWildcard(_actions);

var _item = require('../selectors/item');

var item = _interopRequireWildcard(_item);

var _codePane = require('./code-pane');

var _codePane2 = _interopRequireDefault(_codePane);

var _docPane = require('./doc-pane');

var _docPane2 = _interopRequireDefault(_docPane);

var _favicon = require('./favicon');

var _favicon2 = _interopRequireDefault(_favicon);

var _triggerFullscreen = require('./trigger-fullscreen');

var _triggerFullscreen2 = _interopRequireDefault(_triggerFullscreen);

var _indicator = require('./indicator');

var _indicator2 = _interopRequireDefault(_indicator);

var _infoPane = require('./info-pane');

var _infoPane2 = _interopRequireDefault(_infoPane);

var _message = require('./message');

var _message2 = _interopRequireDefault(_message);

var _logo = require('./logo');

var _logo2 = _interopRequireDefault(_logo);

var _navigation = require('./navigation');

var _navigation2 = _interopRequireDefault(_navigation);

var _toggleDoc = require('./toggle-doc');

var _toggleDoc2 = _interopRequireDefault(_toggleDoc);

var _toggleInfoPane = require('./toggle-info-pane');

var _toggleInfoPane2 = _interopRequireDefault(_toggleInfoPane);

var _toggleNavigation = require('./toggle-navigation');

var _toggleNavigation2 = _interopRequireDefault(_toggleNavigation);

var _toggleOpacity = require('./toggle-opacity');

var _toggleOpacity2 = _interopRequireDefault(_toggleOpacity);

var _toggleSearch = require('./toggle-search');

var _toggleSearch2 = _interopRequireDefault(_toggleSearch);

var _toggleCode = require('./toggle-code');

var _toggleCode2 = _interopRequireDefault(_toggleCode);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = (0, _reactRedux.connect)(mapProps, mapDispatch)(Application);


var selectThemes = (0, _reselect.createSelector)(function (state) {
  return state.config.color;
}, function (color) {
  return (0, _components.themes)(color);
});

var selectIsPattern = (0, _reselect.createSelector)(item.selectType, function (type) {
  return type === 'pattern';
});

var selectCodeEnabled = (0, _reselect.createSelector)(selectIsPattern, function (state) {
  return state.codeEnabled;
}, function (isPattern, enabled) {
  return isPattern && enabled;
});

var selectDocEnabled = (0, _reselect.createSelector)(selectIsPattern, item.selectContents, function (state) {
  return state.docEnabled;
}, function (isPattern, contents, docEnabled) {
  return isPattern && Boolean(contents) && docEnabled;
});

var selectInfoEnabled = (0, _reselect.createSelector)(selectIsPattern, function (state) {
  return state.infoEnabled;
}, function (isPattern, enabled) {
  return isPattern && enabled;
});

function mapProps(state) {
  return {
    codeEnabled: selectCodeEnabled(state),
    docEnabled: selectDocEnabled(state),
    description: state.schema.description,
    infoEnabled: selectInfoEnabled(state),
    lightbox: state.lightbox,
    logo: state.config.logo,
    navigationEnabled: state.navigationEnabled,
    searchEnabled: state.searchEnabled,
    theme: state.theme,
    themes: selectThemes(state),
    title: state.config.title || state.schema.name
  };
}

function mapDispatch(dispatch) {
  return (0, _redux.bindActionCreators)({
    onLoad: function onLoad() {
      return actions.listen({ url: 'api' });
    },
    onResize: actions.windowResize
  }, dispatch);
}

function Application(props) {
  /* eslint-disable no-unused-expressions */
  (0, _components.injectGlobal)(_templateObject);
  /* eslint-enable */

  return _react2.default.createElement(
    _components.ThemeProvider,
    { theme: props.themes[props.theme] },
    _react2.default.createElement(
      StyledApplication,
      null,
      _react2.default.createElement(_reactHelmet2.default, { meta: meta(props), title: props.title }),
      _react2.default.createElement(_favicon2.default, null),
      _react2.default.createElement(
        _components.ThemeProvider,
        { theme: props.themes.dark },
        _react2.default.createElement(
          StyledNavigationBox,
          { enabled: props.navigationEnabled },
          props.navigationEnabled && _react2.default.createElement(
            _navigation2.default,
            null,
            props.logo && _react2.default.createElement(
              _navigation.NavigationHeader,
              null,
              _react2.default.createElement(_logo2.default, null)
            ),
            _react2.default.createElement(
              _navigation.NavigationToolbar,
              null,
              _react2.default.createElement('div', null),
              _react2.default.createElement(_toggleSearch2.default, null),
              _react2.default.createElement(_indicator2.default, null)
            )
          )
        )
      ),
      _react2.default.createElement(
        StyledContentContainer,
        null,
        _react2.default.createElement(
          StyledContent,
          { navigationEnabled: props.navigationEnabled },
          _react2.default.createElement(
            StyledMessageBox,
            null,
            _react2.default.createElement(_message2.default, null)
          ),
          props.children,
          props.searchEnabled && _react2.default.createElement(
            _components.ThemeProvider,
            { theme: props.themes.dark },
            _react2.default.createElement(
              StyledSearchBox,
              null,
              _react2.default.createElement(
                StyledSearchFrame,
                null,
                _react2.default.createElement(_search2.default, null)
              )
            )
          ),
          _react2.default.createElement(
            _components.ThemeProvider,
            { theme: props.themes.dark },
            _react2.default.createElement(
              StyledFloatingBox,
              null,
              props.infoEnabled && _react2.default.createElement(
                StyledInfoPane,
                null,
                _react2.default.createElement(
                  _infoPane2.default,
                  { hermit: !(props.codeEnabled || props.docEnabled) },
                  _react2.default.createElement(_toggleCode2.default, null),
                  _react2.default.createElement(_toggleDoc2.default, null)
                )
              ),
              props.infoEnabled && (props.codeEnabled || props.docEnabled) && _react2.default.createElement(
                StyledPane,
                { hermit: !props.infoEnabled, infoEnabled: props.infoEnabled },
                props.codeEnabled && !props.docEnabled && _react2.default.createElement(_codePane2.default, { hermit: !props.infoEnabled }),
                props.docEnabled && _react2.default.createElement(_docPane2.default, { hermit: !props.infoEnabled })
              )
            )
          )
        ),
        _react2.default.createElement(
          _components.ThemeProvider,
          { theme: props.themes.dark },
          _react2.default.createElement(
            StyledControlsBox,
            { enabled: props.navigationEnabled },
            _react2.default.createElement(
              StyledControlsArea,
              { orient: 'left' },
              _react2.default.createElement(
                StyledControlsItem,
                null,
                _react2.default.createElement(_toggleNavigation2.default, null)
              ),
              _react2.default.createElement(
                StyledControlsItem,
                null,
                _react2.default.createElement(_toggleInfoPane2.default, null)
              )
            ),
            _react2.default.createElement(
              StyledControlsArea,
              { orient: 'right' },
              _react2.default.createElement(
                StyledControlsItem,
                null,
                _react2.default.createElement(_toggleOpacity2.default, null)
              ),
              _react2.default.createElement(
                StyledControlsItem,
                null,
                _react2.default.createElement(_triggerFullscreen2.default, null)
              )
            )
          )
        )
      )
    )
  );
}

var WIDTH = 300;
var NAVIGATION_WIDTH = function NAVIGATION_WIDTH(props) {
  return props.enabled ? WIDTH : 0;
};
var TOOLBAR_HEIGHT = 60;
var ORIENTATION = function ORIENTATION(props) {
  var direction = props.orient === 'right' ? 'left' : 'right';
  return 'margin-' + direction + ': auto';
};

var StyledApplication = _components.styled.div(_templateObject2, function (props) {
  return props.theme.background;
});

var StyledNavigationBox = (0, _components.styled)((0, _tagHoc2.default)(['enabled'])('div'))(_templateObject3, NAVIGATION_WIDTH, NAVIGATION_WIDTH);

var StyledMessageBox = _components.styled.div(_templateObject4);

var StyledControlsArea = _components.styled.div(_templateObject5, ORIENTATION);

var StyledControlsBox = _components.styled.div(_templateObject6, TOOLBAR_HEIGHT, TOOLBAR_HEIGHT);

var StyledControlsItem = _components.styled.div(_templateObject7);

var StyledContent = _components.styled.div(_templateObject8);

var StyledContentContainer = _components.styled.div(_templateObject9, NAVIGATION_WIDTH, NAVIGATION_WIDTH);

var StyledSearchBox = _components.styled.div(_templateObject10);

var StyledSearchFrame = _components.styled.div(_templateObject11);

var StyledFloatingBox = _components.styled.div(_templateObject12);

var StyledInfoPane = _components.styled.div(_templateObject13);

var StyledPane = _components.styled.div(_templateObject14);

function meta(props) {
  return [{ name: 'description', content: props.description }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }];
}
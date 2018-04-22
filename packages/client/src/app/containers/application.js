import React from "react";
import Helmet from "react-helmet";
import tag from "tag-hoc";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createSelector } from "reselect";
import {
  Link,
  Icon,
  styled,
  injection,
  NavigationItem,
  Text,
  ThemeProvider,
  themes,
  css
} from "@patternplate/components";

import * as actions from "../actions";
import * as demo from "../selectors/demo";

import Logo from "./logo";
import Favicon from "./favicon";
import Indicator from "./indicator";
import ConnectedLink from "./link";
import Message from "./message";
import Navigation, { NavigationBody, NavigationHeader, NavigationToolbar } from "./navigation";
import ToggleNavigation from "./toggle-navigation";
import ToggleSearch from "./toggle-search";
import Search from "./search";
import PluginMenu from "./plugin-menu";

const selectThemes = createSelector(state => state.config.ui, ui => themes(ui));

const selectLines = createSelector(
  state => state.messages,
  demo.selectSrc,
  (messages, src) => (messages[src] || "").split("\n").filter(Boolean)
);

const selectMessage = createSelector(selectLines, lines =>
  lines
    .slice(0, 2)
    .map(l => l.trim())
    .join("\n")
);

const selectHasMessage = createSelector(
  selectMessage,
  message => typeof message === "string" && message !== ""
);

function mapProps(state) {
  const q = state.routing.locationBeforeTransitions.query;

  return {
    base: state.base,
    description: state.schema.description,
    lightbox: state.lightbox,
    location: state.routing.locationBeforeTransitions,
    networkEnabled: state.networkEnabled,
    logo: state.config.ui.renderedLogo,
    navigationEnabled: state.navigationEnabled,
    searchEnabled: state.searchEnabled,
    theme: state.theme,
    themes: selectThemes(state),
    title: state.config.title || state.schema.name,
    hasMessage: selectHasMessage(state),
    screenshot: q.screenshot === "true",
    jsWarningEnabled: q["js-warning-enabled"] !== "false" && q["js-warning-enabled"] !== false,
    browserWarningEnabled: q["browser-warning-enabled"] !== "false" && q["browser-warning-enabled"] !== false,
  };
}

function mapDispatch(dispatch) {
  return bindActionCreators(
    {
      onLoad: () => actions.listen({ url: "api" }),
      onResize: actions.windowResize
    },
    dispatch
  );
}

const injections = [
  {
    target: Link,
    source: ConnectedLink
  }
];

class Application extends React.Component {
  componentDidMount() {
    document.body.style.overflow = this.props.screenshot ? "hidden" : "auto";
  }

  componentDidUpdate() {
    document.body.style.overflow = this.props.screenshot ? "hidden" : "auto";
  }

  render() {
    const { props } = this;
    return (
      <injection.InjectionProvider injections={injections}>
        <ThemeProvider theme={props.themes[props.theme]}>
          <StyledApplication screenshot={props.screenshot}>
            <Helmet meta={meta(props)} title={props.title} />
            <Favicon />
            <ThemeProvider theme={props.themes.dark}>
              <React.Fragment>
                <NavigationControl
                  data-toggle-name="navigation"
                  data-trigger-name="navigation"
                  data-toggle-enabled={props.navigationEnabled}
                  enabled={props.navigationEnabled}
                >
                  <ToggleNavigation />
                </NavigationControl>
                <StyledNavigationBox
                  data-toggle-name="navigation"
                  data-toggle-enabled={props.visible}
                  enabled={props.navigationEnabled}
                  >
                  <Navigation>
                    <NavigationHeader>
                      <Logo />
                    </NavigationHeader>
                    <NavigationBody>
                      <PluginMenu
                        anchor="sidebar"
                        render={(contribution) => (
                          <NavigationItem
                            name={contribution.title}
                            title={`Execute ${contribution.command}`}
                            key={JSON.stringify(contribution)}
                            href="#"
                            />
                        )}
                        />
                    </NavigationBody>
                    <NavigationToolbar>
                      <div />
                      <ToggleSearch />
                      <Indicator />
                    </NavigationToolbar>
                  </Navigation>
                </StyledNavigationBox>
              </React.Fragment>
            </ThemeProvider>
            <StyledContentContainer>
              <StyledContent>
                {props.browserWarningEnabled &&
                  <StyledBrowserWarning
                    navigationEnabled={props.navigationEnabled}
                    data-browser-warning
                  >
                    <StyledBrowserContainer>
                      <StyledBrowserContent>
                        <StyledWarningLabel>
                          Nice browser. Is it antique?
                        </StyledWarningLabel>
                        <StyledBrowserText>
                          No, seriously - your browser is so old that some
                          features of patternplate don't work as expected.
                        </StyledBrowserText>
                        <StyledBrowserText>
                          Don't worry - you can either continue with a restricted
                          version or install an up-to-date browser.
                        </StyledBrowserText>
                      </StyledBrowserContent>
                      <StyledBrowserContainerClose
                        title={`Close browser warning`}
                        query={{ "browser-warning-enabled": false }}
                      >
                        <Icon symbol="close" />
                      </StyledBrowserContainerClose>
                    </StyledBrowserContainer>
                  </StyledBrowserWarning>
                }
                {props.jsWarningEnabled &&
                  <StyledBrowserWarning
                    navigationEnabled={props.navigationEnabled}
                    data-js-warning
                  >
                    <StyledBrowserContainer>
                      <StyledBrowserContent>
                        <StyledWarningLabel>We messed up.</StyledWarningLabel>
                        <StyledBrowserText>
                          Sorry, but your user experience might be affected.
                        </StyledBrowserText>
                        <Text>- Try reloading the page</Text>
                        <Text>
                          - Report the problem at
                          github.com/patternplate/patternplate
                        </Text>
                      </StyledBrowserContent>
                      <StyledBrowserContainerClose
                        title={`Close browser warning`}
                        query={{ "js-warning-enabled": false }}
                      >
                        <Icon symbol="close" />
                      </StyledBrowserContainerClose>
                    </StyledBrowserContainer>
                  </StyledBrowserWarning>
                }
                {props.hasMessage && (
                  <StyledMessageBox>
                    <Message />
                  </StyledMessageBox>
                )}
                {props.children}
                {props.searchEnabled && (
                  <ThemeProvider theme={props.themes.dark}>
                    <StyledSearchBox
                      navigationEnabled={props.navigationEnabled}
                      screenshot={props.screenshot}
                    >
                      <StyledSearchFrame>
                        <Search />
                      </StyledSearchFrame>
                    </StyledSearchBox>
                  </ThemeProvider>
                )}
              </StyledContent>
            </StyledContentContainer>
          </StyledApplication>
        </ThemeProvider>
      </injection.InjectionProvider>
    );
  }
}

export default connect(mapProps, mapDispatch)(Application);

const WIDTH = 300;
const NAVIGATION_WIDTH = props => (props.enabled ? WIDTH : 0);
const TOOLBAR_HEIGHT = 60;

const StyledWarningLabel = styled(Text)`
  font-weight: bold;
  margin-bottom: 1.3em;
`;

const StyledBrowserWarning = styled.div`
  display: none; /* overridden by separate js if needed */
  box-sizing: border-box;
  position: absolute;
  position: sticky;
  top: 0;
  z-index: 4;
  right: 0;
  left: 0;
  width: 100%;
  padding: 15px 20px;
  padding-left: ${props => (props.navigationEnabled ? 20 : 60)}px;
  background: ${props => props.theme.colors.warning};
`;

const StyledBrowserContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  justify-content: space-between;
`;

const StyledBrowserContent = styled.div``;

const StyledBrowserText = styled(Text)`
  margin-bottom: 1.3em;
`;

const StyledBrowserContainerClose = styled(Link)`
  flex-shrink: 0;
  margin-left: 15px;
  &:link,
  &:visited,
  &:active {
    color: ${props => props.theme.colors.color};
  }
`;

const StyledApplication = styled.div`
  position: relative;
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.colors.background};

  ${props =>
    !props.screenshot
      ? ""
      : css`
          height: calc(100vh - 100px);
          width: calc(100vw - 100px);
          margin: 50px;
          border-radius: 10px;
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.15);
          overflow: hidden;
        `};
`;

const StyledNavigationBox = styled(tag(["enabled"])("div"))`
  position: relative;
  z-index: 2;
  height: 100%;
  width: ${NAVIGATION_WIDTH}px;
  flex: 0 0 ${NAVIGATION_WIDTH}px;
  overflow: hidden;
  &[data-toggle-enabled="true"] {
    display: block;
  }
  &[data-toggle-enabled="false"] {
    display: none;
  }
`;

const StyledMessageBox = styled.div`
  position: absolute;
  box-sizing: border-box;
  z-index: 3;
  padding: 15px;
  width: 100%;
  overflow: hidden;
`;

const StyledContent = styled.div`
  flex: 1 1 100%;
  width: 100%;
`;

const StyledContentContainer = styled.div`
  flex: 1 1 calc(100% - ${NAVIGATION_WIDTH}px);
  width: calc(100% - ${NAVIGATION_WIDTH}px);
  flex-direction: column;
  overflow: auto;
  position: relative;
`;

const WITH_SCREENSHOT_OFFSET = factor => props => {
  if (props.screenshot) {
    return factor * 50;
  }
  return 0;
};

const WITH_NAVIGATION_OFFSET = factor => props => {
  if (props.navigationEnabled) {
    return factor * 300;
  }
  return 0;
};

const SUM = (...args) => props => args.reduce((acc, fn) => acc + fn(props), 0);

const StyledSearchBox = styled.div`
  position: fixed;
  top: 12.5vh;
  bottom: 10vh;
  right: ${WITH_SCREENSHOT_OFFSET(1)}px;
  left: ${SUM(WITH_NAVIGATION_OFFSET(1), WITH_SCREENSHOT_OFFSET(1))}px;
  width: calc(
    100% - ${SUM(WITH_NAVIGATION_OFFSET(1), WITH_SCREENSHOT_OFFSET(2))}px
  );
  pointer-events: none;
`;

const StyledSearchFrame = styled.div`
  width: 90%;
  min-width: 320px;
  max-width: 750px;
  max-height: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const StyledFloatingBox = styled.div`
  position: absolute;
  pointer-events: none;
  z-index: 2;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 10px 15px;
  height: 300px;
  display: flex;
`;

const StyledInfoPane = styled.div`
  flex: 0 0 auto;
  box-sizing: border-box;
  pointer-events: all;
`;

const StyledPane = styled.div`
  flex: 1 1 auto;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  overflow: hidden;
  pointer-events: all;
`;

const NavigationControl = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 5;
  top: 0;
  left: ${props => (props.enabled ? 300 : 0)}px;
  transform: translate(-${props => (props.enabled ? 100 : 0)}%);
  color: ${props =>
    props.enabled ? props.theme.colors.color : props.theme.colors.background};
  width: 60px;
  height: 60px;
  background: ${props =>
    props.enabled ? props.theme.colors.backgroundSecondary : "#fff"};

  &[data-toggle-enabled="true"] {
    left: 300;
    transform: translate(-100%);
    color: ${props => props.theme.colors.color};
    background: ${props => props.theme.colors.backgroundSecondary};
  }

  &[data-toggle-enabled="false"] {
    left: 0;
    transform: translate(0);
    color: ${props => props.theme.colors.background};
    background: #fff;
  }

  @media screen and (min-width: 720px) {
    background: transparent;
    &::before {
      display: none;
    }
  }
`;

function meta(props) {
  return [
    { name: "description", content: props.description },
    { name: "viewport", content: "width=device-width, initial-scale=1" }
  ];
}

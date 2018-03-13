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
  Text,
  ThemeProvider,
  themes
} from "@patternplate/components";

import * as actions from "../actions";
import * as item from "../selectors/item";
import * as demo from "../selectors/demo";

import CodePane from "./code-pane";
import DocPane from "./doc-pane";
import Favicon from "./favicon";
import Indicator from "./indicator";
import InfoPane from "./info-pane";
import ConnectedLink from "./link";
import Logo from "./logo";
import Message from "./message";
import Navigation, { NavigationHeader, NavigationToolbar } from "./navigation";
import ToggleNavigation from "./toggle-navigation";
import ToggleSearch from "./toggle-search";
import Search from "./search";

export default connect(mapProps, mapDispatch)(Application);

const selectThemes = createSelector(
  state => state.config.color,
  color => themes(color)
);

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
  return {
    base: state.base,
    description: state.schema.description,
    lightbox: state.lightbox,
    location: state.routing.locationBeforeTransitions,
    networkEnabled: state.networkEnabled,
    logo: state.config.logo,
    navigationEnabled: state.navigationEnabled,
    searchEnabled: state.searchEnabled,
    theme: state.theme,
    themes: selectThemes(state),
    title: state.config.title || state.schema.name,
    hasMessage: selectHasMessage(state)
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

function Application(props) {
  return (
    <injection.InjectionProvider injections={injections}>
      <ThemeProvider theme={props.themes[props.theme]}>
        <StyledApplication>
          <Helmet meta={meta(props)} title={props.title} />
          <Favicon />
          <ThemeProvider theme={props.themes.dark}>
            <React.Fragment>
              <NavigationControl enabled={props.navigationEnabled}>
                <ToggleNavigation />
              </NavigationControl>
              <StyledNavigationBox enabled={props.navigationEnabled}>
                {props.navigationEnabled && (
                  <Navigation>
                    {props.logo && (
                      <NavigationHeader>
                        <Logo />
                      </NavigationHeader>
                    )}
                    <NavigationToolbar>
                      <div/>
                      <ToggleSearch />
                      <Indicator />
                    </NavigationToolbar>
                  </Navigation>
                )}
              </StyledNavigationBox>
            </React.Fragment>
          </ThemeProvider>
          <StyledContentContainer>
            <StyledContent>
            <StyledBrowserWarning navigationEnabled={props.navigationEnabled} data-browser-warning>
              <StyledBrowserContainer>
                <div>
                  <StyledWarningLabel>
                    Nice browser. Is it antique?
                  </StyledWarningLabel>
                  <Text>
                    No, seriously - your browser is so old that some features of patternplate don't work as expected.
                  </Text>
                  <Text>
                    Don't worry - you can either continue with a restricted version or install an up-to-date browser.
                  </Text>
                </div>
                <StyledBrowserContainerClose
                  title={`Close browser warning`}
                  query={{"browser-warning": false}}
                  >
                  <Icon symbol="close"/>
                </StyledBrowserContainerClose>
              </StyledBrowserContainer>
            </StyledBrowserWarning>
              {
                props.hasMessage && (
                  <StyledMessageBox>
                    <Message />
                  </StyledMessageBox>
                )
              }
              {props.children}
              {props.searchEnabled && (
                <ThemeProvider theme={props.themes.dark}>
                  <StyledSearchBox navigationEnabled={props.navigationEnabled}>
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

const WIDTH = 300;
const NAVIGATION_WIDTH = props => (props.enabled ? WIDTH : 0);
const TOOLBAR_HEIGHT = 60;

const StyledWarningLabel = styled(Text)`
  font-weight: bold;
`;

const StyledBrowserWarning = styled.div`
  display: none; /* overridden by separate js if needed */
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 4;
  right: 0;
  left: ${props => props.navigationEnabled ? WIDTH : 0}px;
  width: 100%;
  padding: 20px 15px;
  padding-left: ${props => props.navigationEnabled ? 20 : 60}px;
  background: ${props => props.theme.warning};
`;

const StyledBrowserContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

const StyledBrowserContainerClose = styled(Link)`
  flex-shrink: 0;
  margin-left: 15px;
  &:link,
  &:visited,
  &:active {
    color: ${props => props.theme.color};
  }
`;

const StyledApplication = styled.div`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.background};
`;

const StyledNavigationBox = styled(tag(["enabled"])("div"))`
  position: relative;
  z-index: 2;
  height: 100%;
  width: ${NAVIGATION_WIDTH}px;
  flex: 0 0 ${NAVIGATION_WIDTH}px;
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
  position: relative;
`;

const StyledContentContainer = styled.div`
  flex: 1 1 calc(100% - ${NAVIGATION_WIDTH}px);
  width: calc(100% - ${NAVIGATION_WIDTH}px);
  flex-direction: column;
  overflow: auto;
`;

const StyledSearchBox = styled.div`
  position: fixed;
  top: 12.5vh;
  bottom: 10vh;
  right: 0;
  left: ${props => props.navigationEnabled ? 300 : 0}px;
  width: ${props => props.navigationEnabled ? `calc(100% - 300px)` : `100%`};
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
  position: fixed;
  z-index: 5;
  top: 0;
  left: ${props => props.enabled ? 300 : 0}px;
  transform: translate(-${props => props.enabled ? 100 : 0}%);
  color: ${props => props.enabled ? props.theme.color : props.theme.background};
  width: 60px;
  height: 60px;
`;

function meta(props) {
  return [
    { name: "description", content: props.description },
    { name: "viewport", content: "width=device-width, initial-scale=1" }
  ];
}

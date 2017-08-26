import React from 'react';
import Helmet from 'react-helmet';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';
import tag from 'tag-hoc';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createSelector} from 'reselect';

import * as actions from '../actions';
import * as item from '../selectors/item';
import themes from '../themes';

import CodePane from './code-pane';
import DocPane from './doc-pane';
import Favicon from './favicon';
import Fullscreen from './trigger-fullscreen';
import InfoPane from './info-pane';
import Message from './message';
import Navigation from './navigation';
import ToggleDoc from './toggle-doc';
import ToggleInfoPane from './toggle-info-pane';
import ToggleNavigation from './toggle-navigation';
import ToggleOpacity from './toggle-opacity';
import ToggleSource from './toggle-code';
import Search from './search';

export default connect(mapProps, mapDispatch)(Application);

const selectThemes = createSelector(
	state => state.config.color,
	color => themes(color)
);

const selectIsPattern = createSelector(
	item.selectType,
	type => type === 'pattern'
);

const selectCodeEnabled = createSelector(
	selectIsPattern,
	state => state.codeEnabled,
	(isPattern, enabled) => isPattern && enabled
);

const selectDocEnabled = createSelector(
	selectIsPattern,
	item.selectContents,
	state => state.docEnabled,
	(isPattern, contents, docEnabled) => isPattern && Boolean(contents) && docEnabled
);

const selectInfoEnabled = createSelector(
	selectIsPattern,
	state => state.infoEnabled,
	(isPattern, enabled) => isPattern && enabled
);


function mapProps(state) {
	return {
		codeEnabled: selectCodeEnabled(state),
		docEnabled: selectDocEnabled(state),
		description: state.schema.description,
		infoEnabled: selectInfoEnabled(state),
		lightbox: state.lightbox,
		navigationEnabled: state.navigationEnabled,
		searchEnabled: state.searchEnabled,
		theme: state.theme,
		themes: selectThemes(state),
		title: state.config.title || state.schema.name
	};
}

function mapDispatch(dispatch) {
	return bindActionCreators({
		onLoad: () => actions.listen({url: 'api'}),
		onResize: actions.windowResize
	}, dispatch);
}

function Application(props) {
	/* eslint-disable no-unused-expressions */
	injectGlobal`
		html,
		body {
			height: 100%;
			overflow: hidden;
		}
		body {
			margin: 0;
			height: 100%;
		}
		[data-application] {
			height: 100%;
		}
	`;
	/* eslint-enable */

	return (
		<ThemeProvider theme={props.themes[props.theme]}>
			<StyledApplication>
				<Helmet meta={meta(props)} title={props.title}/>
				<Favicon/>
				<ThemeProvider theme={props.themes.dark}>
					<StyledNavigationBox enabled={props.navigationEnabled}>
						{
							props.navigationEnabled &&
								<Navigation/>
						}
					</StyledNavigationBox>
				</ThemeProvider>
				<StyledContentContainer>
					<StyledContent navigationEnabled={props.navigationEnabled}>
						<StyledMessageBox>
							<Message/>
						</StyledMessageBox>
						{props.children}
						{props.searchEnabled &&
							<ThemeProvider theme={props.themes.dark}>
								<StyledSearchBox>
									<StyledSearchFrame>
										<Search/>
									</StyledSearchFrame>
								</StyledSearchBox>
							</ThemeProvider>
						}
						<ThemeProvider theme={props.themes.dark}>
							<StyledFloatingBox>
								{props.infoEnabled &&
									<StyledInfoPane>
										<InfoPane hermit={!(props.codeEnabled || props.docEnabled)}>
											<ToggleSource/>
											<ToggleDoc/>
										</InfoPane>
									</StyledInfoPane>
								}
								{props.infoEnabled && (props.codeEnabled || props.docEnabled) &&
									<StyledPane hermit={!props.infoEnabled} infoEnabled={props.infoEnabled}>
										{(props.codeEnabled && !props.docEnabled) &&
											<CodePane hermit={!props.infoEnabled}/>
										}
										{props.docEnabled &&
											<DocPane hermit={!props.infoEnabled}/>
										}
									</StyledPane>
								}
							</StyledFloatingBox>
						</ThemeProvider>
					</StyledContent>
					<ThemeProvider theme={props.themes.dark}>
						<StyledControlsBox enabled={props.navigationEnabled}>
							<StyledControlsArea orient="left">
								<StyledControlsItem>
									<ToggleNavigation/>
								</StyledControlsItem>
								<StyledControlsItem>
									<ToggleInfoPane/>
								</StyledControlsItem>
							</StyledControlsArea>
							<StyledControlsArea orient="right">
								<StyledControlsItem>
									<ToggleOpacity/>
								</StyledControlsItem>
								<StyledControlsItem>
									<Fullscreen/>
								</StyledControlsItem>
							</StyledControlsArea>
						</StyledControlsBox>
					</ThemeProvider>
				</StyledContentContainer>
			</StyledApplication>
		</ThemeProvider>
	);
}

const WIDTH = 300;
const NAVIGATION_WIDTH = props => props.enabled ? WIDTH : 0;
const TOOLBAR_HEIGHT = 60;
const ORIENTATION = props => {
	const direction = props.orient === 'right' ? 'left' : 'right';
	return `margin-${direction}: auto`;
};

const StyledApplication = styled.div`
	box-sizing: border-box;
	display: flex;
	width: 100%;
	height: 100%;
	background: ${props => props.theme.background};
`;

const StyledNavigationBox = styled(tag(['enabled'])('div'))`
	position: relative;
	z-index: 2;
	height: 100%;
	width: ${NAVIGATION_WIDTH}px;
	flex: 0 0 ${NAVIGATION_WIDTH}px;
`;

const StyledMessageBox = styled.div`
	position: absolute;
	box-sizing: border-box;
	z-index: 2;
	padding: 15px;
	width: 100%;
`;

const StyledControlsArea = styled.div`
	display: flex;
	${ORIENTATION};
`;

const StyledControlsBox = styled.div`
	display: flex;
	align-items: center;
	flex: 0 0 ${TOOLBAR_HEIGHT}px;
	position: relative;
	z-index: 2;
	box-sizing: border-box;
	height: ${TOOLBAR_HEIGHT}px;
	padding: 0 15px;
`;

const StyledControlsItem = styled.div`
	& + & {
		padding-left: 10px;
	}
`;

const StyledContent = styled.div`
	flex: 1 1 100%;
	width: 100%;
	height: calc(100% - 60px);
	position: relative;
`;

const StyledContentContainer = styled.div`
	display: flex;
	flex: 1 1 calc(100% - ${NAVIGATION_WIDTH}px);
	width: calc(100% - ${NAVIGATION_WIDTH}px);
	height: 100%;
	flex-direction: column;
	overflow: hidden;
`;

const StyledSearchBox = styled.div`
	position: absolute;
	top: 12.5vh;
	bottom: 10vh;
	right: 0;
	left: 0;
	width: 100%;
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

function meta(props) {
	return [
		{name: 'description', content: props.description},
		{name: 'viewport', content: 'width=device-width, initial-scale=1'}
	];
}

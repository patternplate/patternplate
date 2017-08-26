import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tag from 'tag-hoc';

export default function TemplateDefault(props) {
	const ExtendedStyledApplication = props.patternplateDemoStyles(
		StyledApplication,
		'root'
	);
	const ExtendedStyledNavigationContainer = props.patternplateDemoStyles(
		StyledNavigationContainer,
		'navigationContainer'
	);
	const ExtendedStyledContentContainer = props.patternplateDemoStyles(
		StyledContentContainer,
		'contentContainer'
	);

	const Sidebar = props.sidebar;

	return (
		<ExtendedStyledApplication>
			<ExtendedStyledNavigationContainer enabled={props.navigationEnabled}>
				{
					props.navigationEnabled && Sidebar
				}
			</ExtendedStyledNavigationContainer>
			<ExtendedStyledContentContainer>
				{props.children}
			</ExtendedStyledContentContainer>
		</ExtendedStyledApplication>
	);
}

TemplateDefault.propTypes = {
	children: PropTypes.any,
	sidebar: PropTypes.element,
	navigationEnabled: PropTypes.bool.isRequired,

	patternplateDemoStyles: PropTypes.func
};

TemplateDefault.defaultProps = {
	children: undefined,
	sidebar: undefined,

	patternplateDemoStyles: component => component
};

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
	flex-direction: row;
	align-items: stretch;
	justify-content: flex-start;
	background: ${props => props.theme.background};
`;

const StyledNavigationContainer = styled(tag(['enabled'])('div'))`
	position: relative;
	z-index: 2;
	width: ${NAVIGATION_WIDTH}px;
	flex: 0 0 ${NAVIGATION_WIDTH}px;
`;

const StyledContentContainer = styled.div`
	display: flex;
	flex: 1 1 calc(100% - ${NAVIGATION_WIDTH}px);
	flex-direction: column;
	overflow: hidden;
`;

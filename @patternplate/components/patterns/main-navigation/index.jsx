import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import NavigationTree from 'navigation-tree';
import NavigationToolbar from 'navigation-toolbar';
import Header from 'main-header';

export default class Navigation extends React.Component {
	constructor(...args) {
		super(...args);
		this.getRef = this.getRef.bind(this);
		this.handleScrollRequest = this.handleScrollRequest.bind(this);
	}

	handleScrollRequest(e) {
		if (!this.ref || !e.target) {
			return;
		}

		const item = e.target.getBoundingClientRect();
		const list = this.ref.getBoundingClientRect();
		const pad = getPadding(this.ref);

		if (item.bottom > list.bottom - pad('bottom')) {
			this.ref.scrollTop = e.target.offsetTop - list.height + pad('bottom') + item.height;
		}

		if (item.top < list.top + pad('top')) {
			this.ref.scrollTop = e.target.offsetTop + pad('top');
		}
	}

	getRef(ref) {
		this.ref = ref;
	}

	render() {
		const {props} = this;
		return (
			<StyledNavigation onKeyDown={this.handleKeyDown}>
				<StyledNavigationTree innerRef={this.getRef}>
					<StyledHeader
						title={props.applicationTitle}
						symbol="patternplate"
					/>
					<Documentation
						active={props.active}
						docs={props.docs}
						onScrollRequest={this.handleScrollRequest}
					/>
					<NavigationTree
						active={props.active}
						data={props.navigation.children}
						onScrollRequest={this.handleScrollRequest}
						prefix="/pattern"
					/>
				</StyledNavigationTree>
				<StyledNavigationToolbar>
					<NavigationToolbar>
						{this.props.tools}
					</NavigationToolbar>
				</StyledNavigationToolbar>
			</StyledNavigation>
		);
	}
}

Navigation.propTypes = {
	active: PropTypes.string.isRequired,
	docs: PropTypes.object.isRequired,
	navigation: PropTypes.object.isRequired,
	tools: PropTypes.arrayOf(PropTypes.element),
	applicationTitle: PropTypes.string
};

Navigation.defaultProps = {
	tools: []
};

function getPadding(el) {
	const style = global.getComputedStyle(el, null);
	return direction => parseInt(
		style.getPropertyValue(`padding-${direction}`),
		10
	);
}

const StyledHeader = styled(Header)`
	margin-bottom: 10px;
`;

const StyledNavigation = styled.div`
	display: flex;
	height: 100%;
	flex-direction: column;
	justify-content: space-between;
	position: relative;
	background: ${props => props.theme.tint}
`;

const PASSAGE_HEIGHT = 50;

const StyledNavigationTree = styled.div`
	flex-grow: 1;
	flex-shrink: 1;
	padding-bottom: 50px;
	overflow-x: hidden;
	overflow-y: scroll;
	-webkit-overflow-scroll: touch;
	mask-image: linear-gradient(
		to top,
		rgba(0,0,0,0),
		rgba(0,0,0,1) ${PASSAGE_HEIGHT}px
	);
	-webkit-mask-image: linear-gradient(
		to top,
		rgba(0,0,0,0),
		rgba(0,0,0,1) ${PASSAGE_HEIGHT}px
	);
`;

const StyledNavigationToolbar = styled.div`
	flex-grow: 0;
	flex-shrink: 0;
`;

function Documentation(props) {
	return (
		<StyledDocumentationTree
			active={props.active}
			className="docs-navigation"
			data={props.docs.children}
			onScrollRequest={props.onScrollRequest}
			prefix="/doc"
		/>
	);
}

Documentation.propTypes = {
	active: PropTypes.string.isRequired,
	docs: PropTypes.object.isRequired,
	onScrollRequest: PropTypes.func.isRequired
};

const StyledDocumentationTree = styled(NavigationTree)`
	margin-bottom: 5px;
	border-bottom: 1px solid ${props => props.theme.border};
	padding-bottom: 5px;
`;

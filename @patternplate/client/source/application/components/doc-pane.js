import React from 'react';
import styled from 'styled-components';

import Markdown from './common/markdown';

export default DocPane;

function DocPane(props) {
	return (
		<StyledDocPane className={props.className} hermit={props.hermit}>
			<StyledScrollbox>
				<Markdown source={props.doc} linkable={false}/>
			</StyledScrollbox>
		</StyledDocPane>
	);
}

const BORDER_RADIUS = 10;

const StyledDocPane = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	&::before {
		content: '';
		position: absolute;
		z-index: 1;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: ${props => props.hermit ? `${BORDER_RADIUS}px` : `0 ${BORDER_RADIUS}px ${BORDER_RADIUS}px 0`};
		background: ${props => props.theme.tint};
	}
`;

const StyledScrollbox = styled.div`
	position: relative;
	z-index: 2;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	overflow: scroll;
	-webkit-overflow-scrolling: touch;
	padding: 10px 15px;
`;

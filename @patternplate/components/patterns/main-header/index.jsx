import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from 'icon';

export default function MainHeader(props) {
	const icon = props.image ?
		props.image :
		<StyledHeaderLogo symbol="patternplate"/>;

	return (
		<StyledMainHeader
			className={props.className}
			title={props.title}
		>
			{icon}
			{props.title &&
				<span>
					{props.title}
				</span>
			}
		</StyledMainHeader>
	);
}

const StyledMainHeader = styled.div`
	width: 100%;
	height: auto;
	color: ${props => props.theme.color};
	${props => !props.image && `
		display: flex;
		padding: 10px 15px;
		background: ${props.theme.active};
		align-items: center;
		justify-content: center;
	`}
`;

const StyledHeaderLogo = styled(Icon)`
	fill: currentColor;
	stroke: currentColor;
	stroke-width: 0;
	${props => props.title && `
		margin-right: 5px;
	`}
`;

MainHeader.propTypes = {
	title: PropTypes.string,
	image: PropTypes.node,
	className: PropTypes.string
};

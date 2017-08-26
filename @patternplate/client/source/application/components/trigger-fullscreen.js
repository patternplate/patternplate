import React, {PropTypes as t} from 'react';
import styled from 'styled-components';

import Icon from './common/icon';
import Link from './common/link';

export default Fullscreen;

function Fullscreen(props) {
	return (
		<StyledLink
			external
			title={`Open pattern demo for "${props.id}" in a new tab`}
			href={props.href}
			>
			<StyledIcon symbol="fullscreen"/>
			Open pattern demo for "${props.id}" in a new tab
		</StyledLink>
	);
}

Fullscreen.propTypes = {
	active: t.bool,
	href: t.string,
	id: t.string
};

const StyledIcon = styled(Icon)`
	fill: ${props => props.theme.tint};
`;

const StyledLink = styled(Link)`
	font-size: 0;
	line-height: 0;
`;

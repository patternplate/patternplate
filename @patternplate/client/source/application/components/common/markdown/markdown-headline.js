import React, {PropTypes as t} from 'react';
import styled from 'styled-components';

import Icon from '../icon';
import Link from '../link';
import Text from '../../text';

const SIZES = {
	h1: 36,
	h2: 27,
	h3: 23,
	h4: 18,
	h5: 18,
	h6: 18
};

const StyledLink = styled(Link)`
	position: absolute;
	right: 100%;
	top: 50%;
	transform: translateY(-50%);
	font-size: 0;
	line-height: 0;
	padding-right: 10px;
	color: ${props => props.theme.color};
	display: none;
	&:hover {
		display: block;
	}
`;

const ThemedIcon = styled(Icon)`
	fill: ${props => props.theme.color};
	&:hover {
		fill: ${props => props.theme.active};
	}
`;

export default styled(MarkdownHeadline)`
	position: relative;
	color: ${props => props.theme.color};
	font-size: ${props => SIZES[props.is]}px;
	margin: 60px 0 16px 0;
	font-weight: 300;
	line-height: 1.25;
	&:hover ${StyledLink} {
		display: block;
	}
	&:first-child {
		margin-top: 0;
	}
`;

function MarkdownHeadline(props) {
	const children = Array.isArray(props.children) ? props.children.join('') : props.children;
	const id = encodeURIComponent((children || '').split(' ').join('-').toLowerCase());

	return (
		<Text is={props.is} className={props.className} id={id}>
			{props.children}
			{props.linkable &&
				<MarkdownHeadlineLink name={children} id={id}>
					<Icon size="s" symbol="anchor"/>
				</MarkdownHeadlineLink>
			}
		</Text>
	);
}

MarkdownHeadline.propTypes = {
	is: t.string,
	children: t.any.isRequired,
	className: t.string
};

function MarkdownHeadlineLink(props) {
	return (
		<StyledLink title={`Link to "${props.name}"`} hash={props.id}>
			<ThemedIcon symbol="anchor" size="s"/>
			Link to id
		</StyledLink>
	);
}

MarkdownHeadlineLink.propTypes = {
	id: t.string.isRequired,
	name: t.string.isRequired
};

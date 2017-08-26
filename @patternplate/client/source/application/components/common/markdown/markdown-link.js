import url from 'url';
import queryString from 'query-string';
import React from 'react';
import styled from 'styled-components';
import Link from '../link';
export default MarkdownLink;

function MarkdownLink(props) {
	const parsed = url.parse(props.href || './');
	const abs = absolute(props.href);
	const href = abs ? props.href : parsed.pathname;
	const query = abs ? {} : queryString.parse(parsed.query);

	return (
		<StyledLink
			external={abs}
			href={href}
			query={query}
			>
			{props.children}
		</StyledLink>
	);
}

const StyledLink = styled(Link)`
	font-size: 18px;
	line-height: 27px;
	color: ${props => props.theme.color};
	text-decoration: none;
	&:link, &:visited {
		color: ${props => props.theme.active};
	}
	&:hover, &:active {
		text-decoration: underline;
	}
`;

function absolute(href) {
	const parsed = url.parse(href || './');
	if (parsed.protocol) {
		return true;
	}
	if (href.startsWith('/api/static/')) {
		return true;
	}
}

import React, {PropTypes as t} from 'react';
import textContent from 'react-addons-text-content';
import styled from 'styled-components';

import Text from '../../text';

export default styled(MarkdownBlockquote)`
	margin: 0 0 16px 0;
	font-size: 18px;
	line-height: 27px;
	padding-left: 18px;
	border-left: 4.5px solid ${props => props.theme.recess};
	color: ${props => props.theme.recess};
`;

function MarkdownBlockquote(props) {
	return (
		<Text className={props.className} is="blockquote">
			{textContent(props.children)}
		</Text>
	);
}

MarkdownBlockquote.propTypes = {
	children: t.any.isRequired,
	className: t.string
};

import React, {PropTypes as t} from 'react';
import styled from 'styled-components';

import Text from '../../text';

export default styled(MarkdownItem)`
	font-size: 18px;
	line-height: 27px;
	color: ${props => props.theme.color};
	margin-top: 4.5px;
`;

function MarkdownItem(props) {
	return (
		<Text className={props.className} is="li">
			{props.children}
		</Text>
	);
}

MarkdownItem.propTypes = {
	children: t.any.isRequired,
	className: t.string
};

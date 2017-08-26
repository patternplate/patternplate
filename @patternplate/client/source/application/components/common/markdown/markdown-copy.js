import React, {PropTypes as t} from 'react';
import styled from 'styled-components';

import Text from '../../text';

export default styled(MarkdownCopy)`
	margin: 0 0 16px 0;
	font-size: 18px;
	line-height: 27px;
	color: ${props => props.theme.color};
`;

function MarkdownCopy(props) {
	return (
		<Text className={props.className} is="p">
			{props.children}
		</Text>
	);
}

MarkdownCopy.propTypes = {
	children: t.any.isRequired,
	className: t.string
};

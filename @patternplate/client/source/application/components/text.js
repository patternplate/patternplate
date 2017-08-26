import React, {PropTypes as t} from 'react';
import styled from 'styled-components';
import tag from 'tag-hoc';

export default Text;

function Text(props) {
	return (
		<StyledText
			is={props.is}
			className={props.className}
			>
			{props.children}
		</StyledText>
	);
}

Text.propTypes = {
	is: t.string,
	className: t.string,
	children: t.string.isRequired,
	size: t.oneOf(['s', 'm', 'l']).isRequired
};

const StyledText = styled(tag(['size'])('div'))`
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

import React from 'react';
import styled from 'styled-components';

export default Message;

function Message(props) {
	return (
		<StyledMessage>
			<StyledMessageContent>
				{props.message}
			</StyledMessageContent>
		</StyledMessage>
	);
}

const StyledMessage = styled.div`
	background: ${props => props.theme.error};
	box-sizing: border-box;
	width: 100%;
	padding: 10px 20px;
`;

const StyledMessageContent = styled.pre`
	color: #fff;
`;

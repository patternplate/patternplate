import React from "react";
import { styled } from "@patternplate/components";

export default Message;

function Message(props) {
  return (
    <StyledMessage>
      <StyledMessageContent>
        {props.message}
        {props.details && (
          <StyledDetails>
            {props.summary && <StyledSummary>{props.summary}</StyledSummary>}
            {props.details}
          </StyledDetails>
        )}
      </StyledMessageContent>
    </StyledMessage>
  );
}

const StyledMessage = styled.div`
  background: ${props => props.theme.colors.error};
  box-sizing: border-box;
  width: 100%;
  padding: 10px 20px;
`;

const StyledMessageContent = styled.pre`
  color: #fff;
  max-height: calc(100vh - 160px);
  overflow: scroll;
`;

const StyledDetails = styled.details`
  margin: 10px 0;
`;

const StyledSummary = styled.summary`
  outline: none;
  cursor: pointer;
  user-select: none;
`;

import * as React from "react";
import styled from "styled-components";
import tag from "tag-hoc";

export interface TextProps {
  is?: string;
  className?: string;
}

export const Text: React.SFC<TextProps> = props => {
  return (
    <StyledText is={props.is} className={props.className}>
      {props.children}
    </StyledText>
  );
}

const StyledText = styled(tag(["size"])("div"))`
  font-family: ${props => props.theme.fonts.default};
  color: ${props => props.theme.colors.color};
`;

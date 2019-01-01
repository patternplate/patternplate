import * as React from "react";
import styled from "styled-components";
import { Text } from "@patternplate/component-text";

export interface MarkdownItemProps {
  className?: string;
}

export const MarkdownItem: React.SFC<MarkdownItemProps> = function MarkdownItem(props) {
  return (
    <StyledItem>
      <Text>
        {props.children}
      </Text>
    </StyledItem>
  );
}

const StyledItem = styled.li`
  grid-column: first / span 12;
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.colors.color};
  margin-top: 4.5px;
`;


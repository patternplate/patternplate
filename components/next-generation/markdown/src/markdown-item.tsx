import * as React from "react";
import styled from "styled-components";

import { Text } from "@patternplate/component-text";

export interface MarkdownItemProps {
  className?: string;
}

const InnerMarkdownItem: React.SFC<MarkdownItemProps> = (props) => {
  return (
    <li className={props.className}>
      <Text>
        {props.children}
      </Text>
    </li>
  );
}

export const MarkdownItem = styled(InnerMarkdownItem)`
  grid-column: first / span 12;
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.colors.color};
  margin-top: 4.5px;
`;



import * as React from "react";
import styled from "styled-components";
import { Text } from "@patternplate/component-text";

export const MarkdownCopy = styled(InnerMarkdownCopy)`
  grid-column: first / span 12;
  margin: 0 0 16px 0;
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.colors.color};
`;

function InnerMarkdownCopy(props) {
  return (
    <Text is="p" className={props.className}>
      {props.children}
    </Text>
  );
}

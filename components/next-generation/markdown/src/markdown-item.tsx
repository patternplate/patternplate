import * as React from "react";
import styled from "styled-components";

import { Text } from "@patternplate/component-text";

export const MarkdownItem = styled(InnerMarkdownItem)`
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.colors.color};
  margin-top: 4.5px;
`;

function InnerMarkdownItem(props) {
  return (
    <Text className={props.className} is="li">
      {props.children}
    </Text>
  );
}

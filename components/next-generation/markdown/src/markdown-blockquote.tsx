import * as React from "react";
import styled from "styled-components";
import { Text } from "@patternplate/component-text";

export interface MarkdownBlockquoteProps {
  className?: string;
  children: React.ReactNode;
}

const InnerMarkdownBlockquote: React.SFC<MarkdownBlockquoteProps> = props => {
  return (
    <Text className={props.className} is="blockquote">
      {props.children}
    </Text>
  );
};

export const MarkdownBlockquote = styled(InnerMarkdownBlockquote)`
  margin: 0 0 16px 0;
  font-size: 18px;
  line-height: 27px;
  padding-left: 18px;
  border-left: 4.5px solid ${props => props.theme.colors.recess};
  color: ${props => props.theme.colors.recess};
`;

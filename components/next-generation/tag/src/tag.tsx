import * as React from "react";
import styled from "styled-components";

import { Text } from "@patternplate/component-text";

export interface InnerTagProps {
  className?: string;
  children?: React.ReactNode;
}

const InnerTag = (props: InnerTagProps) => <Text className={props.className}>{props.children}</Text>;

export interface TagProps extends InnerTagProps {}

export const Tag = styled(InnerTag)<TagProps>`
  display: inline-block;
  padding: 2px 4px;
  margin-top: 1.5px;
  margin-bottom: 1.5px;
  color: ${props => props.theme.colors.color};
  border: 1px solid ${props => props.theme.colors.color};
  border-radius: 3px;
  &:link,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${props => props.theme.colors.color};
  }
  &:nth-child(2n) {
    margin-left: 3px;
  }
`;

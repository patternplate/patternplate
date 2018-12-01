import * as React from "react";
import styled from "styled-components";
import { Text } from "@patternplate/component-text";

export interface TextProps {
  is?: string;
  className?: string;
}

const ORDERS = {
  0: 72,
  1: 36,
  2: 27,
  3: 23,
  4: 18
};

interface InnerHeadlineProps {
  id?: string;
  is?: string;
  className?: string;
}

const InnerHeadline: React.SFC<InnerHeadlineProps> = props => {
  const is = props.is || 'h1';
  return <Text is={is} className={props.className} id={props.id}>{props.children}</Text>;
};

export interface HeadlineProps {
  id?: string;
  is?: string;
  className?: string;
  order: keyof typeof ORDERS;
}

export const Headline = styled(InnerHeadline)`
  color: ${(props: HeadlineProps & { theme?: any }) => props.theme.colors.color};
  font-size: ${props => ORDERS[props.order]}px;
  font-family: ${props => props.theme.fonts.headline};
  margin: 60px 0 16px 0;
  font-weight: 300;
  line-height: 1.25;
`;

import * as React from "react";
import styled from "styled-components";
import { Headline } from "@patternplate/component-headline";
import { Text } from "@patternplate/component-text";

const PrincipleContainer = styled.div`
  box-sizing: border-box;
  margin: 0 10px;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 700px) {
    &:not(:last-child) {
      border: 1px solid rgba(0, 0, 0, 0.1);
      margin: 0;
      padding: 15px 20px;
    }
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0;
    padding: 15px 20px;
  }
`;

export const Principle = props => (
  <PrincipleContainer>{props.children}</PrincipleContainer>
);

export const PrincipleTitle = styled(Headline)`
  margin: 0;
  grid-row: headline;
`;

export const PrincipleText = styled(Text)`
  grid-row: text;
`;

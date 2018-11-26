import * as React from "react";
import styled from "styled-components";
import { Themer } from "@patternplate/component-utility";
import { Icon, symbols } from "./icon";

function DemoIcon(props) {
  return (
    <StyledDemoIcon title={props.title}>
      <Icon symbol={props.symbol} />
    </StyledDemoIcon>
  );
}

export default function IconDemo() {
  return (
    <Themer spacing={true}>
      <StyledIconDemo>
        {symbols.map(symbol => (
          <DemoIcon key={symbol} symbol={symbol} title={symbol} />
        ))}
      </StyledIconDemo>
    </Themer>
  );
}

const TITLE = props => props.title;

const StyledDemoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 10px;
  color: ${props => props.theme.colors.color};
  &::after {
    content: '${TITLE}';
    display: block;
    font-family: sans-serif;
    margin-left: 10px;
  }
`;

const StyledIconDemo = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme.colors.color};
`;

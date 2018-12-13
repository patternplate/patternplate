import * as React from "react";
import styled from "styled-components";
import { Themer } from "@patternplate/component-utility";
import { Flag } from "./flag"

export default () => {
  return (
    <Themer spacing={true}>
      <FlagDemo/>
    </Themer>
  );
}

export function FlagDemo() {
  return (
    <FlagDemoContainer>
      <Flag>alpha</Flag>
      <Flag>beta</Flag>
      <Flag>rc</Flag>
      <Flag>stable</Flag>
      <Flag>deprecated</Flag>
    </FlagDemoContainer>
  );
}

const FlagDemoContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: ${props => props.theme.colors.background};
  > * {
    margin-right: 10px;
  }
`;

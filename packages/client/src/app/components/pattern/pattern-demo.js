import React from "react";
import { styled } from "@patternplate/components";

const StyledDemo = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

function PatternDemo(props) {
  return <StyledDemo src={props.src} />;
}

export default PatternDemo;

import React from "react";
import { styled } from "@patternplate/components";

const StyledDemo = styled.iframe`
  width: 100%;
  height: calc(100% - 30vh);
  border: 0;
`;

function PatternDemo(props) {
  const src = typeof props.updated === "number"
    ? `${props.src}?reload=${props.updated}`
    : props.src;

  return <StyledDemo
    src={src}
    referrerpolicy="no-referrer"
    sandbox="allow-scripts"
    />;
}

export default PatternDemo;

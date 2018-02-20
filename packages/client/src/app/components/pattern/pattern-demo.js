import React from "react";
import { styled } from "@patternplate/components";

const StyledDemo = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

function PatternDemo(props) {
  const src = typeof props.updated === "number"
    ? `${props.src}?reload=${props.updated}`
    : props.src;

  return <StyledDemo src={src} />;
}

export default PatternDemo;

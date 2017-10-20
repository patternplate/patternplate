import React from "react";
import { styled } from "@patternplate/components";
import tag from "tag-hoc";

export default Text;

function Text(props) {
  return (
    <StyledText is={props.is} className={props.className}>
      {props.children}
    </StyledText>
  );
}

const StyledText = styled(tag(["size"])("div"))`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

import React from "react";
import { styled } from "@patternplate/components";

const StyledDemo = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

class PatternDemo extends React.Component {
  render() {
    const { props } = this;
    return <StyledDemo srcDoc={props.contents} seamless />;
  }
}

export default PatternDemo;

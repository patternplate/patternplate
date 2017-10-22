import React from "react";
import { styled } from "@patternplate/components";

const StyledDemo = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const SUPPORTS = check();

class PatternDemo extends React.Component {
  constructor() {
    super();
    this.saveRef = this.saveRef.bind(this);
  }

  componentDidMount() {
    console.log(this.ref);
  }

  saveRef(ref) {
    this.ref = ref;
  }

  render() {
    const { props } = this;
    return SUPPORTS ? (
      <StyledDemo srcDoc={props.contents} seamless />
    ) : (
      <StyledDemo src={props.src} seamless />
    );
  }
}

export default PatternDemo;

function check() {
  if (!global.document) {
    return false;
  }
  return "srcdoc" in document.createElement("iframe");
}

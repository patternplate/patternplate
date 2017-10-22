import React from "react";
import { styled } from "@patternplate/components";

const StyledDemo = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

class PatternDemo extends React.Component {
  constructor() {
    super();
    this.saveRef = this.saveRef.bind(this);
    this.state = {
      srcDoc: false
    };
  }

  componentDidMount() {
    this.setState({
      srcDoc: check()
    });
  }

  saveRef(ref) {
    this.ref = ref;
  }

  render() {
    const { props } = this;
    return <StyledDemo srcDoc={props.contents} seamless />;
  }
}

export default PatternDemo;

function check() {
  if (!global.document) {
    return false;
  }
  return "srcdoc" in document.createElement("iframe");
}

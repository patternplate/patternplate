import React from "react";
import { styled } from "@patternplate/components";
import { findDOMNode } from "react-dom";
import Helmet from "react-helmet";
import Markdown from "../containers/markdown";

export default class Documentation extends React.Component {
  componentWillUpdate(nextProps) {
    const {props} = this;
    const changed = props.location.pathname !== nextProps.location.pathname;
    if (changed && typeof props.requestScroll === "function") {
      props.requestScroll(findDOMNode(this.ref));
    }
  }

  render () {
    const {props} = this;
    return (
      <StyledDocumentation ref={ref => this.ref = ref}>
        <div id="doctop"/>
        <Helmet
          title={props.displayName}
          />
        <Markdown
          linkable
          source={props.doc}
          />
      </StyledDocumentation>
    );
  }
}

const StyledDocumentation = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  max-width: 860px;
  padding: 80px 15px 15px 15px;
  @media screen and (min-width: 720px) {
    padding: 60px;
  }
`;

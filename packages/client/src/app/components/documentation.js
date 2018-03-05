import React from "react";
import { styled } from "@patternplate/components";
import Markdown from "../containers/markdown";

export default function Documentation(props) {
  return (
    <StyledDocumentation>
      <Markdown
        linkable
        source={props.doc}
        widgets={props.widgets}
        />
    </StyledDocumentation>
  );
}

const StyledDocumentation = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  width: 100%;
  max-width: 860px;
  padding: 60px;
`;

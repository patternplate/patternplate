import * as React from "react";
import styled from "styled-components";
import * as textContent from 'react-addons-text-content';
import { Code } from "@patternplate/component-code";

const StyledMarkdownCodeBlock = styled.div`
  grid-column: first / span 12;
  border-radius: 3px;
  font-size: 15.3px;
  line-height: 23px;
  padding: 0 16px;
  margin-bottom: 16px;
  background: ${props => props.theme.colors.backgroundSecondary};
  overflow: hidden;
`;

export interface MarkdownCodeBlockProps {
  language: string;
  highlights: number[];
}

export const MarkdownCodeBlock: React.SFC<MarkdownCodeBlockProps> = props => {
  const code = textContent(props.children);
  return (
    <StyledMarkdownCodeBlock>
      <Code
        block
        language={props.language}
        highlights={props.highlights}
        >
        {code}
      </Code>
    </StyledMarkdownCodeBlock>
  );
}

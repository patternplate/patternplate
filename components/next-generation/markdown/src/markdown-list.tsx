import styled from "styled-components";
import tag from "tag-hoc";

export const MarkdownList = styled.div`
  grid-column: first / span 12;
  margin: 0 0 16px 0;
  padding-left: 36px;
  white-space: nowrap;

  > * {
    white-space: normal;
  }
`;

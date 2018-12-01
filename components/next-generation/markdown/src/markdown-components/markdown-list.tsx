import styled from "styled-components";

export const MarkdownList = styled.ul`
  grid-column: first / span 12;
  margin: 0 0 16px 0;
  padding-left: 36px;
  white-space: nowrap;

  > * {
    white-space: normal;
  }
`;

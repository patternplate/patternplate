import styled from "styled-components";

export const MarkdownHr = styled.hr`
  height: 0.25em;
  padding: 0;
  margin: 24px 0;
  background-color: ${props => props.theme.colors.border};
  border: 0;
`;

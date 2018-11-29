import styled from "styled-components";

export const MarkdownDetails = styled.details`
  margin: 0 0 16px 0;
  font-size: 18px;
  line-height: 27px;
  font-family: ${props => props.theme.fonts.default};
  color: ${props => props.theme.colors.color};
`;

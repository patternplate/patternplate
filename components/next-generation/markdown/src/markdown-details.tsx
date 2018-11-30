import styled from "styled-components";

export const MarkdownDetails = styled.details`
  grid-column: first / span 12;
  margin: 0 0 16px 0;
  font-size: 18px;
  line-height: 27px;
  font-family: ${props => props.theme.fonts.default};
  color: ${props => props.theme.colors.color};

  summary {
    display: flex;
    align-items: center;
    > * {
      display: inline-block;
      vertical-align: middle;
      margin: 0;
    }
  }
`;

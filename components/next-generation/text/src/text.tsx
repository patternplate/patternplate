import styled from "styled-components";

export interface TextProps {
  as?: string;
  id?: string;
  className?: string;
}

export const Text = styled.div`
  font-family: ${props => props.theme.fonts.default};
  color: ${props => props.theme.colors.color};
`;

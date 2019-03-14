import styled from "styled-components";
import { Text } from "@patternplate/component-text";

export const SearchResultListHeading = styled(Text)`
  box-sizing: border-box;
  position: -webkit-sticky;
  position: sticky;
  z-index: 1;
  top: 0;
  margin: 0;
  font-size: 14px;
  padding: 3px 15px;
  border-width: 1px 0;
  border-style: solid;
  border-color: ${props => props.theme.colors.border};
  color: ${props => props.theme.colors.color};
  background: ${props => props.theme.colors.background};
`;

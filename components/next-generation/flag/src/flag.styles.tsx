import styled from "styled-components";
import * as text from "react-addons-text-content";

export const StyledText = styled.span`
  display: inline-block;
  padding: 2px 4px;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 3px;
  font-family: ${props => props.theme.fonts.default};
  ${props => {
    const color = getFlagColor(text(props.children), props.theme.colors);
    return `
			border-color: ${color};
			color: ${color};
		`;
  }};
`;

function getFlagColor(flag, theme) {
  switch (flag) {
    case "alpha":
      return theme.error;
    case "beta":
      return theme.warning;
    case "rc":
      return theme.info;
    case "stable":
      return theme.success;
    case "deprecated":
      return theme.error;
    default:
      return theme.error;
  }
}

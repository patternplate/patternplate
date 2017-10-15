const React = require("react");
const styled = require("styled-components").default;
const text = require("react-addons-text-content");
const fonts = require("../fonts");

const FONTS = fonts();

module.exports = Flag;

function Flag(props) {
  return <StyledText className={props.className}>{props.children}</StyledText>;
}

const StyledText = styled.span`
  display: inline-block;
  padding: 2px 4px;
  border: 1px solid ${props => props.theme.border};
  border-radius: 3px;
  font-family: ${FONTS.default};
  ${props => {
    const color = getFlagColor(text(props.children), props.theme);
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

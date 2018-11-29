const React = require("react");
const styled = require("styled-components").default;
const tag = require('tag-hoc').default;

module.exports = Text;

function Text(props) {
  return (
    <StyledText is={props.is} className={props.className}>
      {props.children}
    </StyledText>
  );
}

const StyledText = styled(tag(["size"])("div"))`
  font-family: ${props => props.theme.fonts.default};
  color: ${props => props.theme.colors.color};
`;

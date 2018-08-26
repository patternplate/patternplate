const React = require("react");
const styled = require("styled-components").default;
const tag = require("tag-hoc").default;

const Icon = require("../icon");
const Link = require("../link");

function Button(props) {
  const OuterElement =
    props.type === "link"
      ? tag(["external", "type"])(Link)
      : tag(["external"])("button");

  return (
    <OuterElement
      className={props.className}
      title={props.title}
      onClick={props.onClick}
      external={props.external}
      href={props.href}
      type={props.type}
    >
      {props.children && <StyledLabel>{props.children}</StyledLabel>}
      {props.symbol && <StyledIcon symbol={props.symbol} />}
    </OuterElement>
  );
}

Button.defaultProps = {
  type: "button"
};

const StyledLabel = styled.span`
  font-family: ${props => props.theme.fonts.default};
`;

const FRAME = props =>
  !props.frameless &&
  `
  padding: 4px;
  border: 1px solid currentColor;
  background: green;
`;

const TRANSPARENCY = props =>
  props.transparent &&
  `
  background: transparent;
`;

const StyledButton = styled(Button)`
  appearance: none;
  display: inline-flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: none;
  outline: 0;
  background: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.color};
  font: inherit;
  box-sizing: border-box;
  vertical-align: top;
  ${FRAME};
  ${TRANSPARENCY};
`;

const StyledIcon = styled(Icon)`
  &:not(:first-child) {
    margin-left: 5px;
  }
`;

module.exports = StyledButton;

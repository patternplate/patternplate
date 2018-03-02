const React = require("react");
const styled = require("styled-components").default;

const Text = require("../text");

module.exports = styled(props => <Text className={props.className}>{props.children}</Text>)`
  display: inline-block;
  padding: 2px 4px;
  margin-top: 1.5px;
  margin-bottom: 1.5px;
  color: ${props => props.theme.color};
  border: 1px solid ${props => props.theme.color};
  border-radius: 3px;
  &:link,
  &:visited,
  &:active {
    text-decoration: none;
    color: ${props => props.theme.color};
  }
  &:nth-child(2n) {
    margin-left: 3px;
  }
`;

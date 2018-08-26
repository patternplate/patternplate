const React = require("react");
const styled = require("styled-components").default;

const Text = require("../text");

const ORDERS = {
  0: 72,
  1: 36,
  2: 27,
  3: 23,
  4: 18
};

const Headline = props => {
  const is = props.is || 'h1';
  return <Text is={is} className={props.className}>{props.children}</Text>;
};

module.exports = styled(Headline)`
  color: ${props => props.theme.colors.color};
  font-size: ${props => ORDERS[props.order]}px;
  font-family: ${props => props.theme.fonts.headline};
  margin: 60px 0 16px 0;
  font-weight: 300;
  line-height: 1.2;
`;

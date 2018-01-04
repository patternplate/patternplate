const React = require('react');
const styled = require("styled-components").default;

const Text = require('../text');

module.exports = styled(MarkdownCopy)`
  margin: 0 0 16px 0;
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.color};
`;

function MarkdownCopy(props) {
  return (
    <Text is="p" className={props.className}>
      {props.children}
    </Text>
  );
}

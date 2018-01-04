const React = require('react');
const textContent = require('react-addons-text-content');
const styled = require("styled-components").default;

const Text = require('../text');

module.exports = styled(MarkdownBlockquote)`
  margin: 0 0 16px 0;
  font-size: 18px;
  line-height: 27px;
  padding-left: 18px;
  border-left: 4.5px solid ${props => props.theme.recess};
  color: ${props => props.theme.recess};
`;

function MarkdownBlockquote(props) {
  return (
    <Text className={props.className} is="blockquote">
      {textContent(props.children)}
    </Text>
  );
}

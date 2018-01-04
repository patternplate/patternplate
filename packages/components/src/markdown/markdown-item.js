const React = require('react');
const styled = require('styled-components').default;

const Text = require('../text');

module.exports = styled(MarkdownItem)`
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.color};
  margin-top: 4.5px;
`;

function MarkdownItem(props) {
  return (
    <Text className={props.className} is="li">
      {props.children}
    </Text>
  );
}

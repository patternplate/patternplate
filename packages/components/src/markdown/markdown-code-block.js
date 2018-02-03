const React = require('react');
const textContent = require('react-addons-text-content');
const styled = require("styled-components").default;
const Code = require('../code');

module.exports = styled(MarkdownCodeBlock)`
  background: ${props => props.theme.backgroundSecondary};
  border-radius: 3px;
  font-size: 15.3px;
  line-height: 23px;
  padding: 16px;
  margin-bottom: 16px;
`;

function MarkdownCodeBlock(props) {
  const lang = getLanguage(props.children);
  const code = textContent(props.children);
  return (
    <Code block className={props.className} language={lang}>
      {code}
    </Code>
  );
}

function getLanguage(children) {
  const [child] = children;
  if (!child) {
    return null;
  }
  const className = child.props.className;
  if (!className) {
    return null;
  }
  return className
    .split(" ")
    .map(n => n.replace("language-", ""))
    .find(n => typeof n === "string" && n.length > 0);
}

const React = require('react');
const textContent = require('react-addons-text-content');
const styled = require("styled-components").default;
const Code = require('../code');

module.exports = styled(MarkdownCodeBlock)`
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: 3px;
  font-size: 15.3px;
  line-height: 23px;
  padding: 16px;
  margin-bottom: 16px;
`;

function MarkdownCodeBlock(props) {
  const langs = getLanguages(props.children);
  const code = textContent(props.children);
  return (
    <Code block className={props.className} language={langs[0]}>
      {code}
    </Code>
  );
}

function getLanguages(children) {
  const [child] = children;
  if (!child) {
    return [];
  }
  const className = child.props.className;
  if (!className) {
    return [];
  }
  return className
    .split(" ")
    .map(n => n.replace("language-", ""))
    .find(n => typeof n === "string" && n.length > 0)
    .split(":");
}

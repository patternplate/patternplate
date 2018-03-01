const React = require("react");
const MarkdownItem = require("../../markdown/markdown-item");
const MarkdownList = require("../../markdown/markdown-list");
const MarkdownLink = require("../../markdown/markdown-link");

module.exports = PatternList;

function PatternList(props) {
  const matches = props.search(props.query);
  return (
    <MarkdownList>
      {matches.map(item => <PatternItem key={item.id} {...item}/>)}
    </MarkdownList>
  );
}

PatternList.defaultProps = {
  items: []
};

function PatternItem(props) {
  const name = props.manifest.displayName || props.manifest.name;
  return (
    <MarkdownItem>
      <MarkdownLink
        href={props.href}
        title={`Open pattern ${name}`}>
        {name}
      </MarkdownLink>
    </MarkdownItem>
  );
}

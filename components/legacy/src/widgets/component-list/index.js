const React = require("react");

const { MarkdownItem, MarkdownList, MarkdownLink } = require("@patternplate/component-markdown");

module.exports = PatternList;

function PatternList(props) {
  const matches = props.search(props.query);
  return (
    <MarkdownList onClick={props.onClick}>
      {matches.map(item => <PatternItem
        key={item.id}
        {...item}
        />)}
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
      <div data-type={props.contentType} data-id={props.id}>
        <MarkdownLink
          href={props.href}
          title={`Open pattern ${name}`}
          >
          {name}
        </MarkdownLink>
      </div>
    </MarkdownItem>
  );
}

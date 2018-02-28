const React = require("react");

module.exports = PatternList;

function PatternList(props) {
  return (
    <ul>
      {props.items.map(item => <PatternItem key={item.id} {...item}/>)}
    </ul>
  );
}

PatternList.defaultProps = {
  items: []
};

function PatternItem(props) {
  return <li>Item</li>;
}

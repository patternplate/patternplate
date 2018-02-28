const React = require("react");
const PatternList = require(".");

module.exports = PatternListDemo;

const ITEMS = [
  {
    id: 'one'
  },
  {
    id: 'two'
  }
];

function PatternListDemo() {
  return (
    <div>
      <PatternList items={ITEMS}/>
    </div>
  );
}

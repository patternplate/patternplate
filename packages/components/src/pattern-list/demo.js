const React = require("react");
const PatternList = require(".");

module.exports = PatternListDemo;

const ITEMS = [
  {
    id: 'one',
    href: '#one',
    manifest: {
      name: 'one',
      displayName: 'One'
    }
  },
  {
    id: 'two',
    href: '#two',
    manifest: {
      name: 'two'
    }
  }
];

function PatternListDemo() {
  return (
    <div>
      <PatternList search={() => ITEMS}/>
    </div>
  );
}

const React = require("react");
const PatternList = require(".");
const DemoThemer = require("../../demo-themer");

module.exports.default = PatternListDemo;

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
    <DemoThemer spacing>
      <PatternList search={() => ITEMS}/>
    </DemoThemer>
  );
}

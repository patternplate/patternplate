const React = require("react");
const PatternList = require(".");
const { Themer } = require("@patternplate/component-utility");

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
    <Themer spacing>
      <PatternList search={() => ITEMS}/>
    </Themer>
  );
}

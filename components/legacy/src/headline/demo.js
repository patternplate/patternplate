const React = require("react");
const Headline = require(".");
const DemoThemer = require("../demo-themer");

module.exports.default = HeadlineDemo;

const TEXT = `Lorem ipsum dolor sit amet, consectetur adipisicing elit`;

function HeadlineDemo() {
  return (
    <DemoThemer spacing>
      <Headline as="h1" order={1}>{TEXT}</Headline>
      <Headline as="h2" order={2}>{TEXT}</Headline>
      <Headline as="h3" order={3}>{TEXT}</Headline>
      <Headline as="h4" order={4}>{TEXT}</Headline>
    </DemoThemer>
  );
}

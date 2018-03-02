const React = require("react");
const Headline = require(".");

module.exports = HeadlineDemo;

const TEXT = `Lorem ipsum dolor sit amet, consectetur adipisicing elit`;

function HeadlineDemo() {
  return (
    <React.Fragment>
      <Headline is="h1" order={1}>{TEXT}</Headline>
      <Headline is="h2" order={2}>{TEXT}</Headline>
      <Headline is="h3" order={3}>{TEXT}</Headline>
      <Headline is="h4" order={4}>{TEXT}</Headline>
    </React.Fragment>
  );
}

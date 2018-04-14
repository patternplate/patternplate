const React = require("react");
const Code = require(".");
const styled = require("styled-components").default;
const Themer = require("../demo-themer");

module.exports.default = function CodeDemo() {
  return (
    <Themer spacing={true}>
      <Code language="js">const foo = bar</Code>
    </Themer>
  );
};

const React = require("react");
const CodePane = require(".");
const styled = require("styled-components").default;
const Themer = require("../demo-themer");

module.exports.default = function CodeDemo() {
  return (
    <Themer spacing={true}>
      <CodePane source={`<div class="foo">Bar</div>`} />
    </Themer>
  );
};

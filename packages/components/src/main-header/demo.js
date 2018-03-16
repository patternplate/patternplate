const React = require("react");
const Pattern = require(".");
const Themer = require("../demo-themer");

module.exports.default = function MainHeaderDemo() {
  return (
    <Themer>
      <Pattern title="Patternplate!" />
    </Themer>
  );
};

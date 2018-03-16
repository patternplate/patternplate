const React = require("react");
const Text = require(".");
const Themer = require("../demo-themer");

module.exports.default = function TextDemo() {
  return (
    <Themer>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
        dignissimos, iure? Odit sapiente earum officia similique distinctio
        veritatis itaque quidem eius dolorem voluptatem, iste beatae dolores
        praesentium quaerat, quae deleniti.
      </Text>
    </Themer>
  );
};

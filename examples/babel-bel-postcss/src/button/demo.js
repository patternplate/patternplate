const {button} = require(".");

module.exports.default = ButtonDemo;

function ButtonDemo() {
  const onClick = () => console.log(`Button clicked`);
  return button({onClick});
}

const {button} = require(".");

module.exports = ButtonDemo;

function ButtonDemo() {
  const onClick = () => console.log(`Button clicked`);
  return button({onClick});
}

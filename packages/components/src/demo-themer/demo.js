const React = require("react");
const Themer = require(".");

module.exports = ThemerDemo;

function ThemerDemo() {
  return (
    <div>
      <Themer>
        <p>Lorem Ipsum</p>
      </Themer>
    </div>
  );
}

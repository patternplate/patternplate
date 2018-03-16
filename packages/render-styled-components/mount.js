var React = require("react"); // eslint-disable-line no-var
var ReactDOM = require("react-dom"); // eslint-disable-line no-var

module.exports = mount;

function mount(input) {
  ReactDOM.hydrate(
    React.createElement(input.default),
    input.element
  );
}

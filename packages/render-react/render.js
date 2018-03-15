const React = require("react");
const ReactDOMServer = require("react-dom/server");

module.exports = render;

function render(input) {
  const component = React.createElement(input.default || input);
  const html = ReactDOMServer.renderToString(component);

  const result = { html };

  if (typeof input.css === "function") {
    result.css = input.css();
  }

  return result;
}

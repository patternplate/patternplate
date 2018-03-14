const React = require("react");
const ReactDOMServer = require("react-dom/server");

module.exports = render;

function render(input) {
  const component = React.createElement(input.default || input);
  const html = ReactDOMServer.renderToString(component);

  const css = typeof input.css !== 'undefined' && Boolean(input.css)
    ? input.css
    : undefined;

  return { html, css };
}

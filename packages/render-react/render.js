const React = require("react");
const ReactDOMServer = require("react-dom/server");

module.exports = render;

function render(Component) {
  const component = React.createElement(Component.default || Component);
  const html = ReactDOMServer.renderToString(component);
  return { html, css: `<style>${Component.css}</style>` };
}

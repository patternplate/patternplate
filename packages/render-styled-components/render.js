const React = require("react");
const ReactDOMServer = require("react-dom/server");
const styled = require("styled-components");

module.exports = render;

function render(input) {
  const sheet = new styled.ServerStyleSheet();
  const component = React.createElement(input.default || input);
  const html = typeof input.html === "function"
    ? input.html()
    : ReactDOMServer.renderToString(sheet.collectStyles(component));

  return {html, head: sheet.getStyleTags()};
}

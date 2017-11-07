const React = require("react");
const ReactDOMServer = require("react-dom/server");
const styled = require("styled-components");

module.exports = render;

function render(Component) {
  const sheet = new styled.ServerStyleSheet();
  const component = React.createElement(Component);
  const html = ReactDOMServer.renderToString(sheet.collectStyles(component));
  const css = sheet.getStyleTags();
  return { html, css };
}

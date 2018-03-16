const {merge} = require("lodash");
const React = require("react");
const ReactDOMServer = require("react-dom/server");
const renderReact = require("@patternplate/render-react/render");
const styled = require("styled-components");

module.exports = render;

function render(input) {
  const html = typeof input.html === "function"
    ? input.html
    : () => {
      const sheet = new styled.ServerStyleSheet();
      const component = React.createElement(input.default);
      const html = ReactDOMServer.renderToString(sheet.collectStyles(component));
      const head = sheet.getStyleTags();
      return {html, head};
    };

  const copy = merge({}, input, {html});
  return renderReact(copy)
}

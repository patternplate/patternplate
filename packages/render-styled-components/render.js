const merge = require("lodash.merge");
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
      const addedHead = typeof input.head === 'function' ? input.head() : '';
      const head = [addedHead, sheet.getStyleTags()].join('\n');
      return {html, head};
    };

  const copy = merge({}, input, {html});
  return renderReact(copy)
}

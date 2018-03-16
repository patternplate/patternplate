const React = require("react");
const ReactDOMServer = require("react-dom/server");
const {merge} = require("lodash");
const renderDefault = require("@patternplate/render-default/render");

module.exports = render;

function render(input) {
  const html = typeof input.html === "function"
    ? input.html
    : () => ReactDOMServer.renderToString(React.createElement(input.default));

  const copy = merge({}, input, {html});
  return renderDefault(copy);
}

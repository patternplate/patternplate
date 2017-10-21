var React = require("react");
var ReactDOM = require("react-dom");
var ReactDOMServer = require("react-dom/server");
var styled = require("styled-components");
var Icon = require("./lib/icon");

module.exports.mount = mount;
module.exports.render = render;

function mount(Component, element) {
  var component = React.createElement(Component);
  ReactDOM.hydrate(component, element);
}

function render(Component) {
  var sheet = new styled.ServerStyleSheet();
  var component = React.createElement(Component);
  var html = ReactDOMServer.renderToString(sheet.collectStyles(component));
  var before = ReactDOMServer.renderToString(Icon.rewind());
  var css = sheet.getStyleTags();
  return { before, html, css };
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const component_utility_1 = require("@patternplate/component-utility");
const icon_1 = require("./icon");
function DemoIcon(props) {
    return (React.createElement(StyledDemoIcon, { title: props.title },
        React.createElement(icon_1.Icon, { symbol: props.symbol })));
}
function IconDemo() {
    return (React.createElement(component_utility_1.Themer, { spacing: true },
        React.createElement(StyledIconDemo, null, icon_1.symbols.map(symbol => (React.createElement(DemoIcon, { key: symbol, symbol: symbol, title: symbol }))))));
}
exports.default = IconDemo;
const TITLE = props => props.title;
const StyledDemoIcon = styled_components_1.default.div `
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 10px;
  color: ${props => props.theme.colors.color};
  &::after {
    content: '${TITLE}';
    display: block;
    font-family: sans-serif;
    margin-left: 10px;
  }
`;
const StyledIconDemo = styled_components_1.default.div `
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme.colors.color};
`;
//# sourceMappingURL=icon.demo.js.map
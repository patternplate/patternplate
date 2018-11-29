"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const Icons = require("./icons");
const symbol_1 = require("./symbol");
const SIZES = {
    s: "14px",
    m: "22px",
    l: "38px",
    text: ".8em"
};
const iconNames = Object.keys(Icons.icons);
__export(require("./symbol"));
exports.Icon = props => {
    const creator = typeof Icons.icons[props.symbol] === 'function'
        ? Icons.icons[props.symbol]
        : Icons.icons.placeholder;
    return (React.createElement(StyledIcon, { className: props.className, size: props.size, inline: props.inline, title: props.title },
        React.createElement(symbol_1.Symbol, { id: props.symbol, definition: creator() })));
};
exports.symbols = iconNames;
exports.Icon.defaultProps = {
    size: "m",
    symbol: "placeholder"
};
const StyledIcon = styled_components_1.default.svg `
  display: ${props => (props.inline ? "inline-flex" : "flex")};
  flex-shrink: 0;
  width: ${props => SIZES[props.size]};
  height: ${props => SIZES[props.size]};
  justify-content: center;
  align-items: center;
  color: inherit;
  fill: currentColor;
`;
//# sourceMappingURL=icon.js.map
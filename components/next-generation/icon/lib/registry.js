"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const icons_1 = require("./icons");
const symbol_1 = require("./symbol");
exports.IconRegistry = (props) => {
    return (React.createElement(StyledRegistry, null, (props.symbols || []).map(symbol => {
        const creator = typeof icons_1.icons[symbol] === "function"
            ? icons_1.icons[symbol]
            : icons_1.icons.placeholder;
        const paths = creator();
        return React.createElement(symbol_1.Symbol, { key: symbol, id: symbol, definition: paths });
    })));
};
const StyledRegistry = styled_components_1.default.svg `
  position: fixed;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  visibility: hidden;
`;
//# sourceMappingURL=registry.js.map
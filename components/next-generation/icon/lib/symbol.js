"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const path_1 = require("./path");
exports.Symbol = (props) => {
    const paths = Array.isArray(props.definition)
        ? props.definition
        : [props.definition];
    if (props.emit) {
        return (React.createElement("g", { style: props.style }, paths.map(p => React.createElement(path_1.Path, { key: p, definition: p }))));
    }
    return (React.createElement("symbol", { className: props.className, id: props.id, viewBox: "0 0 24 24" }, paths.map(p => React.createElement(path_1.Path, { key: p, definition: p }))));
};
//# sourceMappingURL=symbol.js.map
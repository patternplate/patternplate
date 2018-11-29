"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const lodash_1 = require("lodash");
exports.Path = props => {
    const { definition } = props;
    const def = typeof definition === "string" ? { d: definition } : definition;
    const p = lodash_1.omit(def, ["tagName"]);
    const Component = def.tagName || "path";
    return React.createElement(Component, Object.assign({}, p));
};
//# sourceMappingURL=path.js.map
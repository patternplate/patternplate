"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const component_utility_1 = require("@patternplate/component-utility");
const code_1 = require("./code");
const Fixtures = require("./fixtures");
module.exports.default = function CodeDemo() {
    return (React.createElement(component_utility_1.Themer, { spacing: true },
        React.createElement(code_1.Code, { block: true, language: "sh" }, Fixtures.bash),
        React.createElement(code_1.Code, { block: true, language: "jsx", highlights: [1, 5, 6, 7] }, Fixtures.jsx),
        React.createElement(code_1.Code, { block: true, language: "html" }, Fixtures.html),
        React.createElement(code_1.Code, { block: true, language: "json" }, Fixtures.json)));
};
//# sourceMappingURL=code.demo.js.map
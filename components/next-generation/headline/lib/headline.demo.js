"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const headline_1 = require("./headline");
const component_utility_1 = require("@patternplate/component-utility");
const TEXT = `Lorem ipsum dolor sit amet, consectetur adipisicing elit`;
function HeadlineDemo() {
    return (React.createElement(component_utility_1.Themer, { spacing: true },
        React.createElement(headline_1.Headline, { is: "h1", order: 1 }, TEXT),
        React.createElement(headline_1.Headline, { is: "h2", order: 2 }, TEXT),
        React.createElement(headline_1.Headline, { is: "h3", order: 3 }, TEXT),
        React.createElement(headline_1.Headline, { is: "h4", order: 4 }, TEXT)));
}
exports.default = HeadlineDemo;
//# sourceMappingURL=headline.demo.js.map
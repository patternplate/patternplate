"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Fixture = require("./fixture");
const markdown_1 = require("./markdown");
const component_utility_1 = require("@patternplate/component-utility");
exports.default = () => (React.createElement(component_utility_1.Themer, null,
    React.createElement(markdown_1.Markdown, { source: Fixture.long })));
exports.MarkdownDemo = () => (React.createElement(markdown_1.Markdown, { source: Fixture.short }));
//# sourceMappingURL=markdown.demo.js.map
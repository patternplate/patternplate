"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const component_text_1 = require("@patternplate/component-text");
const InnerMarkdownBlockquote = props => {
    return (React.createElement(component_text_1.Text, { className: props.className, is: "blockquote" }, props.children));
};
exports.MarkdownBlockquote = styled_components_1.default(InnerMarkdownBlockquote) `
  margin: 0 0 16px 0;
  font-size: 18px;
  line-height: 27px;
  padding-left: 18px;
  border-left: 4.5px solid ${props => props.theme.colors.recess};
  color: ${props => props.theme.colors.recess};
`;
//# sourceMappingURL=markdown-blockquote.js.map
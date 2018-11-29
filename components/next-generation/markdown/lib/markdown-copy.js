"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const component_text_1 = require("@patternplate/component-text");
exports.MarkdownCopy = styled_components_1.default(InnerMarkdownCopy) `
  margin: 0 0 16px 0;
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.colors.color};
`;
function InnerMarkdownCopy(props) {
    return (React.createElement(component_text_1.Text, { is: "p", className: props.className }, props.children));
}
//# sourceMappingURL=markdown-copy.js.map
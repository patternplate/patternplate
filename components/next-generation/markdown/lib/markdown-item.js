"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const component_text_1 = require("@patternplate/component-text");
exports.MarkdownItem = styled_components_1.default(InnerMarkdownItem) `
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.colors.color};
  margin-top: 4.5px;
`;
function InnerMarkdownItem(props) {
    return (React.createElement(component_text_1.Text, { className: props.className, is: "li" }, props.children));
}
//# sourceMappingURL=markdown-item.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const tag_hoc_1 = require("tag-hoc");
exports.Text = props => {
    return (React.createElement(StyledText, { is: props.is, className: props.className }, props.children));
};
const StyledText = styled_components_1.default(tag_hoc_1.default(["size"])("div")) `
  font-family: ${props => props.theme.fonts.default};
  color: ${props => props.theme.colors.color};
`;
//# sourceMappingURL=text.js.map
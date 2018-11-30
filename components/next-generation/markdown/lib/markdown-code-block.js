"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const textContent = require("react-addons-text-content");
const component_code_1 = require("@patternplate/component-code");
const StyledMarkdownCodeBlock = styled_components_1.default.div `
  grid-column: first / span 12;
  border-radius: 3px;
  font-size: 15.3px;
  line-height: 23px;
  padding: 0 16px;
  margin-bottom: 16px;
  background: ${props => props.theme.colors.backgroundSecondary};
  overflow: hidden;
`;
exports.MarkdownCodeBlock = props => {
    const code = textContent(props.children);
    return (React.createElement(StyledMarkdownCodeBlock, null,
        React.createElement(component_code_1.Code, { block: true, language: props.language, highlights: props.highlights }, code)));
};
//# sourceMappingURL=markdown-code-block.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const styled_components_1 = require("styled-components");
const component_code_1 = require("@patternplate/component-code");
exports.MarkdownCode = styled_components_1.default(component_code_1.Code) `
  display: inline;
  padding: 0;
  background: ${props => props.theme.colors.backgroundSecondary};
  border-radius: 3px;
  font-size: 15.3px;
  line-height: 23px;
  padding: 3px;
`;
//# sourceMappingURL=markdown-code.js.map
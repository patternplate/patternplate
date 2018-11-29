"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const component_text_1 = require("@patternplate/component-text");
const ORDERS = {
    0: 72,
    1: 36,
    2: 27,
    3: 23,
    4: 18
};
const InnerHeadline = props => {
    const is = props.is || 'h1';
    return React.createElement(component_text_1.Text, { is: is, className: props.className }, props.children);
};
exports.Headline = styled_components_1.default(InnerHeadline) `
  color: ${(props) => props.theme.colors.color};
  font-size: ${props => ORDERS[props.order]}px;
  font-family: ${props => props.theme.fonts.headline};
  margin: 60px 0 16px 0;
  font-weight: 300;
  line-height: 1.25;
`;
//# sourceMappingURL=headline.js.map
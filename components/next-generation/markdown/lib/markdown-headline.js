"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const component_headline_1 = require("@patternplate/component-headline");
const component_icon_1 = require("@patternplate/component-icon");
const component_link_1 = require("@patternplate/component-link");
const ORDER = {
    h1: 1,
    h2: 2,
    h3: 3,
    h4: 4,
    h5: 4,
    h6: 4
};
const ThemedIcon = styled_components_1.default(component_icon_1.Icon) `
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  padding-right: 10px;
  fill: ${props => props.theme.colors.color};
  opacity: 0;
`;
const StyledLink = styled_components_1.default(component_link_1.Link) `
  color: ${props => props.theme.colors.color};
  text-decoration: none;
  &:hover ${ThemedIcon} {
    opacity: 1;
  }
`;
const StyledTarget = styled_components_1.default.div `
  width: 0;
  height: 0;
`;
const StyledHeadline = styled_components_1.default(component_headline_1.Headline) `
  font-family: ${props => props.theme.fonts.headline};
`;
exports.MarkdownHeadline = styled_components_1.default(InnerMarkdownHeadline) `
  position: relative;
  color: ${props => props.theme.colors.color};
  margin: 60px 0 16px 0;
  font-weight: 300;
  line-height: 1.25;
`;
function InnerMarkdownHeadline(props) {
    const children = Array.isArray(props.children)
        ? props.children.join("")
        : props.children;
    const id = encodeURIComponent((children || "")
        .split(" ")
        .join("-")
        .toLowerCase());
    return (React.createElement(StyledHeadline, { is: props.is, order: ORDER[props.is], className: props.className, id: id }, props.linkable ? (React.createElement(MarkdownHeadlineLink, { name: children, id: id }, props.children)) : (props.children)));
}
function MarkdownHeadlineLink(props) {
    return (React.createElement(StyledLink, { title: `Link to "${props.name}"`, hash: props.id },
        React.createElement(StyledTarget, { id: props.id }),
        React.createElement(ThemedIcon, { symbol: "link", size: "m" }),
        props.children));
}
//# sourceMappingURL=markdown-headline.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const Url = require("url");
const queryString = require("query-string");
const component_link_1 = require("@patternplate/component-link");
exports.MarkdownLink = (props) => {
    const parsed = Url.parse(props.href || "./");
    const abs = absolute(props.href);
    const href = abs ? props.href : [parsed.pathname, parsed.hash].join("");
    const query = abs ? {} : queryString.parse(parsed.query);
    return (React.createElement(StyledLink, { external: abs, hint: true, href: href, query: query }, props.children));
};
const StyledLink = styled_components_1.default(component_link_1.Link) `
  font-size: 18px;
  line-height: 27px;
  color: ${props => props.theme.colors.color};
  text-decoration: none;
  &:link,
  &:visited {
    color: ${props => props.theme.colors.active};
  }
  &:hover,
  &:active {
    text-decoration: underline;
  }
`;
function absolute(href) {
    const parsed = Url.parse(href || "./");
    if (parsed.protocol) {
        return true;
    }
    if (href.startsWith("/api/static/")) {
        return true;
    }
}
//# sourceMappingURL=markdown-link.js.map
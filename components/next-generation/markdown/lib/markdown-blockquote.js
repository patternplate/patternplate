"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const reactAddonsTextContent = require("react-addons-text-content");
const styled_components_1 = require("styled-components");
const styled_components_2 = require("styled-components");
const component_text_1 = require("@patternplate/component-text");
const component_themes_1 = require("@patternplate/component-themes");
const Color = require("color");
const symbols = ["❔", "ℹ️", "✅", "❌", "⚠️"];
const InnerMarkdownBlockquote = props => {
    return (React.createElement(component_text_1.Text, { className: props.className, is: "blockquote" }, props.children));
};
const PlainMarkdownBlockquote = styled_components_1.default(InnerMarkdownBlockquote) `
  grid-column: first / span 12;
  margin: 0 0 16px 0;
  font-size: 18px;
  line-height: 27px;
  padding-left: 18px;
  border-left: 4.5px solid ${props => props.theme.colors.recess};
  color: ${props => props.theme.colors.recess};
`;
const NOTE_BACKGROUND = (props) => {
    switch (props.symbol) {
        case "❔":
            return (props.theme.colors.border ||
                props.theme.colors.colorBackgroundNote);
        case "ℹ️":
            return (props.theme.colors.colorBackgroundInfoNote || props.theme.colors.info);
        case "✅":
            return (props.theme.colors.colorBackgroundSuccessNote ||
                props.theme.colors.success);
        case "❌":
            return (props.theme.colors.colorBackgroundErrorNote || props.theme.colors.error);
        case "⚠️":
            return (props.theme.colors.colorBackgroundWarningNote ||
                props.theme.colors.warning);
    }
};
const MarkdownNote = styled_components_1.default.div `
  box-sizing: border-box;
  padding: 16px;
  margin-bottom: 32px;
  background: ${NOTE_BACKGROUND};
  > :last-child {
    margin: 0;
  }
  a,
  a:link,
  a:visited,
  a span,
  a:link span,
  a:visited span {
    color: inherit;
    text-decoration: underline dotted;
  }
`;
exports.MarkdownBlockquote = styled_components_2.withTheme(props => {
    const textContent = reactAddonsTextContent(props.children);
    const [_, symbol] = textContent.split("\n");
    if (symbols.indexOf(symbol) > -1) {
        const ps = React.Children
            .toArray(props.children)
            .map(p => remove(p, symbol));
        const isDark = Color.hsl(NOTE_BACKGROUND({ symbol, theme: props.theme })).luminosity() >
            0.4;
        const themes = component_themes_1.getThemes();
        return (React.createElement(MarkdownNote, { symbol: symbol },
            React.createElement(styled_components_2.ThemeProvider, { theme: isDark ? themes.light : themes.dark },
                React.createElement(React.Fragment, null, ps))));
    }
    return React.createElement(PlainMarkdownBlockquote, Object.assign({}, props));
});
function remove(node, symbol) {
    if (Array.isArray(node)) {
        return node.map(n => remove(n, symbol));
    }
    const n = node;
    if (typeof node === "object" && n.props && n.props.children) {
        return Object.assign({}, n, { props: Object.assign({}, n.props, { children: React.Children
                    .toArray(n.props.children)
                    .map(c => remove(c, symbol)) }) });
    }
    if (typeof node == "string") {
        return node.split(symbol).join("");
    }
    return node;
}
//# sourceMappingURL=markdown-blockquote.js.map
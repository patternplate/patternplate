"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const styled_components_2 = require("styled-components");
const component_themes_1 = require("@patternplate/component-themes");
const tag_hoc_1 = require("tag-hoc");
exports.Themer = props => {
    const themes = component_themes_1.getThemes();
    return (React.createElement(StyledThemer, null,
        React.createElement(styled_components_2.ThemeProvider, { key: "dark", theme: themes.dark },
            React.createElement(StyledThemeContainer, { spacing: Boolean(props.spacing), full: Boolean(props.full) }, props.children)),
        React.createElement(styled_components_2.ThemeProvider, { key: "light", theme: themes.light },
            React.createElement(StyledThemeContainer, { spacing: Boolean(props.spacing), full: Boolean(props.full) }, props.children))));
};
const StyledThemeContainer = styled_components_1.default(tag_hoc_1.default("spacing", "full")("div")) `
  background: ${(props) => props.theme.colors.background};
  padding: ${(props) => props.spacing ? 15 : 0}px;
  width: ${(props) => props.full ? "100%" : "auto"};
`;
const StyledThemer = styled_components_1.default.div `
  display: flex;
  flex-wrap: wrap;
`;
//# sourceMappingURL=themer.js.map
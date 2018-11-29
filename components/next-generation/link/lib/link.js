"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const component_utility_1 = require("@patternplate/component-utility");
const component_icon_1 = require("@patternplate/component-icon");
class RawLink extends React.Component {
    render() {
        const { props } = this;
        const target = selectTarget(props);
        return (React.createElement("a", { target: target, rel: target === "_blank" ? "noopener noreferrer" : null, className: props.className, href: props.href, onClick: props.onClick, onMouseOver: props.onHover, title: props.title, "data-id": props["data-id"] },
            React.createElement(StyledLinkContainer, { grow: props.grow, external: props.external },
                React.createElement(StyledLinkLabel, { grow: props.grow }, props.children),
                props.external && props.hint && (React.createElement(component_icon_1.Icon, { symbol: "external-link", size: props.iconSize || "text", inline: true })))));
    }
}
exports.RawLink = RawLink;
exports.Link = component_utility_1.inject(RawLink);
const StyledLinkContainer = styled_components_1.default.span `
  display: inline-flex;
  align-items: center;
  flex-grow: ${props => props.grow ? 1 : 0};
  > span {
    display: inline-flex;
    align-items: ${props => props.external ? 'baseline' : 'center'};
  }
  > svg {
    margin-left: .25em;
  }
`;
const StyledLinkLabel = styled_components_1.default.span `
  width: ${props => props.grow ? 'calc(100% - 40px)' : 'auto'};
`;
function selectTarget(props) {
    if (props.target) {
        return props.target;
    }
    return props.external ? "_blank" : null;
}
;
//# sourceMappingURL=link.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const PropTypes = require("prop-types");
const childContextTypes = {
    injections: PropTypes.arrayOf(PropTypes.shape({
        target: PropTypes.any,
        source: PropTypes.any
    }))
};
class InjectionProvider extends React.Component {
    getChildContext() {
        return { injections: this.props.injections };
    }
    render() {
        const { props } = this;
        return React.Children.only(props.children);
    }
}
InjectionProvider.childContextTypes = childContextTypes;
exports.InjectionProvider = InjectionProvider;
function inject(RawComponent) {
    const InjectedComponent = (props, context) => {
        const injections = Array.isArray(context.injections)
            ? context.injections
            : [];
        const applicable = injections.find(injection => {
            return (injection.target === RawComponent ||
                injection.target.RawComponent === RawComponent);
        });
        if (!applicable) {
            return React.createElement(RawComponent, Object.assign({}, props), props.children);
        }
        const Source = applicable.source;
        return React.createElement(Source, Object.assign({}, props), props.children);
    };
    InjectedComponent.RawComponent = RawComponent;
    InjectedComponent.contextTypes = childContextTypes;
    return InjectedComponent;
}
exports.inject = inject;
//# sourceMappingURL=injection.js.map
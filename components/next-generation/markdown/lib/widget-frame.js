"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const resizer = require("iframe-resizer");
class WidgetFrame extends React.Component {
    componentDidMount() {
        if (this.ref) {
            resizer.iframeResizer({
                log: false
            }, this.ref);
        }
    }
    render() {
        const { props } = this;
        return React.createElement(StyledWidgetFrame, Object.assign({ ref: ref => (this.ref = ref) }, props));
    }
}
exports.WidgetFrame = WidgetFrame;
const StyledWidgetFrame = styled_components_1.default.iframe `
  border: none;
  grid-column: first / span 12;
`;
//# sourceMappingURL=widget-frame.js.map
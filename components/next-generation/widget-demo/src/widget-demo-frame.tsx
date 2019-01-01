import * as React from "react";
import styled from "styled-components";

const iframeResizer = require("iframe-resizer").iframeResizer;

export class WidgetDemoFrame extends React.Component<{ src: string }> {
  private ref: HTMLElement | null;

  public componentDidMount() {
    if (this.ref) {
      iframeResizer({}, this.ref);
    }
  }

  public render() {
    const { props } = this;
    return <StyledPatternFrame ref={ref => (this.ref = ref)} src={props.src} />;
  }
}

const StyledPatternFrame = styled.iframe`
  width: 100%;
  min-width: 100%;
  border: 0;
`;

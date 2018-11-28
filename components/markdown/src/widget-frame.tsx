import * as React from 'react';
import styled from "styled-components";
import * as resizer from "iframe-resizer";

export type WidgetFrameProps = React.IframeHTMLAttributes<HTMLIFrameElement>;

export class WidgetFrame extends React.Component<WidgetFrameProps> {
  private ref: HTMLElement | null;

  public componentDidMount() {
    if (this.ref) {
      resizer.iframeResizer(
        {
          log: false
        },
        this.ref
      );
    }
  }

  public render(): JSX.Element | null {
    const { props } = this;
    return <StyledWidgetFrame ref={ref => (this.ref = ref)} {...props} />;
  }
}

const StyledWidgetFrame = styled.iframe`
  width: 100%;
  border: none;
`;

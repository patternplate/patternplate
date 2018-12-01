import * as React from "react";
import { WidgetFrame } from "./widget-frame";
import { MarkdownWidgetSrc, MarkdownWidgetState } from "../markdown";

export interface MarkdownWidgetProps {
  code: string;
}

export class MarkdownWidget extends React.Component<MarkdownWidgetProps> {
  public render() {
    const { props } = this;

    return (
      <MarkdownWidgetSrc.Consumer>
        {widgetSrc => (
          <MarkdownWidgetState.Consumer>
            {widgetState => (
              <WidgetFrame
                srcDoc={createDoc({ code: props.code, widgetSrc, widgetState })}
                src="/"
              />
            )}
          </MarkdownWidgetState.Consumer>
        )}
      </MarkdownWidgetSrc.Consumer>
    );
  }
}

const createDoc = (o: {
  widgetSrc: string;
  widgetState: object;
  code: string;
}): string => {
  return [
    `<!doctype html>`,
    `<html>`,
    `<head>`,
    `<script src="${o.widgetSrc}"></script>`,
    `</head>`,
    `<body>`,
    `<div data-widget-mount></div>`,
    `<textarea data-widget-state style="display: none;">`,
    encodeURIComponent(
      JSON.stringify({
        state: o.widgetState,
        code: o.code
      })
    ),
    `</textarea>`,
    `</body>`,
    `</html>`
  ].join("");
};

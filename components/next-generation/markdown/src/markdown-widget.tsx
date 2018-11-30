import * as React from "react";
import { WidgetFrame } from "./widget-frame";

export interface MarkdownWidgetProps {
  src: string;
  state: unknown;
  code: string;
}

export const MarkdownWidget: React.SFC<MarkdownWidgetProps> = props => {
  const srcdoc = [
    `<!doctype html>`,
    `<html>`,
    `<head>`,
    `<script src="${props.src}"></script>`,
    `</head>`,
    `<body>`,
    `<div data-widget-mount></div>`,
    `<textarea data-widget-state style="display: none;">`,
    encodeURIComponent(
      JSON.stringify({
        state: props.state,
        code: props.code
      })
    ),
    `</textarea>`,
    `</body>`,
    `</html>`
  ].join("");

  return (
    <WidgetFrame srcDoc={srcdoc} src="/" />
  );
};

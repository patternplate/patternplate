import * as Url from "url";
import * as T from "../../types";

const unindent = require("unindent");

export interface HtmlOptions {
  base: string;
  scripts?: boolean;
}

export function html(content: T.HtmlContent, options: HtmlOptions): string {
  const prefix = Url.resolve(options.base, "api");

  return unindent(`
    <!doctype html>
    <html lang="en">
      <head>
        <!-- content.head -->
        ${content.head || ""}
        <style>
          /* content.css */
          ${content.css || ""}
        </style>
      </head>
      <body>
        <!-- content.before -->
        ${content.before || ""}
        <!-- content.html -->
        <div data-patternplate-mount="data-patternplate-mount">${content.html || ""}</div>
        <!-- content.after -->
        ${content.after || ""}
        <script src="${prefix}/patternplate.web.probe.js"></script>
        ${options.scripts ? `
          <script src="${prefix}/patternplate.web.cover.js"></script>
          <script src="${prefix}/patternplate.web.mount.js"></script>
          <script src="${prefix}/patternplate.web.cover-client.js"></script>
        ` : ''}
        <script>
          /* content.js */
          ${content.js || ""}
        </script>
      </body>
    </html>
  `);
}

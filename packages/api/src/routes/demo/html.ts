import * as T from "../../types";

const unindent = require("unindent");

export interface HtmlOptions {
  base: string;
  scripts?: boolean;
}

export function html(content: T.HtmlContent, payload: unknown, ctx: { depth: number }): string {
  const data = encodeURIComponent(JSON.stringify(payload));
  const relative = '../'.repeat(ctx.depth);

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
        <textarea style="display: none;" data-patternplate-vault="data-patternplate-vault">${data}</textarea>
        <!-- content.before -->
        ${content.before || ""}
        <!-- content.html -->
        <div data-patternplate-mount="data-patternplate-mount">${content.html || ""}</div>
        <!-- content.after -->
        ${content.after || ""}
        <!-- ../ -> /api/ -->
        <script src="${relative}patternplate.web.components.js"></script>
        <script src="${relative}patternplate.web.probe.js"></script>
        <script src="${relative}patternplate.web.mount.js"></script>
        <script src="${relative}patternplate.web.demo.js"></script>
      </body>
    </html>
  `);
}

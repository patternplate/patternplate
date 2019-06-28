import * as T from "../../types";

const minify = require("html-minifier").minify;
const unindent = require("unindent");

export interface HtmlOptions {
  base: string;
  scripts?: boolean;
}

export function html(
  content: T.HtmlContent,
  payload: unknown,
  ctx: { depth: number, minify?: boolean }
): string {
  const data = encodeURIComponent(JSON.stringify(payload));
  const relative = "../".repeat(ctx.depth);

  const html = unindent(`
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
      <div data-patternplate-mount="data-patternplate-mount">${content.html ||
        ""}</div>
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

  return ctx.minify ? minify(html, {
    ...minifierConfig,
    processScripts: "text/html"
  }) : html;
}

const minifierConfigAttrs = (...attrs: string[]) => {
  const obj: any = {};
  attrs.forEach(attr => {
    obj[attr] = true;
  });
  return obj;
};

const minifierConfig = minifierConfigAttrs(
  "removeAttributeQuotes",
  "collapseBooleanAttributes",
  "collapseInlineTagWhitespace",
  "collapseWhitespace",
  "decodeEntities",
  "html5",
  "minifyCSS",
  "minifyJS",
  "processConditionalComments",
  "removeAttributeQuotes",
  "removeComments",
  "removeEmptyAttributes",
  "removeOptionalTags",
  "removeRedundantAttributes",
  "removeScriptTypeAttributes",
  "removeStyleLinkTypeAttributes",
  "sortAttributes",
  "sortClassName",
  "trimCustomFragments",
  "useShortDoctype"
);

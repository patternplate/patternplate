const url = require("url");
const unindent = require("unindent");

module.exports = renderPage;

function renderPage(content, options) {
  const prefix = url.resolve(options.base, "api");

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
        ${options.scripts ? `
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

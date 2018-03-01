const querystring = require("querystring");


main();

function main() {
  if (!global.document) {
    return;
  }

  const query = querystring.parse(global.location.search.slice(1));

  if (query.resize === "true") {
    require("iframe-resizer").iframeResizerContentWindow;
  }
}

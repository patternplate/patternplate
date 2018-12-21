import url from "url";
import { fill } from "lodash";
import { Icon } from "@patternplate/components";
import Helmet from "react-helmet";

import router from "../server";
import layout from "../layouts";
import getIdByPathname from "../utils/get-id-by-pathname";

module.exports = renderPage;

// (uri: string; opts: { base: string; schema: unknown; isStatic: boolean; scripts: string[] }) => { contents: string; status: number }
async function renderPage(uri, { base, config, schema, isStatic, scripts } = {}, manifest = {}) {
  const id = getId(uri);
  const startBase = base ? base : getBase(uri);
  const staticBase = (base === "/" ? "" : startBase) + "/static";

  const render = {
    base,
    config,
    pattern: {}, // Legacy, remove asap
    schema,
    startBase,
    staticBase,
    isStatic,
    manifest
  };

  const transfer = {
    base,
    config,
    pattern: { id },
    startBase,
    staticBase,
    isStatic,
    manifest
  };

  const { html, css, status } = await router(uri, render);
  const head = isStatic ? Helmet.peek() : Helmet.rewind();

  const contents = layout({
    attributes: head.htmlAttributes,
    base: startBase,
    css,
    data: transfer,
    html,
    link: head.link,
    meta: head.meta,
    title: head.title,
    scripts: scripts !== false
      ? [
        `${staticBase}/${manifest["vendors~client.js"]}`,
        `${staticBase}/${manifest["client.js"]}`
      ]
      : []
  });

  return {
    contents,
    status
  };
}

function getBase(uri) {
  const parsed = url.parse(uri);
  const depth = parsed.pathname.split("/").filter(Boolean).length;
  return depth > 0 ? fill(Array(depth), "..").join("/") : ".";
}

function getId(uri) {
  const parsed = url.parse(uri);
  return getIdByPathname(parsed.pathname);
}

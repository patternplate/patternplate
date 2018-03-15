import url from "url";
import { fill } from "lodash";
import { Icon } from "@patternplate/components";
import Helmet from "react-helmet";

import router from "./server";
import layout from "./layouts";
import getIdByPathname from "./utils/get-id-by-pathname";
import navigate from "./utils/navigate";

module.exports = renderPage;

async function renderPage(uri, { base, config, schema, isStatic }) {
  const id = getId(uri);
  const pattern = navigate(id, schema.meta) || {};
  const startBase = base ? base : getBase(uri);
  const scriptBase = base === "/" ? "" : startBase;

  const render = {
    base,
    config,
    pattern,
    schema,
    startBase,
    isStatic
  };

  const transfer = {
    base,
    config,
    pattern: { id },
    startBase,
    isStatic
  };

  const { html, css } = await router(uri, render);
  const head = isStatic ? Helmet.peek() : Helmet.rewind();
  const icons = isStatic ? Icon.peek() : Icon.rewind();

  return layout({
    attributes: head.htmlAttributes,
    base: startBase,
    css,
    data: transfer,
    html,
    icons,
    link: head.link,
    meta: head.meta,
    title: head.title,
    scripts: [
      `${scriptBase}/static/vendors.js`,
      `${scriptBase}/static/client.js`
    ]
  });
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

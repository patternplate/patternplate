import url from "url";
import { fill } from "lodash";
import { Icon } from "@patternplate/components";
import Helmet from "react-helmet";

import router from "./application/server";
import layout from "./application/layouts";
import getIdByPathname from "./application/utils/get-id-by-pathname";
import navigate from "./application/utils/navigate";

module.exports = renderPage;

async function renderPage(uri, { config, schema }) {
  const id = getId(uri);
  const pattern = navigate(id, schema.meta) || {};
  const base = getBase(uri);

  const render = {
    base,
    config,
    pattern,
    schema,
    startBase: base
  };

  const transfer = {
    base,
    config,
    pattern: { id },
    startBase: base
  };

  const { html, css } = await router(uri, render);
  const head = Helmet.rewind();
  const icons = Icon.rewind();

  return layout({
    attributes: head.htmlAttributes,
    base,
    css,
    data: transfer,
    html,
    icons,
    link: head.link,
    meta: head.meta,
    title: head.title,
    scripts: [
      `${base}/script/vendors.bundle.js`,
      `${base}/script/index.bundle.js`
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

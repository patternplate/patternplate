import url from 'url';

import {fill} from 'lodash';
import Helmet from 'react-helmet';
import {sync as resolveSync} from 'resolve';

import router from '../application/server';
import layout, {Layout} from '../application/layouts';
import getIdByPathname from '../application/utils/get-id-by-pathname';
import navigate from '../application/utils/navigate';
import {Icon} from '@patternplate/components';

const cwd = process.cwd();
const resolve = id => resolveSync(id, {basedir: cwd});

const getSchema = require('@patternplate/server/library/get-schema');

export default async function renderPage(application, pageUrl) {
  const app = application.parent;
  const client = application;
  const server = app.server;
  const parsed = url.parse(pageUrl);
  const depth = parsed.pathname.split('/').filter(Boolean).length;
  const base = depth > 0 ? fill(Array(depth), '..').join('/') : '.';
  const id = getIdByPathname(parsed.pathname);
  const config = application.configuration.ui;
  const schema = await getSchema(app, client, server);
  const pattern = navigate(id, schema.meta) || {};

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
    pattern: {id},
    startBase: base
  };

  const {html, css} = await router(pageUrl, render);
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

import * as Path from "path";
import * as express from "express";
import * as resolveFrom from "resolve-from";

import { fromFs } from "../../from-fs";
import { html } from "./html";
import { wait } from "../../wait";
import * as T from "../../types";
import { isContent } from "../../is-content";
// import { isRenderer } from "../../is-renderer";

const AggregateError = require("aggregate-error");

const RENDER_PATH = "/patternplate.node.render.js";
const COVER_PATH = "/patternplate.node.cover.js";

export const cover = async (
  options: T.RouteOptions
): Promise<express.RequestHandler> => {
  const { config, cwd } = options;

  return async function main(req, res) {
    try {
      if (!config.cover) {
        return res.sendStatus(404);
      }

      const { fs } = await wait(options.queue);
      const getModule = fromFs(fs);

      const coverFile = resolveFrom(cwd, options.config.render);
      const cover = getModule(COVER_PATH, coverFile) as T.Renderer;

      // TODO: Enable when ts-transform-json-schema supports functions
      // if (!isRenderer(cover)) {
      //   return;
      // }

      const renderFile = resolveFrom(cwd, options.config.render);
      const render = cover.render || (getModule(RENDER_PATH, renderFile) as T.Renderer["render"]);

      const content = await Promise.resolve(
        render!(cover, {
          dirname: Path.dirname(config.cover)
        })
      );

      if (!isContent(content)) {
        return;
      }

      res.send(
        html(content, {
          base: req.params.base || "/",
          scripts: typeof cover.default === "function"
        })
      );
    } catch (err) {
      const error = Array.isArray(err) ? new AggregateError(err) : err;
      console.error(error);
      res.status(500).send(error.message);
    }
  };
};

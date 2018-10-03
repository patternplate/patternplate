import * as Path from "path";
import * as express from "express";
import { fromFs } from "../../from-fs";
import { html, HtmlContent } from "./html";
import { wait } from "../../wait";
import * as T from "../../types";
import * as resolveFrom from "resolve-from";

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
      const rawCover = getModule(COVER_PATH, coverFile);

      if (typeof rawCover !== "object") {
        throw new Error(
          `Expected ${config.cover} to export an object, received ${typeof rawCover}`
        );
      }

      const cover = rawCover as { [key: string]: unknown };

      const renderFile = resolveFrom(cwd, options.config.render);

      const render =
        typeof cover.render === "function"
          ? cover.render
          : // TODO: Schema checks for renderer
            getModule(RENDER_PATH, renderFile) as () => HtmlContent;

      const content = await Promise.resolve(
        render(cover, {
          dirname: Path.dirname(config.cover)
        })
      );

      // TODO: Schema checks for produced content
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

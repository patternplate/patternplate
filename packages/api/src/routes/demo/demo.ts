import * as Path from "path";
import * as express from "express";
import { loadMeta, LoadedPatternMeta } from "@patternplate/load-meta";
import * as resolveFrom from "resolve-from";
import * as T from "../../types";
import { wait } from "../../wait";
import { fromFs } from "../../from-fs";
import { html } from "./html";
import { isContent } from "../../is-content";

const AggregateError = require("aggregate-error");

const BUNDLE_PATH = "/patternplate.node.components.js";
const RENDER_PATH = "/patternplate.node.render.js";

export const demo = async function demo(options: T.RouteOptions): Promise<express.RequestHandler> {
  return async function demoRoute(req, res) {
    try {
      const { entry = [] } = options.config;
      const { cwd } = options;

      const id = req.params[0];

      // TODO: Send errors to central observer
      const { patterns } = await loadMeta({
        cwd,
        entry
      });

      const found = patterns.find(pattern => pattern.id === id);

      if (!found) {
        return res.sendStatus(404);
      }

      const { fs } = await wait(options.queue);

      // TODO: verify bundle results
      const getModule = fromFs(fs);
      const bundle = getModule(BUNDLE_PATH, found.artifact) as { [id: string]: unknown };
      const component = getComponent(bundle, found) as T.Renderer;

      if (!component) {
        throw new Error(`Could not get module ${found.artifact} from ${BUNDLE_PATH}. Available: ${Object.keys(bundle)}`);
      }

      // TODO: Enable when ts-transform-json-schema supports functions
      // if (!isRenderer(rawCompnent)) {
      //   return;
      // }

      const renderFile = resolveFrom(cwd, options.config.render);

      const render = typeof component.render === "function"
        ? component.render
        : getModule(RENDER_PATH, renderFile) as () => T.HtmlContent;

      const content = await Promise.resolve(
        render(component, { dirname: Path.dirname(found.path) })
      );

      if (!isContent(content)) {
        return;
      }

      const depth = id.split('/').length;
      res.send(html(content, found, { depth }));
    } catch (err) {
      const error = Array.isArray(err) ? new AggregateError(err) : err;
      console.error(error);
      res.status(500).send(error.message);
    }
  };
};

function getComponent<T>(components: { [id: string]: any }, data: LoadedPatternMeta): T | undefined {
  const fileId = data.artifact.split(Path.sep).join("/");
  const top = components[fileId];

  const moduleId = data.source.split(Path.sep).join("/");

  if (top && top.hasOwnProperty(moduleId)) {
    return top[moduleId];
  }

  return top;
}

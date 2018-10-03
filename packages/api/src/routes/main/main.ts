import * as express from "express";
import { loadMeta } from "@patternplate/load-meta";
import * as T from "../../types";

const { loadDocsTree } = require("@patternplate/load-docs");

export const main = async (
  options: T.RouteOptions
): Promise<express.RequestHandler> => {
  return async function main(_: express.Request, res: express.Response) {
    try {
      const { config, cwd } = options;
      const { entry = [] } = options.config;

      const [docs, { patterns }] = await Promise.all([
        loadDocsTree({
          cwd,
          docs: config.docs
        }),
        loadMeta({
          cwd,
          entry
        })
      ]);

      res.send({
        config,
        docs,
        meta: { id: "root", children: patterns }
      });
    } catch (err) {
      return res.json(err);
    }
  };
};

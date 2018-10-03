import * as express from "express";
import { wait } from "../../wait";
import * as T from "../../types";

export async function scripts(options: T.RouteOptions): Promise<express.RequestHandler> {
  return async function scriptsRoutes(req, res) {
    try {
      const {fs} = await wait(options.queue);
      res.type("js");
      res.send(fs.readFileSync(req.url));
    } catch (err) {
      if (err.code === "ENOENT") {
        return res.sendStatus(404);
      }
      console.error(err);
      res.sendStatus(500).send(err.message);
    }
  };
}

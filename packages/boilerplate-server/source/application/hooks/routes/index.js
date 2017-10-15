import { resolve } from "path";

import router from "koa-router";
import requireAll from "require-all";
import { merge } from "lodash";

import { exists } from "../../../library/utilities/fs";

export default {
  after: ["hooks:engine:start:after"],

  async start(application) {
    application.router = router();

    if (application.mode === "console") {
      return application;
    }

    // Load physical core routes
    const coreRoutes = requireAll(
      resolve(application.runtime.base, application.configuration.paths.routes)
    );

    // Load physical user routes
    this.configuration.path = Array.isArray(this.configuration.path)
      ? this.configuration.path
      : [this.configuration.path];

    const routePaths = await Promise.all(
      this.configuration.path
        .reduce(
          (items, item) =>
            items.concat(
              application.runtime.cwds.map(cwd => resolve(cwd, item))
            ),
          []
        )
        .map(async routePath => {
          return {
            path: routePath,
            exists: await exists(routePath)
          };
        })
    );

    const userRoutes = routePaths.reduce(
      (registry, entry) =>
        entry.exists
          ? merge(
              registry,
              requireAll({
                dirname: entry.path,
                filter: /^([^.].*)\.js(on)?$/,
                resolve(mod) {
                  return mod.default || mod;
                }
              })
            )
          : registry,
      {}
    );

    // Load module routes
    const moduleRoutes = Object.keys(this.configuration.enabled)
      .filter(
        routeName =>
          typeof this.configuration.enabled[routeName].enabled === "string"
      )
      .reduce((result, routeName) => {
        const routeModuleName = this.configuration.enabled[routeName].enabled;

        try {
          const mod = require(routeModuleName);
          result[routeName] = mod.default || mod;
          this.log.debug(
            `Required module route '${routeName}' from module '${routeModuleName}'`
          );
        } catch (err) {
          this.log.warn(
            `Could not require module route '${routeName}' from module '${routeModuleName}'`
          );
          this.log.debug(err);
        }
        return result;
      }, {});

    const routes = merge({}, coreRoutes, moduleRoutes, userRoutes);

    // Check if required modules are functions, bind to router
    Object.keys(routes).forEach(routeName => {
      const routeFactoryFunction = routes[routeName];
      const routeConfig = this.configuration.enabled[routeName];

      if (typeof routeFactoryFunction !== "function") {
        throw new TypeError(`'${routeName}' is no valid route factory`);
      }

      if (
        routeConfig === false ||
        (routeConfig && routeConfig.enabled === false)
      ) {
        this.log.debug(`'${routeName}' is explicitly disabled.`);
        return;
      }

      if (typeof routeConfig === "undefined") {
        this.log.debug(`'${routeName}' is not configured, will not mount.`);
        return;
      }

      const methods = routeConfig.methods || [
        "GET",
        "POST",
        "PATCH",
        "DELETE",
        "HEAD",
        "OPTIONS"
      ];

      const fn = routeFactoryFunction(application, routeConfig);

      if (typeof fn !== "function") {
        throw new TypeError(
          `'${routeName}' factory returned no valid route for ${routeConfig.path}`
        );
      }

      this.log.debug(`Mounting ${routeName} on ${routeConfig.path}`);

      application.router.register(
        routeName,
        routeConfig.path,
        methods,
        function* runRoute(next) {
          yield fn.bind(this)(next);
        }
      );
    });

    return application;
  }
};

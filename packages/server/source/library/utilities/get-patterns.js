import { basename, dirname, resolve, relative } from "path";

import { debuglog, inspect } from "util";

import chalk from "chalk";
import exists from "path-exists";
import { merge, omit, pick } from "lodash";
import throat from "throat";

import getEnvironments, { DEFAULT_ENVIRONMENT } from "./get-environments";
import getDependentPatterns from "./get-dependent-patterns";
import getStaticCacheItem from "./get-static-cache-item.js";
import getMatchingEnvironments from "./get-matching-environments";
import readTree from "../filesystem/read-tree";

const envDebug = debuglog("environments");
const debug = debuglog("get-patterns");

const defaults = {
  isEnvironment: false,
  filters: {},
  log() {}
};

async function getPatterns(options, cache, cmds = ["read", "transform"]) {
  const settings = { ...defaults, ...options };

  const {
    id,
    base,
    config,
    factory,
    transforms,
    filters,
    log,
    isEnvironment
  } = settings;

  const path = resolve(base, id);
  const staticCacheRoot = resolve(process.cwd(), ".cache");
  config.log = log;

  // No patterns to find here
  if (!await exists(path)) {
    debug(`Expected path ${path} for pattern ${id} does not exist.`);
    return [];
  }

  const search = (await exists(resolve(path, "pattern.json")))
    ? resolve(path, "pattern.json")
    : path;

  // Get all pattern ids
  const paths = await readTree(search, options.cache);

  const patternIDs = paths
    .filter(item => basename(item) === "pattern.json")
    .filter(item => (isEnvironment ? true : !item.includes("@environments")))
    .map(item => dirname(item))
    .map(item => relative(options.base, item));

  // Read and transform patterns at a concurrency of 5
  return await Promise.all(
    patternIDs.map(
      throat(5, async patternID => {
        // Try to use the static cache
        const cached = cache.config.static
          ? await getStaticCacheItem({
              id: patternID,
              base: staticCacheRoot,
              filters,
              cache
            })
          : null;

        if (cached) {
          return cached;
        }

        // Load user environments
        const userEnvironments = await getEnvironments(base, {
          cache,
          log
        });

        const free =
          typeof filters.environments === "undefined" ||
          filters.environments.length === 0;

        // Get environments that match this pattern
        const matchingEnvironments = free
          ? getMatchingEnvironments(patternID, userEnvironments)
          : userEnvironments.filter(({ name }) =>
              filters.environments.includes(name)
            );

        // Get the available environment names for this pattern
        const environmentNames = matchingEnvironments.map(env => env.name);

        if (environmentNames.length > 0) {
          log.debug(
            `Applying environments ${chalk.bold(
              environmentNames.join(", ")
            )} to ${chalk.bold(patternID)}`
          );
        }

        // Merge environment configs
        // fall back to default environment if none is matching
        const environmentsConfig = matchingEnvironments.reduce(
          (results, environmentConfig) => {
            const { environment } = environmentConfig;
            const misplacedKeys = omit(environment, Object.keys(config));
            const misplacedKeyNames = Object.keys(misplacedKeys);

            if (misplacedKeys.length > 0) {
              log.warn(
                [
                  `${chalk.yellow(
                    "[⚠ Deprecation ⚠ ]"
                  )} Found unexpected keys ${misplacedKeyNames} in environment`,
                  `${environmentConfig.name}.environment. Placing keys other than ${Object.keys(
                    config
                  )} in`,
                  `${environmentConfig.name}.environment is deprecated, move the keys to`,
                  `${environmentConfig.name}.environment.transforms`
                ].join(" ")
              );
            }

            // Directly stuff mismatching keys into transforms config to retain previous behaviour
            return omit(
              merge({}, results, omit(environment, misplacedKeyNames), {
                transforms: misplacedKeys
              }),
              Object.keys(misplacedKeys).concat(
                Object.keys(DEFAULT_ENVIRONMENT)
              )
            );
          },
          DEFAULT_ENVIRONMENT
        );

        envDebug("applying env config to pattern %s", patternID);
        envDebug("%s", inspect(environmentsConfig, { depth: null }));

        // Merge the determined environments config onto the pattern config
        const patternConfiguration = merge({}, config, environmentsConfig, {
          environments: environmentNames,
          options: settings.options || {}
        });

        // Initialize the pattern object
        const initStart = new Date();
        const filterString = JSON.stringify(filters);
        const filterStamp = chalk.grey(`[${filterString}]`);
        log.debug(
          `Initializing pattern "${patternID}" with filters: ${filterStamp}`
        );
        const pattern = await factory(
          patternID,
          base,
          patternConfiguration,
          transforms,
          filters
        );
        log.debug(
          `Initialized pattern "${patternID}" ${chalk.grey(
            `[${new Date() - initStart}ms]`
          )}`
        );

        // Inject information about available environments
        const availableEnvironments = userEnvironments.map(env =>
          pick(env, ["name", "displayName"])
        );

        // Select environments that should be displayed
        const demoEnvironments = userEnvironments
          .filter(env => env.display)
          .map(env => pick(env, ["name", "displayName"]));

        pattern.manifest.availableEnvironments = availableEnvironments.length
          ? availableEnvironments
          : [pick(DEFAULT_ENVIRONMENT, ["name", "displayName"])];

        pattern.manifest.demoEnvironments = demoEnvironments.length
          ? demoEnvironments
          : [pick(DEFAULT_ENVIRONMENT, ["name", "displayName"])];

        // Determine dependening patterns
        const [errors, depending] = await getDependentPatterns(
          patternID,
          base,
          { cache }
        );

        if (errors) {
          // Throw new Error(errors.map(e => e.message).join('\n'));
        }

        pattern.manifest.dependentPatterns = depending;

        // Exit if we do not have to read
        if (!cmds.includes("read")) {
          // Inject depending pattern information
          return pattern;
        }

        // Read the pattern files
        const readStart = new Date();
        log.debug(`Reading pattern "${patternID}"`);
        await pattern.read();

        log.debug(
          `Read pattern "${patternID}" ${chalk.grey(
            `[${new Date() - readStart}ms]`
          )}`
        );

        // Exit if we do not have to transform
        if (!cmds.includes("transform")) {
          return pattern;
        }

        // Transform pattern sources
        const transformStart = new Date();
        log.debug(`Transforming pattern "${patternID}"`);
        const transformed = await pattern.transform(
          !isEnvironment,
          isEnvironment
        );
        log.debug(
          `Transformed pattern "${patternID}" ${chalk.grey(
            `[${new Date() - transformStart}ms]`
          )}`
        );
        return transformed;
      })
    )
  );
}

export default getPatterns;

import path from "path";
import chalk from "chalk";
import { find, flattenDeep, invert, merge, uniqBy } from "lodash";
import minimatch from "minimatch";
import throat from "throat";
import constructDemoDependencies from "./construct-demo-dependencies";
import constructDependencies from "./construct-dependencies";
import getDependenciesToRead from "./get-dependencies-to-read";
import getPatternManifests from "../../utilities/get-pattern-manifests";
import getPatternManifest from "../../utilities/get-pattern-manifest";
import getPatternManifestsData from "./get-pattern-manifest-data";
import { Pattern } from "./";
import readDirectory from "../../filesystem/read-directory";

export default readManifest;

async function readManifest(pattern) {
  if (pattern.config.parents.length === 0) {
    const [error, manifest] = await getPatternManifest(
      pattern.id,
      pattern.base
    );

    if (error) {
      throw error;
    }

    pattern.manifest = manifest;

    if ("automount" in pattern.options) {
      merge(pattern.manifest, {
        options: {
          "react-to-markup": {
            opts: {
              automount: pattern.options.automount
            }
          }
        }
      });
    }

    if (pattern.isEnvironment && !pattern.manifest.patterns) {
      let list = await readDirectory(pattern.base);
      const range = pattern.manifest.range || "*";

      list = list
        .filter(item => path.basename(item) === "pattern.json")
        .filter(item => !item.includes("@environment"))
        .map(item => path.relative(pattern.base, path.dirname(item)))
        .filter(item => item !== pattern.id);

      if (pattern.manifest.include) {
        const include = Array.prototype.concat.call(
          [],
          pattern.manifest.include,
          [""]
        );
        list = list.filter(item => minimatch(item, `{${include.join(",")}}`));
      }

      if (pattern.manifest.exclude) {
        const exclude = Array.prototype.concat.call(
          [],
          pattern.manifest.exclude,
          [""]
        );
        list = list.filter(item => !minimatch(item, `{${exclude.join(",")}}`));
      }

      pattern.manifest.patterns = list.reduce(
        (results, item) =>
          Object.assign(results, { [item]: `${item}@${range}` }),
        {}
      );
    }

    pattern.manifest.patterns.Pattern = pattern.id; // Should be set for demos only?

    const manifestsStart = new Date();

    pattern.log.silly(`Fetching manifests for ${pattern.id}`);

    const [errors, pool] = await getPatternManifests(".", pattern.base, {
      cache: pattern.cache
    });

    if (Array.isArray(errors) && errors.length > 0) {
      throw new Error(errors.map(e => e.message).join("\n"));
    }

    const manifests = getPatternManifestsData(
      pattern.base,
      {
        ...pattern.manifest.patterns,
        ...(pattern.manifest.demoPatterns || {})
      },
      pool
    );
    const manifestDuration = chalk.grey(`[${new Date() - manifestsStart}ms]`);
    pattern.log.silly(
      `Fetched manifests for ${pattern.id} ${manifestDuration}`
    );

    const dependencies = uniqBy(flattenDeep(manifests), "id");

    const dependencyPatterns = dependencies.map(manifest => {
      const { id } = manifest;
      const config = {
        ...pattern.config,
        parents: [...pattern.config.parents, pattern.id]
      };
      const dep = new Pattern(
        id,
        pattern.base,
        config,
        pattern.transforms,
        {
          ...pattern.filters,
          baseNames: ["index"] // Dependencies are index-only
        },
        pattern.cache
      );
      dep.manifest = manifest;
      return dep;
    });

    const dependenciesToRead = getDependenciesToRead(
      {
        ...pattern.manifest.patterns,
        ...pattern.manifest.demoPatterns
      },
      dependencyPatterns
    );

    pattern.log.silly(`Determined dependency chain for ${pattern.id}`);

    dependenciesToRead.forEach(item => {
      const name = invert(pattern.manifest.patterns)[item];
      pattern.log.silly(`↳  ${chalk.bold(name)} → ${item}`);
    });

    const readDependency = async id => {
      return find(dependencyPatterns, { id }).read();
    };

    const readDependencies = await Promise.all(
      dependenciesToRead.map(throat(1, readDependency))
    );

    pattern.dependencies = constructDependencies(
      pattern.manifest.patterns,
      readDependencies
    );
    pattern.demoDependencies = constructDemoDependencies(
      pattern.manifest.demoPatterns || {},
      readDependencies
    );
  }
}

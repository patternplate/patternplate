import path from "path";
import querystring from "querystring";
import url from "url";

const WEIGHTS = {
  folder: 0,
  doc: 1,
  pattern: 2
};

export function flatten(tree) {
  return tree.children;
}

export function sanitize(tree, context) {
  const { hide, id, config = {}, prefix, base, location } = context;
  const filter = hide ? child => !child.manifest.options.hidden : i => i;

  tree.children = tree.children
    .filter(filter)
    .map(child => {
      const enriched = enrich(child, {
        base,
        location,
        hide,
        id,
        config,
        prefix
      });
      return enriched.children
        ? sanitize(enriched, { base, location, hide, id, config, prefix })
        : enriched;
    })
    .sort((a, b) => {
      const order =
        (a.manifest.options.order || 0) - (b.manifest.options.order || 0);
      const weight = (WEIGHTS[a.type] || 0) - (WEIGHTS[b.type] || 0);
      const comp = a.manifest.displayName.localeCompare(b.manifest.displayName);

      if (order !== 0) {
        return order;
      }

      if (weight !== 0) {
        return weight;
      }

      return comp;
    });

  return enrich(tree, { base, location, id, config, prefix });
}

export function enrich(child, context) {
  const { id, config, prefix } = context;
  child.active = [child.contentType, child.id].join('/') === id;

  const parsed = url.parse(child.href || path.join(prefix, child.id));

  const q =
    typeof parsed.query === "string"
      ? querystring.parse(parsed.query)
      : parsed.query;

  child.href = url.format({
    pathname: url.resolve(context.base, parsed.pathname),
    query: { ...context.location.query, ...q }
  });

  child.warnings = child.warnings || [];

  if (child.id in config) {
    const o = config[child.id];
    child.manifest.displayName = o.displayName || child.manifest.displayName;
    child.manifest.options.order = o.order || child.manifest.options.order;
    child.manifest.options.icon = o.icon || child.manifest.options.icon;
  }

  if (
    child.manifest &&
    child.type === "pattern" &&
    (child.manifest.flag === "alpha" || child.manifest.flag === "deprecated")
  ) {
    child.warnings.push({
      type: "flag",
      value: child.manifest.flag,
      message: `${child.manifest.displayName} is flagged as ${child.manifest
        .flag}.`
    });
  }

  return child;
}

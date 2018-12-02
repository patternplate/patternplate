import { createSearch, Query, Term } from "@patternplate/search";
import { flatten, uniq, uniqBy, sortBy } from "lodash";
import { createSelector } from "reselect";
import semver from "semver";
import {flat as selectPoolFlat} from "./pool";

const FLAGS = {
  alpha: 0,
  beta: 1,
  rc: 2,
  stable: 3,
  deprecated: 4
};

const FIELDS = [
  /* {
    type: "field",
    key: "depends",
    value: "depends",
    description: "patterns depending on id",
    operators: ["=", "!=", "^=", "~="]
  }, */
  {
    type: "field",
    key: "flag",
    value: "flag",
    description: "being flagged as [value]",
    operators: ["=", "!=", ">", ">=", "<", "<=", "^=", "~="]
  },
  {
    type: "field",
    key: "is",
    value: "is",
    description: "being of type [value]",
    operators: ["=", "!="]
  },
  {
    type: "field",
    key: "has",
    value: "has",
    description: "having data of [value]",
    operators: ["=", "!="]
  },
  /* {
    type: "field",
    key: "provides",
    value: "provides",
    description: "patterns providing for id",
    operators: ["=", "!=", "^=", "~="]
  }, */
  {
    type: "field",
    key: "tags",
    value: "tags",
    description: "having a tag of [value]",
    operators: ["=", "!=", "^=", "~="]
  },
  {
    type: "field",
    key: "version",
    value: "version",
    description: "having version of [value]",
    operators: ["=", "!=", ">", ">=", "<", "<=", "^=", "~="]
  },
  {
    type: "field",
    key: "path",
    value: "path",
    description: "saved at [value] relative to patternplate.config.js",
    operators: ["=", "*="]
  }
];

const OPERATORS = [
  {
    type: "op",
    key: "=",
    description: "exact match"
  },
  {
    type: "op",
    key: "!=",
    description: "negated match"
  },
  {
    type: "op",
    key: ">",
    description: "greater than"
  },
  {
    type: "op",
    key: ">=",
    description: "greater than or equal"
  },
  {
    type: "op",
    key: "<",
    description: "lesser than"
  },
  {
    type: "op",
    key: "<=",
    description: "lesser than or equal"
  },
  {
    type: "op",
    key: "^=",
    description: "starts with"
  },
  {
    type: "op",
    key: "~=",
    description: "contains"
  },
  {
    type: "op",
    key: "*=",
    description: "matches"
  }
];

const selectSearch = createSelector(
  selectPoolFlat,
  createSearch
)

const selectMatches = createSelector(
  selectSearch,
  state => state.search,
  (search, queryString) => {
    if (typeof queryString !== "string" || queryString.length < 3) {
      return [];
    }
    return search(queryString);
  }
);

const selectParsedValue = createSelector(
  state => state.searchValue,
  search => Query.parse(search)
);

const selectLastQuery = createSelector(selectParsedValue, parsed =>
  last(parsed)
);

function last(query) {
  switch (query.type) {
    case "string":
      return query.value;
    case "and":
    case "or":
    default: {
      const q = query || {};
      const values = q.values || [];
      const cand = values[values.length - 1];
      return cand ? last(cand) : "";
    }
  }
}

const selectFields = createSelector(selectLastQuery, query =>
  FIELDS.filter(f => f.value.startsWith(query))
);

const selectFieldHit = createSelector(
  state => state.searchValue,
  selectLastQuery,
  (value, query) => {
    if (query.length === 0) {
      return null;
    }

    return FIELDS.find(f => query.startsWith(f.value));
  }
);

const selectParsedQuery = createSelector(selectLastQuery, query =>
  Term.parse(query)
);

const selectOps = createSelector(
  selectParsedQuery,
  selectFieldHit,
  (parsed, hit) => {
    if (!hit) {
      return [];
    }
    return hit.operators
      .map(o => OPERATORS.find(op => op.key === o))
      .filter(o => !parsed.operators || o.key.includes(parsed.operators))
      .map(o => {
        o.value = `${hit.value}${o.key}`;
        return o;
      });
  }
);

const selectOpsHit = createSelector(
  selectParsedQuery,
  selectOps,
  (query, ops) => {
    return ops.find(i => {
      if (query.negated) {
        return i.key === `!${query.operators}`;
      }
      return i.key === query.operators;
    });
  }
);

export const selectFound = createSelector(
  selectPoolFlat,
  selectMatches,
  (pool, matches) => {
    const sorted = uniqBy(
      sortBy(matches.map(match => pool.find(p => p.id === match)), "contentType"),
      "id"
    );
    return sorted.map((s, i) => {
      s.index = i;
      return s;
    });
  }
);

export const selectPatterns = createSelector(selectFound, found =>
  found.filter(f => f.contentType === "pattern")
);

const selectPatternPool = createSelector(selectPoolFlat, pool =>
  pool.filter(f => f.contentType === "pattern")
);

const selectOptions = createSelector(
  selectPatternPool,
  selectParsedQuery,
  selectFieldHit,
  selectOpsHit,
  (patterns, parsed, field, op) => {
    if (!field || !op) {
      return [];
    }

    switch (field.key) {
      case "has":
        return [
          {
            type: "quality",
            key: "docs",
            value: [field.key, op.key, "docs"].join(""),
            description: "colocated markdown"
          },
          /* {
            type: "quality",
            key: "dependencies",
            value: [field.key, op.key, "dependencies"].join(""),
            description: "patterns with dependencies"
          },
          {
            type: "quality",
            key: "dependents",
            value: [field.key, op.key, "dependents"].join(""),
            description: "patterns with dependents"
          }, */
          {
            type: "quality",
            key: "flag",
            value: [field.key, op.key, "flag"].join(""),
            description: "flag specified"
          },
          {
            type: "quality",
            key: "version",
            value: [field.key, op.key, "version"].join(""),
            description: "version specified"
          },
          {
            type: "quality",
            key: "description",
            value: [field.key, op.key, "description"].join(""),
            description: "description provided"
          },
          {
            type: "quality",
            key: "displayName",
            value: [field.key, op.key, "displayName"].join(""),
            description: "display name provided"
          },
          {
            type: "quality",
            key: "tags",
            value: [field.key, op.key, "tags"].join(""),
            description: "tag attached"
          }
        ];
      case "depends":
      case "provides":
        return patterns
          .filter(item => item.id.startsWith(parsed.value || ""))
          .map(item => {
            return {
              type: "pattern",
              key: item.id,
              value: [field.key, op.key, item.id].join(""),
              description: `${item.id}`
            };
          });
      case "tags":
        return uniq(flatten(patterns.map(item => item.manifest.tags)))
          .filter(Boolean)
          .map(tag => {
            return {
              type: "tag",
              key: tag,
              value: [field.key, op.key, tag].join(""),
              description: tag
            };
          });
      case "version": {
        const versions = uniqBy(
          patterns
            .filter(item =>
              item.manifest.version.startsWith(parsed.value || "")
            )
            .map(item => item.manifest.version)
        )
          .filter(version => semver.valid(version))
          .sort((a, b) => (semver.gt(a, b) ? 1 : -1));

        return versions.map(v => {
          return {
            type: "version",
            key: v,
            value: [field.key, op.key, v].join(""),
            description: `${v}`
          };
        });
      }
      case "flag": {
        const flags = uniqBy(
          patterns
            .filter(item => item.manifest.flag.startsWith(parsed.value || ""))
            .map(item => item.manifest.flag)
        )
          .filter(flag => typeof flag === "string")
          .sort((a, b) => {
            const delta = (FLAGS[a] || 0) - (FLAGS[b] || 0);
            return delta === 0 ? a.localeCompare(b) : delta;
          });

        return flags.map(f => {
          return {
            type: "flag",
            key: f,
            value: [field.key, op.key, f].join(""),
            description: `${f}`
          };
        });
      }
      case "is":
        return [
          {
            type: "is",
            key: "pattern",
            value: [field.key, op.key, "pattern"].join(""),
            description: "is a pattern"
          },
          {
            type: "is",
            key: "doc",
            value: [field.key, op.key, "doc"].join(""),
            description: "is a doc"
          }
        ];
      default:
        return [];
    }
  }
);

const selectOptionsHit = createSelector(
  selectParsedQuery,
  selectOptions,
  (query, ops) => ops.some(o => o.value === query.raw)
);

export const selectLegend = createSelector(
  selectParsedValue,
  selectParsedQuery,
  selectFields,
  selectFieldHit,
  selectOps,
  selectOpsHit,
  selectOptions,
  selectOptionsHit,
  (parsedValue, parsed, fields, fieldHit, ops, opsHit, options, optionsHit) => {
    if (!fieldHit) {
      return {
        name: "Fields",
        items: fields
      };
    }

    if (!opsHit && !parsed.value) {
      return {
        name: "Operators",
        items: ops
      };
    }

    if (!optionsHit && fieldHit && opsHit) {
      return {
        name: fieldHit.key,
        items: options
      };
    }

    return {
      name: "",
      items: []
    };
  }
);

export const selectDocs = createSelector(selectFound, found =>
  found.filter(f => f.contentType === "doc")
);

export const selectSuggestion = createSelector(
  state => state.searchValue,
  selectPoolFlat,
  selectLegend,
  (search, pool, legend) => {
    if (typeof search !== "string" || search.length === 0) {
      return "";
    }

    const match = pool.find(m =>
      [m.id, m.name, (m.manifest || {}).displayName].some(
        k => k && k.startsWith(search)
      )
    );

    if (match) {
      return (
        [match.id, match.name, match.manifest.displayName].find(
          k => k && k.startsWith(search)
        ) || ""
      );
    }

    const lmatch = (legend.items || []).find(i => i.value.startsWith(search));
    return lmatch ? lmatch.value : null;
  }
);

export const selectActiveItem = createSelector(
  state => state,
  selectFound,
  state => state.searchPreview,
  (state, found, preview) => {
    const index = Math.min(preview, found.length - 1);
    const item = found[index];
    return item
      ? Object.assign({}, item, {
          index,
          dependents: [],// rel("dependents"),
          dependencies: [] // rel("dependencies")
        })
      : item;
  }
);

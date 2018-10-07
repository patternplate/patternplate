import { flatten, intersection } from "lodash";
const q = require("logic-query-parser");

export type Query = string | LogicalQuery | ValueQuery;

export interface LogicalQuery {
  type: "and" | "or";
  values: string[];
}

export interface ValueQuery {
  type: "string";
  value: string;
}

export function parse(queryString: unknown): Query {
  const values = typeof queryString === "string" ? [queryString] : [];

  try {
    const parsed = q.parse(queryString);
    const query = q.utils.binaryTreeToQueryJson(parsed);

    if (query.type) {
      return query;
    }

    return { type: "and", values };
  } catch (err) {
    return { type: "and", values };
  }
}

export function perform<T>(
  query: Query,
  predicate: (term: string) => T[]
): T[] {
  if (typeof query === "string") {
    return predicate(query);
  }

  switch (query.type) {
    case "and": {
      const items = () => query.values.map(value => perform(value, predicate));
      return intersection(...items());
    }
    case "or": {
      const items = () => query.values.map(value => perform(value, predicate));
      return flatten([...items()]);
    }
    case "string": {
      const value = typeof query.value === "string" ? query.value : "";
      return predicate(value);
    }
    default: {
      throw new TypeError(
        `@patternplate/search.perform: Unknown query: ${JSON.stringify(query)}`
      );
    }
  }
}

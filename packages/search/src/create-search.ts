import * as Query from "./query";
import * as Registry from "./registry";
import * as Search from "./search";
import * as Term from "./term";
import * as T from "./types";

export function createSearch<V extends T.Searchable>(items: V[]): (queryString: unknown) => string[] {
  const search = Search.create(items);
  const registry = Registry.create(items);

  return function performSearch(queryString: unknown) {
    const query = Query.parse(queryString);
    return Query.perform<string>(query, termString => {
      const term = Term.parse(termString);

      if (term.valid) {
        return registry.search(term);
      }

      return search.search<string>(term.raw);
    });
  };
}

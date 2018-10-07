import * as T from "../types";
import * as M from "./matchers";

export function create<V extends T.Searchable>(items: V[]): { search(term: T.Term): string[] } {
  return {
    search(term) {
      const matcher = M.get(term.field, term.value, term);
      return items
        .filter(item => typeof item.manifest === "object")
        .filter(item => (term.negated ? !matcher(item) : matcher(item)))
        .map(i => i.id);
    }
  };
}

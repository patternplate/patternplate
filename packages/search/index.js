const Query = require("./query");
const Registry = require("./registry");
const Search = require("./search");
const Term = require("./term");

module.exports = {
  createSearch,
  Query,
  Term
};

function createSearch(items) {
  const search = Search.create(items);
  const registry = Registry.create(items);

  return function performSearch(queryString) {
    const query = Query.parse(queryString);
    return Query.perform(query, termString => {
      const term = Term.parse(termString);

      if (term.valid) {
        return registry.search(term);
      }

      return search.search(term.raw);
    });
  }
}




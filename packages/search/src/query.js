const flatten = require("lodash.flatten");
const intersection = require("lodash.intersection");
const q = require("logic-query-parser");

module.exports = {
  parse,
  perform
};

function parse(queryString) {
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

function perform(query, predicate) {
  if (typeof query === "string") {
    return predicate(query);
  }

  const items = () => query.values.map(value => perform(value, predicate));
  const value = typeof query.value === "string" ? query.value : "";

  switch (query.type) {
    case "and": {
      return intersection(...items());
    }
    case "or": {
      return flatten(...items());
    }
    case "string": {
      return predicate(value);
    }
    default: {
      throw new TypeError(`@patternplate/search.perform: Unknown query: ${JSON.stringify(query)}`);
    }
  }
}

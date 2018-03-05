module.exports = {
  parse
};

const OPERATORS = /([^!><^~\n=]+)?(?:(!)?(>|<|\^|~)?(=)?)([^!><^~\n=]+)?/;

function parse(termString) {
  const found = termString.match(OPERATORS) || [];
  const [raw, field, negator, modifier, equality, value] = found;

  return {
    field,
    value,
    raw,
    operators: [modifier, equality].join(""),
    negated: negator === "!",
    greater: modifier === ">",
    lower: modifier === "<",
    startsWith: equality === "=" && modifier === "^",
    includes: equality === "=" && modifier === "~",
    equals: equality === "=",
    valid: Boolean(
      field &&
        value &&
        (typeof modifier === "string" || typeof equality === "string")
    )
  };
}

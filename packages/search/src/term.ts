const OPERATORS = /([^!><^~\*\n=]+)?(?:(!)?(\*|>|<|\^|~)?(=)?)([^!><^~\n=]+)?/;

export interface Term {
  field: string;
  value: string;
  raw: string;
  operators: string;
  negated: boolean;
  greater: boolean;
  lower: boolean;
  matches: boolean;
  startsWith: boolean;
  includes: boolean;
  equals: boolean;
  valid: boolean;
}

export function parse(termString: string): Term {
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
    matches: equality === "=" && modifier === "*",
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

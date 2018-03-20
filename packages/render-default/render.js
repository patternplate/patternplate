const {merge, pick} = require("lodash");

const IN_SLOTS = ["html", "css", "js", "md", "json"];
const OUT_SLOTS = [...IN_SLOTS, "head", "before", "after", "script"];

module.exports = render;

function render(input) {
  return IN_SLOTS
    .reduce((output, slot) => {
      execute(input, output, {name: slot});
      return output;
    }, {});
}

function execute(input, output, {name}) {
  const fn = input[name];

  if (typeof fn !== "function") {
    return output;
  }

  const result = fn();

  if (typeof result === "string" || result === null) {
    output[name] = result;
    return output;
  }

  if (typeof result === "object" && !Array.isArray(result)) {
    merge(output, pick(result, OUT_SLOTS));
    return output;
  }

  throw new Error(`render fn "${name}" returned a result of type "${typeof result}". Expected string or object.`);
}

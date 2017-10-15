import deepRequire from "./deep-require";

export default clientRequire;

function clientRequire(id) {
  return deepRequire(`@patternplate/client/library/${id}`);
}

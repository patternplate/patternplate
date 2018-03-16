const renderDefault = require("@patternplate/render-default/render");

module.exports = render;

function render(input) {
  const component = input.default;
  const copy = Object.assign({}, input, {
    html: typeof input.html === "function"
      ? input.html
      : () => component().toString()
  });

  return renderDefault(copy);
}

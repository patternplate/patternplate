module.exports = render;

function render(component) {
  const comp = component.default || component;
  const element = comp();
  return { html: element.toString() };
}

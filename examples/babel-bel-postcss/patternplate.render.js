module.exports = render;

function render(component) {
  const comp = component.default || component;
  return {
    html: component.html || comp().toString(),
    css: component.css ? `<style>${component.css}</style>` : ''
  };
}

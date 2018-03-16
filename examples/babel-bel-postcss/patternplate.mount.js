module.exports = mount;

function mount(component) {
  const comp = component.default;
  component.element.innerHTML = '';
  component.element.appendChild(comp());
}

module.exports = mount;

function mount(component, element) {
  const comp = component.default || component;
  element.innerHTML = '';
  element.appendChild(comp());
}

module.exports = mount;

function mount(component) {
  const comp = component.default || component;
  comp();
}

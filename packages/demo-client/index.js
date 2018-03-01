/* eslint-env browser */
/* eslint-disable no-var */
function main() {
  var components = window['patternplate-components'];
  var mount = window['patternplate-mount'];
  var errors = [];
  if (!components) {
    errors.push(new Error('No patternplate components found. There might be errors during bundling.'))
  }
  if (!mount) {
    errors.push(new Error('No mount module found. There might be errors during bundling.'))
  }
  if (errors.length > 0) {
    errors.forEach(err => console.error(err));
    return;
  }
  var element = document.querySelector('[data-patternplate-mount]');
  var component = getComponent(components, getData());
  mount(component, element);
}

main();

function getData() {
  var vault = document.querySelector('[data-patternplate-vault]');
  if (!vault) {
    return {};
  }
  var encodedJson = vault.textContent;
  if (!encodedJson) {
    return {};
  }
  var json = decodeURIComponent(encodedJson);
  if (!json) {
    return {};
  }
  return JSON.parse(json);
}

function getComponent(components, data) {
  const top = components[data.artifact];

  if (top[data.source]) {
    return top[data.source];
  }

  return top;
}

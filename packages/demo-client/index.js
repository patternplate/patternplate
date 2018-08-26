/* eslint-env browser */
/* eslint-disable no-var */
require("iframe-resizer");
var components = require("patternplate-components");
var patternplateMount = require("patternplate-mount");

function main() {
  var errors = [];
  if (!components) {
    errors.push(new Error("No patternplate components found. There might be errors during bundling."))
  }
  if (errors.length > 0) {
    errors.forEach(function (err) {
      console.error(err)
    });

    return;
  }

  var component = getComponent(components, getData());
  component.element = component.element || document.querySelector("[data-patternplate-mount]");
  var mount = typeof component.mount === "function" ? component.mount : patternplateMount;

  console.log(component);
  mount(component);
}

main();

function getData() {
  var vault = document.querySelector("[data-patternplate-vault]");
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
  const fileId = data.artifact.split("\\").join("/");
  const top = components[fileId];

  const moduleId = data.source.split("\\").join("/");
  if (top[moduleId]) {
    return top[moduleId];
  }

  return top;
}

if (module.hot) {
  console.log('"');
  module.hot.accept(() => {
    console.log("!");
  });
}

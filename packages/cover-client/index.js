/* eslint-env browser */
/* eslint-disable no-var */
function main() {
  var mount = window['patternplate-mount'];
  var cover = window['patternplate-cover'];

  cover.element = cover.element || document.querySelector('[data-patternplate-mount]');
  mount(cover);
}

main();

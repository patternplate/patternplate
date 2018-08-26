import cover from 'patternplate-cover';
import mount from 'patternplate-mount';

function main() {
  cover.element = cover.element || document.querySelector('[data-patternplate-mount]');
  mount(cover);
}

main();

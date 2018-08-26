const utils = require("loader-utils");

export default function(source) {
  const options = utils.getOptions(this);

  return `
    import cover from ${JSON.stringify(options.cover)};
    import mount from ${JSON.stringify(options.mount)};
    import "webpack-hot-middleware/client?path=/api/hmr";

    function main() {
      cover.element = cover.element || document.querySelector('[data-patternplate-mount]');
      mount(cover);
    }

    main();

    if (module.hot) {
      module.hot.accept(() => {
        main()
      });
    }
  `;
}

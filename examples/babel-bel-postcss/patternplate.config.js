module.exports = {
  docs: ["docs/**/*.md", "README.md"],
  entry: ["lib/**/demo.js"],
  render: "./patternplate.render.js",
  mount: "./patternplate.mount.js",
  ui: {
    title: "@patternplate/components"
  }
};

module.exports = {
  docs: ["docs/**/*.md", "alt-docs/**/*.md"],
  entry: ["lib/**/demo.js"],
  render: "./patternplate.render.js",
  ui: {
    title: "@patternplate/components"
  }
};

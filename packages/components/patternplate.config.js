module.exports = {
  docs: ["docs/**/*.md"],
  entry: ["lib/**/demo.js"],
  render: "./patternplate.render.js", // "@patternplate/react-render"
  ui: {
    title: "@patternplate/components"
  }
};

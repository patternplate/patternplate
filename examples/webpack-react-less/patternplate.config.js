module.exports = {
  docs: ["docs/**/*.md"],
  entry: ["components.bundle.js"],
  render: "@patternplate/render-react/render",
  mount: "@patternplate/render-react/mount",
  ui: {
    title: "@patternplate/components"
  }
};

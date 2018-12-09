module.exports = {
  docs: ["docs/**/*.md", "README.md"],
  entry: ["lib/**/demo.js"],
  render: "@patternplate/render-default/render",
  mount: "@patternplate/render-default/mount"
};

module.exports = {
  docs: ["*.md"],
  entry: ["packages/**/demo.js"],
  render: "@patternplate/render-default/render",
  mount: "@patternplate/render-default/mount"
};

module.exports = {
  docs: [
    "CHANGELOG.md",
    "docs/**/*.md",
    "!docs/**/*/patterns"
  ],
  entry: [
    "packages/components/lib/**/demo.js"
  ],
  render: "@patternplate/render-styled-components/render",
  mount: "@patternplate/render-styled-components/mount"
};

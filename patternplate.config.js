module.exports = {
  docs: [
    "docs/**/*.md",
    "!docs/**/*/patterns"
  ],
  entry: [
    "packages/components/lib/**/demo.js"
  ],
  render: "@patternplate/render-styled-components/render",
  mount: "@patternplate/render-styled-components/mount",
  cover: "@patternplate/components/cover",
};

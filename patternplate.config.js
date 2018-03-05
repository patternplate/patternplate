module.exports = {
  docs: [
    "docs/**/*.md",
    "!docs/**/*/patterns",
    "packages/components/docs/**/*.md"
  ],
  entry: [
    "packages/components/lib/**/demo.js"
  ],
  render: "@patternplate/render-styled-components/render",
  mount: "@patternplate/render-styled-components/mount"
};

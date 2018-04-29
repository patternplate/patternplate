const logo = `
  <svg height="30" width="30" viewBox="0 0 24 24" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="gradient" x2="100%" y2="100%">
        <stop stop-color="#fe0353"/>
        <stop offset="100%" stop-color="#a90392"/>
      </linearGradient>
    </defs>
    <path fill="url(#gradient)" d="M12.002 20.426a1.264 1.264 0 0 1-.675-.189l-9.05-5.63a.86.86 0 1 1 .906-1.455l8.819 5.494 8.815-5.494a.86.86 0 1 1 .906 1.456l-9.047 5.643a1.267 1.267 0 0 1-.674.175z"></path>
    <path fill="url(#gradient)" d="M12 17.055a1.244 1.244 0 0 1-.657-.185l-8.886-5.545a1.193 1.193 0 0 1 0-2.023l8.886-5.542a1.25 1.25 0 0 1 1.314 0l8.886 5.542a1.193 1.193 0 0 1 0 2.023l-8.886 5.541a1.24 1.24 0 0 1-.657.19zm-7.99-6.742l7.99 4.98 7.99-4.98L12 5.334l-7.99 4.98z"></path>
  </svg>
`;

module.exports = {
  docs: [
    "docs/**/*.md",
    "!docs/**/*/patterns"
  ],
  entry: [
    "packages/components/lib/**/demo.js"
  ],
  plugins: [
    "@patternplate/plugin-sketch-export"
  ],
  render: "@patternplate/render-styled-components/render",
  mount: "@patternplate/render-styled-components/mount",
  cover: "@patternplate/components/cover",
  ui: {
    logo,
    favicon: logo,
    colorBackgroundDark: "rgb(15, 15, 50)",
    colorBackgroundSecondaryDark: "rgb(26, 24, 68)",
    colorBackgroundTertiaryDark: "rgb(26, 24, 68)",
    colorBorderDark: "rgb(26, 24, 68)"
  }
};

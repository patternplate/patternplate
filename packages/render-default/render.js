module.exports = render;

function render({ html, css }) {
  return { html, css: `<style>${css}</style>` };
}

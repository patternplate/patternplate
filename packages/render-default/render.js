module.exports = render;

function render({ html, css }) {
  const result = {};

  if (typeof html === "function") {
    result.html = html();
  }

  if (typeof css === "function") {
    result.css = css();
  }

  return result;
}

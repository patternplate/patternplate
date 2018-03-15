module.exports = render;

function render({ html, css }) {
  const result = {};

  if (typeof html === "function") {
    result.html = html();
  }

  if (typeof html === "function") {
    result.css = css();
  }

  return result;
}

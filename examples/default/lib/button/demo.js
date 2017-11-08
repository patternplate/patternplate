import button from "./button";
import css from "./demo.css";
import html from "./demo.html";

export default main;
export {css, html};

function main() {
  var nl = global.document.querySelectorAll(".Button");
  var els = Array.prototype.slice.call(nl, 0);

  els.forEach(el => button(el));
}

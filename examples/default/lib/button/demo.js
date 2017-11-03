import button from "./button";

export default main;

function main() {
  var nl = global.document.querySelectorAll(".Button");
  var els = Array.prototype.slice.call(nl, 0);

  els.forEach(el => button(el));
}

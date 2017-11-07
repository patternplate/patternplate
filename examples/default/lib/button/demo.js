const button = require("./button");

module.exports = main;
module.exports.css = require("./demo.css");
module.exports.html = require("./demo.html");

function main() {
  var nl = global.document.querySelectorAll(".Button");
  var els = Array.prototype.slice.call(nl, 0);

  els.forEach(el => button(el));
}

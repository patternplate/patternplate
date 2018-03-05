const bel = require("bel");

module.exports.button = ({onClick}) =>
  bel`<button class="Button" onclick=${onClick}>Demo Button</button>`;

const bel = require('bel');

module.exports = ButtonDemo;

function ButtonDemo() {
  const onClick = () => console.log(`Button clicked`);
  return bel`<button class="Button" onclick=${onClick}>Demo Button</button>`;
}

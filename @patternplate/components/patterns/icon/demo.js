const React = require('react');
const Icon = require('Pattern');

module.exports = IconDemo;

function IconDemo() {
  return (
    <div>
    	{Icon.symbols.map((symbol, index) => <Icon key={index} symbol={symbol}/>)}
    </div>
  );
}

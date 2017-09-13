const React = require('react');
const styled = require('styled-components').default;
const Pattern = require('Pattern');
const Button = require('../button');
const Themer = require('../demo-themer');

const tools = ['react', 'search', 'reload'];
const toolComponents = tools.map(
	(item, index) => <Button key={index} symbol={item}/>
);

module.exports = function NavigationToolbarDemo() {
  return (
    <Themer>
      <Pattern>{toolComponents}</Pattern>
    </Themer>
  );
}

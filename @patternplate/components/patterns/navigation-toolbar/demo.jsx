import React from 'react';
import styled from 'styled-components';
import Pattern from 'Pattern';
import Button from 'button';
import Themer from 'demo-themer';

const Dummy = styled.div`
	width: 30px;
	height: 30px;
	background-color: #ccc;
`;

const tools = ['react', 'search', 'reload'];
const toolComponents = tools.map(
	(item, index) => <Button key={index} symbol={item}/>
);

export default function NavigationToolbarDemo() {
  return (
    <Themer>
      <Pattern>{toolComponents}</Pattern>
    </Themer>
  );
}

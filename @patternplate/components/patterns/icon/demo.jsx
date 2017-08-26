import React from 'react';
import Icon, {symbols} from 'Pattern';

export default IconDemo;

function IconDemo() {
  return (
    <div>
    	{symbols.map((symbol, index) => <Icon key={index} symbol={symbol}/>)}
    </div>
  );
}

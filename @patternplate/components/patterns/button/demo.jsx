import React from 'react';
import Button from 'Pattern';
import Themer from 'demo-themer';

export default function ButtonDemo() {
  return (
    <Themer>
    	<div>
    		<Button
    			symbol="reload"
    			title="Reload"
    			type="link"
    			href="/"
    			external
    			layout="no-border"
    		>
    			Link Button
    		</Button>
    		<Button
    			symbol="reload"
    			title="Reload"
    		>
    			Button
    		</Button>
    		<Button
    			title="Reload"
    			layout="no-border"
    		>
    			Button without icon
    		</Button>
    		<Button
    			symbol="patternplate"
    			title="Patternplate"
    		/>
    	</div>
    </Themer>
  );
}

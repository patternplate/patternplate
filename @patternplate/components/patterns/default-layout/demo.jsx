import Pattern from 'Pattern';
import React from 'react';

import styled from 'styled-components';

function demoStyles(component, key) {
	const components = {
		root: `border: 1px solid red;`,
		navigationContainer: `
			border: inherit;
			border-color: blue;
		`,
		contentContainer: `
			border: inherit;
			border-color: green;
		`
	};

	return component.extend`${components[key]}`;
}

<Pattern
	patternplateDemoStyles={demoStyles}
	navigationEnabled
/>

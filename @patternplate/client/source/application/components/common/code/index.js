import React, {PropTypes as t} from 'react';
import styled from 'styled-components';

import highlight from './highlight';
import toElements from './to-elements';

export default Code;

function Code(props) {
	const source = highlightCode(props.language, props.children);

	const code = (
		<StyledCode className={props.className}>
			{source}
		</StyledCode>
	);

	return props.block ? <pre>{code}</pre> : code;
}

Code.propTypes = {
	className: t.string,
	language: t.string,
	children: t.string.isRequired
};

const themes = {
	dark: {
		mono1: '#abb2bf',
		mono2: '#818896',
		mono3: '#5c6370',
		hue1: '#56b6c2',
		hue2: '#61aeee',
		hue3: '#c678dd',
		hue4: '#98c379',
		hue5: '#e06c75',
		hue52: '#be5046',
		hue6: '#d19a66',
		hue62: '#e6c07b'
	},
	light: {
		mono1: '#383a42',
		mono2: '#686b77',
		mono3: '#a0a1a7',
		hue1: '#0184bb',
		hue2: '#4078f2',
		hue3: '#a626a4',
		hue4: '#50a14f',
		hue5: '#e45649',
		hue52: '#c91243',
		hue6: '#986801',
		hue62: '#c18401'
	}
};

const themed = key => props => themes[props.theme.name][key];

const StyledCode = styled.code`
	display: block;
	overflow-x: auto;
	padding: 0.5em;
	color: ${themed('mono1')};
	font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;

	.hljs-comment,
	.hljs-quote {
		color: ${themed('mono3')};
		font-style: italic;
	}

	.hljs-doctag,
	.hljs-keyword,
	.hljs-formula {
		color: ${themed('hue3')};
	}

	.hljs-section,
	.hljs-name,
	.hljs-selector-tag,
	.hljs-deletion,
	.hljs-subst {
		color: ${themed('hue5')};
	}

	.hljs-literal {
		color: ${themed('hue1')};
	}

	.hljs-string,
	.hljs-regexp,
	.hljs-addition,
	.hljs-attribute,
	.hljs-meta-string {
		color: ${themed('hue4')};
	}

	.hljs-built_in,
	.hljs-class .hljs-title {
		color: ${themed('hue62')};
	}

	.hljs-attr,
	.hljs-variable,
	.hljs-template-variable,
	.hljs-type,
	.hljs-selector-class,
	.hljs-selector-attr,
	.hljs-selector-pseudo,
	.hljs-number {
		color: ${themed('hue6')};
	}

	.hljs-symbol,
	.hljs-bullet,
	.hljs-link,
	.hljs-meta,
	.hljs-selector-id,
	.hljs-title {
		color: ${themed('hue2')};
	}

	.hljs-emphasis {
		font-style: italic;
	}

	.hljs-strong {
		font-weight: bold;
	}

	.hljs-link {
		text-decoration: underline;
	}
`;

function highlightCode(language, source = '') {
	if (!language) {
		return source;
	}
	if (!source) {
		return source;
	}
	const hast = highlight(language, source);
	return toElements(hast);
}

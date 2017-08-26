import b from 'btoa';
import {createElement as h} from 'react';
import styled from 'styled-components';
import {DOMParser, XMLSerializer} from 'xmldom';

const parser = new DOMParser();
const serializer = new XMLSerializer();

const TAG_NAMES = [
	'circle',
	'g',
	'path',
	'polygon',
	'rect',
	'svg'
];

const ATTRIBUTES = {
	circle: ['cx', 'cy', 'r', 'fill', 'stroke', 'style'],
	g: ['x', 'y', 'style'],
	path: ['d', 'fill', 'stroke', 'style'],
	polygon: ['points', 'fill', 'stroke', 'style'],
	rect: ['x', 'y', 'width', 'height', 'fill', 'stroke', 'style'],
	svg: ['width', 'height', 'viewBox', 'x', 'y', 'style', 'xmlns']
};

function attributes(node, key) {
	return (ATTRIBUTES[node.tagName] || [])
		.reduce((props, name) => {
			const attribute = node.attributes.getNamedItem(name);
			if (attribute && attribute.specified) {
				props[name] = attribute.value;
			}
			return props;
		}, {key});
}

export function btoa(source) {
	return `data:image/svg+xml;base64,${b(source)}`;
}

export function parse(source) {
	const doc = parser.parseFromString(source, 'image/svg+xml');
	const parsed = [...doc.childNodes].find(node => node.tagName === 'svg');
	parsed.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
	return parsed;
}

export function png(source) {
	return new Promise((resolve, reject) => {
		const img = new global.Image();
		const canvas = global.document.createElement('canvas');
		const ratio = global.devicePixelRatio || 1;

		canvas.width = 16 * ratio;
		canvas.height = 16 * ratio;

		const context = canvas.getContext('2d');

		img.onload = () => {
			context.drawImage(img, 0, 0);
			resolve(canvas.toDataURL('image/png'));
		};

		img.onerror = err => reject(err);

		img.src = btoa(source);
	});
}

export function purge(parsed) {
	return [...parsed]
		.filter(node => TAG_NAMES.includes(node.tagName))
		.map(node => {
			node.childNodes = purge(node.childNodes);

			const attributes = ATTRIBUTES[node.tagName] || [];

			for (let i = 0; i < node.attributes.length; i++) {
				const attribute = node.attributes[i];
				if (!attributes.includes(attribute.name)) {
					node.removeAttribute(attribute.name);
				}
			}

			return node;
		});
}

export function render(element) {
	const [tagName, props, children = []] = element;
	const {style, ...rest} = props;
	const tag = styled(tagName)`${style}`;
	return h(tag, rest, children.map(c => render(c)));
}

export function sanitize(parsed) {
	return [...parsed]
		.map((node, i) => [node.tagName, attributes(node, i), sanitize(node.childNodes)]);
}

export function stringify(tree) {
	return serializer.serializeToString(tree);
}

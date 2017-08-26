import React from 'react';
import toh from 'hast-to-hyperscript';
export default toElements;

function toElements(children) {
	if (!Array.isArray(children)) {
		return children;
	}

	const root = toh(React.createElement, {
		type: 'element',
		tagName: 'div',
		children
	});

	return root.props.children;
}

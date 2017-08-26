 /* eslint-disable react/no-danger */
import React, {PropTypes as t} from 'react';
import {renderToStaticMarkup as render} from 'react-dom/server';
import styled from 'styled-components';

export default layout;

function layout(props) {
	return `<!doctype html>${render(<Layout {...props}/>)}`;
}

function Layout(props) {
	const attributes = props.attributes.toComponent();
	return (
		<html {...attributes}>
			<head>
				{props.title.toComponent()}
				{props.meta.toComponent()}
				{props.link.toComponent()}
				{props.style.toComponent()}
				{props.css}
			</head>
			<body data-base={props.base}>
				<IconRegistry>{props.icons}</IconRegistry>
				<Content content={props.html}/>
				<State data={props.data}/>
				<script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=es6,Array.prototype.includes"/>
				{props.scripts.map(src => <script key={src} src={src}/>)}
			</body>
		</html>
	);
}

Layout.propTypes = {
	attributes: t.object.isRequired,
	base: t.string.isRequired,
	css: t.any,
	html: t.string.isRequired,
	data: t.object.isRequired,
	icons: t.any.isRequired,
	link: t.object.isRequired,
	meta: t.object.isRequired,
	scripts: t.arrayOf(t.string).isRequired,
	style: t.object.isRequired,
	title: t.object.isRequired
};

function IconRegistry(props) {
	return <div data-icon-registry>{props.children}</div>;
}

IconRegistry.propTypes = {
	children: t.any
};

function Content(props) {
	return (
		<div data-application dangerouslySetInnerHTML={{__html: props.content}}/>
	);
}

Content.propTypes = {
	content: t.string.isRequired
};

function State(props) {
	const value = JSON.stringify(props.data);
	return <StyledState data-application-state value={value} readOnly/>;
}

State.propTypes = {
	data: t.any
};

const StyledState = styled.textarea`
	display: none;
`;

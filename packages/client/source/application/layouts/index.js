/* eslint-disable react/no-danger */
import React from 'react';
import {renderToStaticMarkup as render} from 'react-dom/server';
import {styled} from '@patternplate/components';

export default layout;

function layout(props) {
  return `<!doctype html>${render(<Layout {...props} />)}`;
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
        <Content content={props.html} />
        <State data={props.data} />
        <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=es6,Array.prototype.includes" />
        {props.scripts.map(src => <script key={src} src={src} />)}
      </body>
    </html>
  );
}

function IconRegistry(props) {
  return (
    <div data-icon-registry style={{display: 'none'}}>
      {props.children}
    </div>
  );
}

function Content(props) {
  return (
    <div data-application dangerouslySetInnerHTML={{__html: props.content}} />
  );
}

function State(props) {
  const value = JSON.stringify(props.data);
  return <StyledState data-application-state value={value} readOnly />;
}

const StyledState = styled.textarea`display: none;`;

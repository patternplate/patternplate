/* eslint-disable react/no-danger */
import ARSON from "arson";
import React from "react";
import { renderToStaticMarkup as render } from "react-dom/server";
import { styled, ServerStyleSheet } from "@patternplate/components";

const DETONATOR = process.env.WEBPACK
  ? require("raw-loader!./detonator")
  : String(require("fs").readFileSync(require("path").resolve(__dirname, "detonator.js")));

export default layout;

function layout(props) {
  const layoutSheet = new ServerStyleSheet();
  layoutSheet.collectStyles(render(<Layout />));
  const layoutCSS = layoutSheet.getStyleElement();

  return `<!doctype html>${render(
    <Layout {...props} layoutCSS={layoutCSS} />
  )}`;
}

function Layout(props) {
  const attributes = props.attributes ? props.attributes.toComponent() : {};
  const scripts = Array.isArray(props.scripts) ? props.scripts : [];

  return (
    <StyledDocument {...attributes}>
      <head>
        {props.title && props.title.toComponent()}
        {props.meta && props.meta.toComponent()}
        {props.link && props.link.toComponent()}
        <script dangerouslySetInnerHTML={{__html: DETONATOR}}/>
        {props.layoutCSS}
        {props.css}
      </head>
      <StyledBody data-base={props.base}>
        <Content data-application-el="patternplate" content={props.html} />
        <State data-application-state="patternplate" data={props.data} />
        {scripts.map(src => <script key={src} src={src} />)}
      </StyledBody>
    </StyledDocument>
  );
}

const StyledDocument = styled.html`
  height: 100%;
  overflow: hidden;
`;

const StyledBody = styled.body`
  margin: 0;
  height: 100%;
`;

function Content(props) {
  return (
    <StyledContent
      data-application-el={props["data-application-el"]}
      dangerouslySetInnerHTML={{ __html: props.content }}
    />
  );
}

const StyledContent = styled.div`
  height: 100%;
`;

function State(props) {
  const value = encodeURIComponent(ARSON.stringify(props.data));
  return (
    <StyledState
      data-application-state={props["data-application-state"]}
      value={value}
      readOnly
    />
  );
}

const StyledState = styled.textarea`
  display: none;
`;

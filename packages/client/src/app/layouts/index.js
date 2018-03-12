/* eslint-disable react/no-danger */
import ARSON from "arson";
import React from "react";
import { renderToStaticMarkup as render } from "react-dom/server";
import { styled, ServerStyleSheet } from "@patternplate/components";

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
        {props.layoutCSS}
        {props.css}
      </head>
      <StyledBody data-base={props.base}>
        <IconRegistry>{props.icons}</IconRegistry>
        <Content data-application-el="patternplate" content={props.html} />
        <State data-application-state="patternplate" data={props.data} />
        <script dangerouslySetInnerHTML={{__html: `
          if (supported() === false && window.location.search.indexOf("browser-warning=false") === -1) {
            var el = document.querySelector("[data-browser-warning]");
            console.log(el);
            el.style.display = "block";
          }

          function supported() {
            try {
              eval("async () => {}");
              return true;
            } catch (err) {
              return false;
            }
          }
        `}}/>
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

function IconRegistry(props) {
  return (
    <div data-icon-registry style={{ display: "none" }}>
      {props.children}
    </div>
  );
}

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

import * as React from "react";
import styled from "styled-components";
import { WidgetFrame } from "./widget-frame";

import * as frontmatter from "front-matter";
import * as remark from "remark";
import * as emoji from "remark-gemoji-to-emoji";
import * as reactRenderer from "remark-react";
import * as rangeParser from "parse-numeric-range";

import { MarkdownBlockquote } from "./markdown-blockquote";
import { MarkdownCode } from "./markdown-code";
import { MarkdownCodeBlock } from "./markdown-code-block";
import { MarkdownCopy } from "./markdown-copy";
import { MarkdownHeadline } from "./markdown-headline";
import { MarkdownHr } from "./markdown-hr";
import { MarkdownImage } from "./markdown-image";
import { MarkdownItem } from "./markdown-item";
import { MarkdownList } from "./markdown-list";
import { MarkdownLink } from "./markdown-link";
import sanitization from "./sanitization";

export interface MarkdownProps {
  linkable?: boolean;
  className?: string;
  source: string;
  widgetSrc?: string;
  widgetState?: unknown;
}

export class Markdown extends React.Component<MarkdownProps> {
  public render(): JSX.Element | null {
    const { props } = this;
    const Headline = prop("linkable", props.linkable)(MarkdownHeadline);

    return (
      <StyledMarkdown className={props.className}>
        {props.source &&
          remark()
            .use(reactRenderer, {
              sanitize: sanitization,
              remarkReactComponents: {
                a: MarkdownLink,
                blockquote: MarkdownBlockquote,
                code: MarkdownCode,
                h1: is("h1")(Headline),
                h2: is("h2")(Headline),
                h3: is("h3")(Headline),
                h4: is("h4")(Headline),
                h5: is("h5")(Headline),
                h6: is("h6")(Headline),
                hr: MarkdownHr,
                img: MarkdownImage,
                li: MarkdownItem,
                p: MarkdownCopy,
                pre: preProps => {
                  const [child = {}] = preProps.children || [];
                  const {props: childProps = {}} = child;
                  const language = getLanguages(preProps)[0];
                  const highlights = getHighlights(preProps)[0];

                  switch (language) {
                    case "widget": {
                      if (typeof props.widgetSrc !== "string") {
                        return null;
                      }

                      const srcdoc = [
                        `<!doctype html>`,
                        `<html>`,
                        `<head>`,
                        `<script src="${props.widgetSrc}"></script>`,
                        `</head>`,
                        `<body>`,
                        `<div data-widget-mount></div>`,
                        `<textarea data-widget-state style="display: none;">`,
                        encodeURIComponent(
                          JSON.stringify({
                            state: props.widgetState,
                            code: childProps.children.join("\n")
                          })
                        ),
                        `</textarea>`,
                        `</body>`,
                        `</html>`
                      ].join("");

                      return <WidgetFrame srcDoc={srcdoc} src="/" />;
                    }
                    default:
                      return (
                        <MarkdownCodeBlock
                          {...preProps}
                          language={language}
                          highlights={highlights}
                        />
                      );
                  }
                },
                ul: is("ul")(MarkdownList),
                ol: is("ol")(MarkdownList)
              }
            })
            .use(emoji)
            .processSync(frontmatter(props.source).body).contents}
      </StyledMarkdown>
    );
  }
}

const StyledMarkdown = styled.div`
  & table {
    text-align: left;
    display: block;
    width: 100%;
    overflow: auto;
    margin: 0 0 16px 0;
    border-spacing: 0;
    border-collapse: collapse;
    font-size: 18px;
    line-height: 24px;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  & tr {
    color: ${props => props.theme.colors.color};
    border-top: 1px solid ${props => props.theme.colors.border};
    background: transparent;
  }
  & tbody tr:nth-child(odd) {
    background: ${props => props.theme.colors.backgroundTertiary};
  }
  & th {
    font-weight: 600;
  }
  & th,
  & td {
    padding: 20px 16px;
    border: 1px solid ${props => props.theme.colors.border};
    vertical-align: top;
  }
`;

function is(is) {
  return Component => props => <Component is={is} {...props} />;
}

function prop(name, value) {
  return Component => props => <Component {...props} {...{ [name]: value }} />;
}

function getLanguagePayload({ children }) {
  const [child] = children;

  if (!child) {
    return [];
  }

  const className = child.props.className;

  if (!className) {
    return [];
  }

  return className.split(" ").map(n => n.replace("language-", ""));
}

function getLanguages({ children }) {
  const payload = getLanguagePayload({ children })
    .map(n => n.replace(/\{[\d\-,\s]*\}$/, ""))
    .find(n => typeof n === "string" && n.length > 0);

  if (!payload) {
    return [];
  }

  return payload.split(":");
}

function getHighlights({ children }) {
  return getLanguagePayload({ children })
    .map(n => n.match(/\{([\d\-,\s]*)\}$/, ""))
    .map(n => (n !== null ? n[1] : ""))
    .map(n => rangeParser.parse(n));
}

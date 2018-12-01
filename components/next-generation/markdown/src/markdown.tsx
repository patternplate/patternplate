import * as React from "react";
import styled from "styled-components";
import * as ReactAddonsTextContent from "react-addons-text-content";

import * as remark from "remark";
import * as remarkFrontmatter from "remark-frontmatter";
import * as remarkEmoji from "remark-gemoji-to-emoji";
import * as remarkCustomBlocks from "remark-custom-blocks";
import * as remarkRehype from "remark-rehype";
import * as rehypeReact from "rehype-react";
import * as rehypeSanitize from "rehype-sanitize";
import * as rangeParser from "parse-numeric-range";
import { sanitize } from "./sanitize";
import { gridHandler } from "./grid-handler";

import { MarkdownDiv } from "./markdown-div";
import { MarkdownDetails } from "./markdown-details";
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
import { MarkdownWidget } from "./markdown-widget";

export interface MarkdownProps {
  linkable?: boolean;
  className?: string;
  source: string;
  widgetSrc?: string;
  widgetState?: unknown;
}

export class Markdown extends React.Component<MarkdownProps> {
  private processor = remark()
    .use(remarkFrontmatter)
    .use(remarkCustomBlocks, {
      details: {
        title: "optional",
        details: true
      },
      grid: {
        title: "optional"
      },
      ["grid-column"]: {
        title: "required"
      }
    })
    .use(remarkEmoji)
    .use(remarkRehype, {
      handlers: {
        gridCustomBlock: gridHandler
      }
    })
    .use(rehypeSanitize, sanitize)
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        a: MarkdownLink,
        div: MarkdownDiv,
        blockquote: MarkdownBlockquote,
        code: MarkdownCode,
        h1: (props) => <MarkdownHeadline order={1}>{props.children}</MarkdownHeadline>,
        h2: (props) => <MarkdownHeadline order={2}>{props.children}</MarkdownHeadline>,
        h3: (props) => <MarkdownHeadline order={3}>{props.children}</MarkdownHeadline>,
        h4: (props) => <MarkdownHeadline order={4}>{props.children}</MarkdownHeadline>,
        h5: (props) => <MarkdownHeadline order={4}>{props.children}</MarkdownHeadline>,
        h6: (props) => <MarkdownHeadline order={4}>{props.children}</MarkdownHeadline>,
        hr: MarkdownHr,
        img: MarkdownImage,
        li: MarkdownItem,
        p: MarkdownCopy,
        pre: props => {
          const [language] = getLanguages(props);
          const [highlights] = getHighlights(props);

          if (language === "widget") {
            return (
              <MarkdownWidget
                src={this.props.widgetSrc}
                state={this.props.widgetState}
                code={ReactAddonsTextContent(props.children)}
              />
            );
          }

          return (
            <MarkdownCodeBlock
              language={language}
              highlights={highlights}
            >
              {props.children}
            </MarkdownCodeBlock>
          );
        },
        ul: is("ul")(MarkdownList),
        ol: is("ol")(MarkdownList),
        details: MarkdownDetails,
        "x-grid": props => (
          <MarkdownDiv grid={true}>{props.children}</MarkdownDiv>
        ),
        "x-grid-column": MarkdownDiv
      }
    });

  public render(): JSX.Element | null {
    const { props } = this;
    const elements = this.processor.processSync(props.source).contents;
    const element = React.Children.only(elements);

    return (
      <StyledMarkdown className={props.className}>
        {props.source && element.props.children}
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
  return Component => props => <Component as={is} {...props} />;
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

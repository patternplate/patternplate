import * as React from "react";
import styled from "styled-components";
import * as remark from "remark";
import * as remarkFrontmatter from "remark-frontmatter";
import * as remarkEmoji from "remark-gemoji-to-emoji";
import * as remarkCustomBlocks from "remark-custom-blocks";
import { remarkVideo } from "./remark-video";
import * as remarkRehype from "remark-rehype";
import * as rehypeReact from "rehype-react";
import * as rehypeSanitize from "rehype-sanitize";
import { sanitize } from "./sanitize";
import * as Handlers from "./handlers";
import * as M from "./markdown-components";

export { MarkdownList, MarkdownItem, MarkdownLink } from "./markdown-components";


export const MarkdownWidgetSrc = React.createContext('');
export const MarkdownWidgetState = React.createContext({});

export interface MarkdownProps {
  linkable?: boolean;
  className?: string;
  source: string;
  widgetSrc?: string;
  widgetState?: object;
}

export class Markdown extends React.Component<MarkdownProps> {
  private processor = remark()
    .use(remarkFrontmatter)
    .use(remarkVideo)
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
        gridCustomBlock: Handlers.gridHandler,
        video: Handlers.videoHandler
      }
    })
    .use(rehypeSanitize, sanitize)
    .use(rehypeReact, {
      createElement: React.createElement,
      components: {
        a: M.MarkdownLink,
        div: M.MarkdownDiv,
        blockquote: M.MarkdownBlockquote,
        code: M.MarkdownCode,
        h1: prop({ order: 1, linkable: true })(M.MarkdownHeadline),
        h2: prop({ order: 2, linkable: true })(M.MarkdownHeadline),
        h3: prop({ order: 3, linkable: true })(M.MarkdownHeadline),
        h4: prop({ order: 4 })(M.MarkdownHeadline),
        h5: prop({ order: 4 })(M.MarkdownHeadline),
        h6: prop({ order: 4 })(M.MarkdownHeadline),
        hr: M.MarkdownHr,
        img: M.MarkdownImage,
        li: M.MarkdownItem,
        p: M.MarkdownCopy,
        pre: M.MarkdownPre,
        ul: is("ul")(M.MarkdownList),
        ol: is("ol")(M.MarkdownList),
        details: M.MarkdownDetails,
        "x-grid": (props) => <M.MarkdownDiv grid={true}>{props.children}</M.MarkdownDiv>,
        "x-grid-column": M.MarkdownDiv,
        "x-video": M.MarkdownVideo
      }
    });

  public render(): JSX.Element | null {
    const { props } = this;
    const elements = this.processor.processSync(props.source).contents;
    const context = { widgetState: this.props.widgetState, widgetSrc: this.props.widgetSrc };

    return (
      <StyledMarkdown className={props.className}>
        <MarkdownWidgetSrc.Provider value={this.props.widgetSrc}>
          <MarkdownWidgetState.Provider value={this.props.widgetState}>
            {props.source && elements}
          </MarkdownWidgetState.Provider>
        </MarkdownWidgetSrc.Provider>
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

function prop(p: { [key: string]: any }) {
  return Component => props => <Component {...props} {...p} />;
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


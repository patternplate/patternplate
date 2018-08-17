const frontmatter = require("front-matter");
const React = require("react");
const remark = require("remark");
const emoji = require("remark-gemoji-to-emoji");
const reactRenderer = require("remark-react");
const styled = require("styled-components").default;
const vm = require("vm");
const resizer = require("iframe-resizer");
const rangeParser = require("parse-numeric-range");

const MarkdownBlockQuote = require("./markdown-blockquote");
const MarkdownCode = require("./markdown-code");
const MarkdownCodeBlock = require("./markdown-code-block");
const MarkdownCopy = require("./markdown-copy");
const MarkdownHeadline = require("./markdown-headline");
const MarkdownHr = require("./markdown-hr");
const MarkdownImage = require("./markdown-image");
const MarkdownItem = require("./markdown-item");
const MarkdownList = require("./markdown-list");
const MarkdownLink = require("./markdown-link");

class Markdown extends React.Component {
  render() {
    const { props } = this;
    const Headline = prop("linkable", props.linkable)(MarkdownHeadline);

    return (
      <StyledMarkdown className={props.className}>
        {props.source &&
          remark()
            .use(reactRenderer, {
              sanitize: false,
              remarkReactComponents: {
                a: MarkdownLink,
                blockquote: MarkdownBlockQuote,
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

class WidgetFrame extends React.Component {
  componentDidMount() {
    if (this.ref && !this.resizer) {
      resizer.iframeResizer(
        {
          warningTimeout: 0,
          log: false
        },
        this.ref
      );
    }
  }

  render() {
    const { props } = this;
    return <StyledWidgetFrame innerRef={ref => (this.ref = ref)} {...props} />;
  }
}

const StyledWidgetFrame = styled.iframe`
  width: 100%;
  border: none;
`;

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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  & tr {
    color: ${props => props.theme.colors.color};
    border-top: 1px solid ${props => props.theme.colors.border};
    background: transparent;
  }
  & tr:nth-child(2n) {
    background: ${props => props.theme.colors.backgroundTertiary};
  }
  & th {
    padding: 6px 13px;
    border: 1px solid ${props => props.theme.colors.border};
    font-weight: 600;
  }
  & td {
    padding: 6px 13px;
    border: 1px solid ${props => props.theme.colors.border};
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
    .find(n => typeof n === "string" && n.length > 0)

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

module.exports = Markdown;

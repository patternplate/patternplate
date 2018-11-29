"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const widget_frame_1 = require("./widget-frame");
const frontmatter = require("front-matter");
const remark = require("remark");
const emoji = require("remark-gemoji-to-emoji");
const reactRenderer = require("remark-react");
const rangeParser = require("parse-numeric-range");
const markdown_blockquote_1 = require("./markdown-blockquote");
const markdown_code_1 = require("./markdown-code");
const markdown_code_block_1 = require("./markdown-code-block");
const markdown_copy_1 = require("./markdown-copy");
const markdown_headline_1 = require("./markdown-headline");
const markdown_hr_1 = require("./markdown-hr");
const markdown_image_1 = require("./markdown-image");
const markdown_item_1 = require("./markdown-item");
const markdown_list_1 = require("./markdown-list");
const markdown_link_1 = require("./markdown-link");
class Markdown extends React.Component {
    render() {
        const { props } = this;
        const Headline = prop("linkable", props.linkable)(markdown_headline_1.MarkdownHeadline);
        return (React.createElement(StyledMarkdown, { className: props.className }, props.source &&
            remark()
                .use(reactRenderer, {
                sanitize: false,
                remarkReactComponents: {
                    a: markdown_link_1.MarkdownLink,
                    blockquote: markdown_blockquote_1.MarkdownBlockquote,
                    code: markdown_code_1.MarkdownCode,
                    h1: is("h1")(Headline),
                    h2: is("h2")(Headline),
                    h3: is("h3")(Headline),
                    h4: is("h4")(Headline),
                    h5: is("h5")(Headline),
                    h6: is("h6")(Headline),
                    hr: markdown_hr_1.MarkdownHr,
                    img: markdown_image_1.MarkdownImage,
                    li: markdown_item_1.MarkdownItem,
                    p: markdown_copy_1.MarkdownCopy,
                    pre: preProps => {
                        const [child = {}] = preProps.children || [];
                        const { props: childProps = {} } = child;
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
                                    encodeURIComponent(JSON.stringify({
                                        state: props.widgetState,
                                        code: childProps.children.join("\n")
                                    })),
                                    `</textarea>`,
                                    `</body>`,
                                    `</html>`
                                ].join("");
                                return React.createElement(widget_frame_1.WidgetFrame, { srcDoc: srcdoc, src: "/" });
                            }
                            default:
                                return (React.createElement(markdown_code_block_1.MarkdownCodeBlock, Object.assign({}, preProps, { language: language, highlights: highlights })));
                        }
                    },
                    ul: is("ul")(markdown_list_1.MarkdownList),
                    ol: is("ol")(markdown_list_1.MarkdownList)
                }
            })
                .use(emoji)
                .processSync(frontmatter(props.source).body).contents));
    }
}
exports.Markdown = Markdown;
const StyledMarkdown = styled_components_1.default.div `
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
    return Component => props => React.createElement(Component, Object.assign({ is: is }, props));
}
function prop(name, value) {
    return Component => props => React.createElement(Component, Object.assign({}, props, { [name]: value }));
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
//# sourceMappingURL=markdown.js.map
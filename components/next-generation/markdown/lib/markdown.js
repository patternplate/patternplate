"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
// import * as frontmatter from "front-matter";
const remark = require("remark");
const remarkRehype = require("remark-rehype");
const rehypeRaw = require("rehype-raw");
const rehypeReact = require("rehype-react");
const rehypeSanitize = require("rehype-sanitize");
const remarkFrontmatter = require("remark-frontmatter");
const remarkEmoji = require("remark-gemoji-to-emoji");
const rangeParser = require("parse-numeric-range");
const sanitize_1 = require("./sanitize");
const markdown_div_1 = require("./markdown-div");
const markdown_details_1 = require("./markdown-details");
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
const processor = remark()
    .use(remarkFrontmatter)
    .use(remarkEmoji)
    .use(remarkRehype, { allowDangerousHTML: true })
    .use(rehypeRaw)
    .use(rehypeSanitize, sanitize_1.sanitize)
    .use(rehypeReact, {
    createElement: React.createElement,
    components: {
        a: markdown_link_1.MarkdownLink,
        div: markdown_div_1.MarkdownDiv,
        blockquote: markdown_blockquote_1.MarkdownBlockquote,
        code: markdown_code_1.MarkdownCode,
        h1: is("h1")(markdown_headline_1.MarkdownHeadline),
        h2: is("h2")(markdown_headline_1.MarkdownHeadline),
        h3: is("h3")(markdown_headline_1.MarkdownHeadline),
        h4: is("h4")(markdown_headline_1.MarkdownHeadline),
        h5: is("h5")(markdown_headline_1.MarkdownHeadline),
        h6: is("h6")(markdown_headline_1.MarkdownHeadline),
        hr: markdown_hr_1.MarkdownHr,
        img: markdown_image_1.MarkdownImage,
        li: markdown_item_1.MarkdownItem,
        p: markdown_copy_1.MarkdownCopy,
        pre: props => {
            const [language] = getLanguages(props);
            const [highlights] = getHighlights(props);
            return React.createElement(markdown_code_block_1.MarkdownCodeBlock, Object.assign({}, props, { language: language, highlights: highlights }));
        },
        ul: is("ul")(markdown_list_1.MarkdownList),
        ol: is("ol")(markdown_list_1.MarkdownList),
        details: markdown_details_1.MarkdownDetails
    }
});
class Markdown extends React.Component {
    render() {
        const { props } = this;
        const elements = processor.processSync(props.source).contents;
        const element = React.Children.only(elements);
        return (React.createElement(StyledMarkdown, { className: props.className }, props.source && element.props.children));
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
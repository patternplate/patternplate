const frontmatter = require('front-matter');
const React = require('react');
const remark = require('remark');
const emoji = require('remark-gemoji-to-emoji');
const reactRenderer = require('remark-react');
const styled = require("styled-components").default;

const MarkdownBlockQuote = require('./markdown-blockquote');
const MarkdownCode = require('./markdown-code');
const MarkdownCodeBlock = require('./markdown-code-block');
const MarkdownCopy = require('./markdown-copy');
const MarkdownHeadline = require('./markdown-headline');
const MarkdownHr = require('./markdown-hr');
const MarkdownImage = require('./markdown-image');
const MarkdownItem = require('./markdown-item');
const MarkdownList = require('./markdown-list');
const MarkdownLink = require('./markdown-link');

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
                pre: MarkdownCodeBlock,
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
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
      sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  & tr {
    color: ${props => props.theme.color};
    border-top: 1px solid ${props => props.theme.border};
    background: transparent;
  }
  & tr:nth-child(2n) {
    background: ${props => props.theme.backgroundTertiary};
  }
  & th {
    padding: 6px 13px;
    border: 1px solid ${props => props.theme.border};
    font-weight: 600;
  }
  & td {
    padding: 6px 13px;
    border: 1px solid ${props => props.theme.border};
  }
`;

function is(is) {
  return Component => props => <Component is={is} {...props} />;
}

function prop(name, value) {
  return Component => props => <Component {...props} {...{ [name]: value }} />;
}

module.exports = Markdown;

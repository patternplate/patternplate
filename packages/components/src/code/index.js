const React = require("react");
const styled = require("styled-components").default;
const { includes } = require("lodash");

const refractor = require("refractor/core.js");
const toh = require("hast-to-hyperscript");

// in core: css
refractor.register(require("refractor/lang/less.js"));
refractor.register(require("refractor/lang/scss.js"));
refractor.register(require("refractor/lang/stylus.js"));

// in core: js
refractor.register(require("refractor/lang/jsx.js"));
refractor.register(require("refractor/lang/typescript.js"));
refractor.register(require("refractor/lang/tsx.js"));
refractor.register(require("refractor/lang/json.js"));

// in core: xml, html, svg
refractor.register(require("refractor/lang/markdown.js"));

refractor.register(require("refractor/lang/bash.js"));
refractor.register(require("refractor/lang/diff.js"));

module.exports = Code;
module.exports.highlight = highlight;
module.exports.toElements = toElements;

function Code(props) {
  const source = highlightCode(props.language, props.children);
  const code = <StyledCode className={props.className}>{source}</StyledCode>;
  return props.block ? <pre>{code}</pre> : code;
}

const themes = {
  dark: {
    mono1: "#abb2bf",
    mono2: "#818896",
    mono3: "#5c6370",
    hue1: "#56b6c2",
    hue2: "#61aeee",
    hue3: "#c678dd",
    hue4: "#7ec699",
    hue5: "#e2777a",
    hue52: "#be5046",
    hue6: "#f8c555",
    hue62: "#f08d49"
  },
  light: {
    mono1: "#383a42",
    mono2: "#686b77",
    mono3: "#a0a1a7",
    hue1: "#0184bb",
    hue2: "#4078f2",
    hue3: "#a626a4",
    hue4: "#50a14f",
    hue5: "#e45649",
    hue52: "#c91243",
    hue6: "#f08d49",
    hue62: "#c18401"
  }
};

const themed = key => props => themes[props.theme.name][key];

const StyledCode = styled.code`
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  color: ${themed("mono1")};
  font-family: ${props => props.theme.fonts.code};

  .token.comment,
  .token.block-comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: ${themed("mono3")};
  }

  .token.punctuation {
    color: ${themed("mono1")};
  }

  .token.tag,
  .token.attr-name,
  .token.namespace,
  .token.deleted {
    color: ${themed("hue5")};
  }

  .token.function-name {
    color: #6196cc;
  }

  .token.boolean,
  .token.number,
  .token.function {
    color: ${themed("hue62")};
  }

  .token.property,
  .token.class-name,
  .token.constant,
  .token.symbol {
    color: ${themed("hue6")};
  }

  .token.selector,
  .token.important,
  .token.atrule,
  .token.keyword,
  .token.builtin {
    color: ${themed("hue2")};
  }

  .token.string,
  .token.char,
  .token.attr-value,
  .token.regex,
  .token.variable {
    color: ${themed("hue4")};
  }

  .token.operator,
  .token.entity,
  .token.url {
    color: ${themed("hue5")};
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.inserted {
    color: green;
  }
`;

function highlightCode(language, source = "") {
  if (!language) {
    return source;
  }
  if (!source) {
    return source;
  }
  const hast = highlight(language, source);
  return toElements(hast);
}

const ALIASES = {
  md: 'markdown',
  sh: 'bash'
};

function highlight(language, source) {
  const lang = ALIASES[language] || language;

  if (!refractor.registered(lang)) {
    return source;
  }

  return refractor.highlight(source, lang);
}

function toElements(children) {
  if (!Array.isArray(children)) {
    return children;
  }

  const root = toh(React.createElement, {
    type: "element",
    tagName: "div",
    children
  });

  return root.props.children;
}

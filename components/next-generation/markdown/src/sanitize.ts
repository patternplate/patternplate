export const sanitize = {
  strip: ["script"],
  clobberPrefix: "user-content-",
  clobber: ["name", "id"],
  ancestors: {
    li: ["ol", "ul"],
    summary: ["details"],
    tbody: ["table"],
    tfoot: ["table"],
    thead: ["table"],
    td: ["table"],
    th: ["table"],
    tr: ["table"],
    "x-grid-column": ["x-grid"]
  },
  protocols: {
    href: ["http", "https", "mailto"],
    cite: ["http", "https"],
    src: ["http", "https"],
    longDesc: ["http", "https"]
  },
  tagNames: [
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "h7",
    "h8",
    "br",
    "b",
    "i",
    "strong",
    "em",
    "a",
    "pre",
    "code",
    "img",
    "tt",
    "div",
    "ins",
    "del",
    "sup",
    "sub",
    "p",
    "ol",
    "ul",
    "table",
    "thead",
    "tbody",
    "tfoot",
    "blockquote",
    "dl",
    "dt",
    "dd",
    "kbd",
    "q",
    "samp",
    "var",
    "hr",
    "ruby",
    "rt",
    "rp",
    "li",
    "tr",
    "td",
    "th",
    "s",
    "strike",
    "summary",
    "details",
    "summary",
    "x-grid",
    "x-grid-column",
    "x-video"
  ],
  attributes: {
    a: ["href"],
    code: ["className"],
    img: ["src", "longDesc"],
    div: ["itemScope", "itemType"],
    blockquote: ["cite"],
    del: ["cite"],
    ins: ["cite"],
    q: ["cite"],
    "x-grid-column": ["start", "end"],
    "x-video": [
      "provider",
      "src",
      "autoPlay",
      "autoplay",
      "controls",
      "playsInline",
      "playsinline",
      "muted",
      "loop",
      "color",
      "poster"
    ],
    "*": [
      "abbr",
      "accept",
      "acceptCharset",
      "accessKey",
      "action",
      "align",
      "alt",
      "axis",
      "border",
      "cellPadding",
      "cellSpacing",
      "char",
      "charoff",
      "charSet",
      "checked",
      "clear",
      "cols",
      "colSpan",
      "color",
      "compact",
      "coords",
      "dateTime",
      "dir",
      "disabled",
      "encType",
      "htmlFor",
      "frame",
      "headers",
      "height",
      "hrefLang",
      "hspace",
      "isMap",
      "id",
      "label",
      "lang",
      "maxLength",
      "media",
      "method",
      "multiple",
      "name",
      "nohref",
      "noshade",
      "nowrap",
      "open",
      "prompt",
      "readOnly",
      "rel",
      "rev",
      "rows",
      "rowSpan",
      "rules",
      "scope",
      "selected",
      "shape",
      "size",
      "span",
      "start",
      "summary",
      "tabIndex",
      "target",
      "title",
      "type",
      "useMap",
      "valign",
      "value",
      "vspace",
      "width",
      "itemProp"
    ]
  }
};
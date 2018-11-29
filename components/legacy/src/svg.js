const h = require("react").createElement;
const b = require("btoa");
const styled = require("styled-components").default;
const { DOMParser, XMLSerializer } = require("xmldom");
const { camelCase } = require("lodash");

const parser = new DOMParser();
const serializer = new XMLSerializer();

/**
 * These attributes are valid on all SVG elements and accepted by this
 * renderer.
 * All attributes will be converted to their camelCase version.
 * This allows using valid SVG strings.
 * Extend this list to allow additional default SVG attributes.
 *
 * @type {Array}
 */
const SHARED_ATTRIBUTES = ["fill", "filter", "stroke", "stroke-width"];

const ATTRIBUTES = {
  defs: [...SHARED_ATTRIBUTES],
  symbol: ["id"],
  linearGradient: [...SHARED_ATTRIBUTES, "id", "x1", "y1", "x2", "y2"],
  stop: ["offset", "stop-color"],
  circle: [...SHARED_ATTRIBUTES, "cx", "cy", "r", "style"],
  g: [...SHARED_ATTRIBUTES, "x", "y"],
  path: [...SHARED_ATTRIBUTES, "d", "style"],
  polygon: [...SHARED_ATTRIBUTES, "points"],
  rect: [...SHARED_ATTRIBUTES, "x", "y", "width", "height", "style"],
  svg: ["width", "height", "viewBox", "x", "y", "style", "xmlns", "xmlns:xlink"]
};

const TAG_NAMES = Object.keys(ATTRIBUTES);

function attributes(node, key) {
  return (ATTRIBUTES[node.tagName] || []).reduce(
    (props, name) => {
      const attribute = node.attributes.getNamedItem(name);
      const reactProp = camelCase(name);
      if (attribute && attribute.specified) {
        props[reactProp] = attribute.value;
      }
      return props;
    },
    { key }
  );
}

export function btoa(source) {
  return `data:image/svg+xml;base64,${b(source)}`;
}

export function parse(source) {
  const doc = parser.parseFromString(source, "image/svg+xml");
  const parsed = Array.prototype.slice.call(doc.childNodes).find(node => node.tagName === "svg");
  parsed.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  return parsed;
}

export function png(source) {
  return new Promise((resolve, reject) => {
    const img = new global.Image();
    const canvas = global.document.createElement("canvas");
    const ratio = global.devicePixelRatio || 1;

    canvas.width = 16 * ratio;
    canvas.height = 16 * ratio;

    const context = canvas.getContext("2d");

    img.onload = () => {
      context.drawImage(img, 0, 0);
      resolve(canvas.toDataURL("image/png"));
    };

    img.src = btoa(source);
  });
}

export function purge(parsed) {
  return Array.prototype.slice.call(parsed)
    .filter(node => TAG_NAMES.includes(node.tagName))
    .map(node => {
      node.childNodes = purge(node.childNodes);

      const attributes = ATTRIBUTES[node.tagName] || [];

      for (let i = 0; i < node.attributes.length; i++) {
        const attribute = node.attributes[i];
        if (!attributes.includes(attribute.name)) {
          node.removeAttribute(attribute.name);
        }
      }

      return node;
    });
}

export function render(element) {
  const [tagName, props, children = []] = element;
  const { style, ...rest } = props;
  const tag = styled(tagName)`
    ${style};
  `;
  return h(tag, rest, children.map(c => render(c)));
}

export function sanitize(parsed) {
  return [...parsed].map((node, i) => [
    node.tagName,
    attributes(node, i),
    sanitize(node.childNodes)
  ]);
}

export function stringify(tree) {
  return serializer.serializeToString(tree);
}

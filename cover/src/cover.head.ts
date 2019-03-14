import Helmet from "react-helmet"

export const head = () => {
  const head = Helmet.renderStatic();
  return [
    head.title.toString(),
    head.meta.toString(),
    head.link.toString(),
    head.style.toString(),
    head.script.toString(),
  ].join('\n');
};

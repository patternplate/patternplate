import path from "path";
import * as sander from "sander";

import clientRequire from "./client-require";
import serverRequire from "./server-require";

// Const renderPage = clientRequire('render-page');
// const {getDocsTree} = serverRequire('get-docs');

export default buildDocs;

async function buildDocs(base, target, context) {
  const { app, rewriter } = context;
  const renderFilters = { flags: context.flags };
  const docs = await getDocsTree(base);
  const write = adject(sander.writeFile, rewriter);

  return traverse(docs, async doc => {
    const p = (await doc).path.join("/");
    const t = path.resolve(target, "doc", strip(p), "index.html");
    const page = await renderPage(app, `/doc/${strip(p)}`, renderFilters);
    return write(page, t);
  });
}

function adject(subject, adjective) {
  return (...args) => subject(args[args.length - 1], adjective(...args));
}

function strip(p) {
  return path.join(path.dirname(p), path.basename(p, path.extname(p)));
}

function traverse(tree, predecate) {
  const results = [];

  tree.children.forEach(child => {
    predecate(child);
    if (child.children) {
      results.push(traverse(child, predecate));
    }
  });

  return results;
}

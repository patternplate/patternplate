import path from "path";
import globby from "globby";

export default getRewriter;

async function getRewriter(buildTargetPath) {
  const staticPath = path.resolve(process.cwd(), "static");
  const statics = await globby(`${staticPath}/**/*`, { nodir: true });

  const rewriteables = statics.map(s => {
    const fragments = path.relative(process.cwd(), s).split(path.sep);
    return ["/api", ...fragments].join("/");
  });

  return (content, targetPath) => {
    const source = (content || "").toString("utf-8");
    return rewriteables.reduce((content, rewritable) => {
      if (!source.includes(rewritable)) {
        return source;
      }

      // Convert rewritable url to path (os-sensitive)
      const rewritablePath = rewritable
        .split("/")
        .filter(Boolean)
        .join(path.sep);

      const assetPath = path.resolve(buildTargetPath, rewritablePath);

      const relative = path
        .relative(path.dirname(targetPath), assetPath)
        .split(path.sep)
        .join("/");

      const matcher = new RegExp(rewritable, "g");
      return source.replace(matcher, relative);
    }, source);
  };
}

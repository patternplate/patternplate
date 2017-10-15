import path from "path";
import serverRequire from "./server-require";

// Const urlQuery = serverRequire('utilities/url-query');

export default getTargets;

function getTargets(base, baseName, set) {
  const short = path.resolve(base, baseName);
  const long = urlQuery.format({
    pathname: short,
    query: { environment: set.env }
  });
  return set.env === "index" ? [short, long] : [long];
}

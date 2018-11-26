import path from "path";
import urlQuery from "./url-query";

export default function getIdByPathname(pathname, base = "/") {
  const parsed = urlQuery.parse(pathname);
  const fragments = (path.posix || path)
    .relative(base, parsed.pathname)
    .split("/");

  const last = fragments.pop();
  return [...fragments, path.basename(last, path.extname(last))].join("/");
}

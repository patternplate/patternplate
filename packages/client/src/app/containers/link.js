import url from "url";
import Path from "path";
import queryString from "querystring";
import { Link } from "@patternplate/components";
import { pickBy } from "lodash";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { scrollTo } from "../actions";
import selectItem from "../selectors/item";
import { flat as selectPool } from "../selectors/pool";

export default connect(mapState, mapDispatch)(Link.RawLink);

function mapState(state, own) {
  const location = state.routing.locationBeforeTransitions;

  if (isAbsolute(own.href)) {
    return { ...own, external: true };
  }

  return Object.assign({}, own, {
    href: getHref(own, {
      base: state.base,
      location,
      item: selectItem(state),
      pool: selectPool(state)
    })
  });
}

function mapDispatch(dispatch, ownProps) {
  return bindActionCreators(
    {
      onClick(e) {
        if (ownProps.external || isAbsolute(ownProps.href)) {
          return { type: null };
        }
        e.preventDefault();
        const parsed = url.parse(e.currentTarget.href);

        if (parsed.hash) {
          scrollTo(parsed.hash.slice(1));
        }

        return push([parsed.path, parsed.hash].join(""));
      }
    },
    dispatch
  );
}

function getHref(props, context) {
  if (props.external === true || !context.location) {
    return props.href;
  }

  const parsed = props.href
    ? url.parse(props.href)
    : {
        pathname: context.location.pathname,
        query: queryString.stringify(context.location.query)
      };

  parsed.query = queryString.parse(parsed.query);

  const query =
    props.query === null
      ? {}
      : pickBy(
          Object.assign(
            {},
            context.location.query,
            parsed.query,
            props.query || context.location.query
          ),
          (value, key) => {
            // TODO: deduce this for all keys from reduce config
            // special case "navigation-enabled", invert logic
            if (key === "navigation-enabled") {
              return value !== true && value !== "true";
            }

            // if the key is not in the current query, add it
            if (!context.location.query.hasOwnProperty(key)) {
              return true;
            }
            // omit "falsy" values to keep url shorter
            return value !== "false" && value !== "0" && !!value;
          }
        );

  parsed.pathname =
    parsed.pathname !== null ? replaceExt(parsed.pathname, ".html") : null;

  // Legacy:
  // We used to require users to enter awkward relative/absolute paths
  // - `./doc/:docPath:`
  // - `./pattern/:patternId:`
  //
  // TODO: Deprecate this behaviour with next major version
  if (
    parsed.pathname &&
    parsed.pathname !== null &&
    (parsed.pathname.startsWith("./pattern") ||
      parsed.pathname.startsWith("./doc"))
  ) {
    const pathname =
      typeof parsed.pathname === "string"
        ? prefix(context.base, parsed.pathname)
        : context.location.pathname;

    return url.format({
      pathname,
      query,
      hash: props.hash || (parsed.hash || "#").slice(1)
    });
  }

  // Try to resolve other relative links from the currently selected item
  if (context.item && !(parsed.pathname || '').startsWith('/')) {
    const rawTargetPath = (Path.unix || Path)
      .resolve(Path.dirname(context.item.path), parsed.pathname || '')
      .slice(1);

    const targetPath = replaceExt(rawTargetPath, '.md');
    const match = context.pool.find(item => item.contentType === "doc" && item.path === targetPath);

    if (match) {
      const parsedMatch = url.parse(match.href);
      return url.format({
        pathname: parsedMatch.pathname,
        query,
        hash: props.hash || (parsedMatch.hash || "#").slice(1)
      });
    }

    const patternTargetPath = replaceExt(rawTargetPath, '');
    const patternMatch = context.pool.find(item => item.contentType === "pattern" && Path.dirname(item.path) === patternTargetPath);

    if (patternMatch) {
      const parsedMatch = url.parse(patternMatch.href);

      return url.format({
        pathname: parsedMatch.pathname,
        query,
        hash: props.hash || (parsedMatch.hash || "#").slice(1)
      });
    }
  }


  return url.format({
    pathname: parsed.pathname,
    query,
    hash: props.hash || (parsed.hash || "#").slice(1)
  });
}

function prefix(base, pathname) {
  const b = norm(base);
  const p = norm(pathname);

  if (p === "") {
    return `/${b}`;
  }

  if (p.startsWith(b)) {
    return `/${p}`;
  }

  return `/${[norm(base), norm(pathname)].join("/")}`;
}

function norm(p) {
  return p
    .split("/")
    .filter(Boolean)
    .join("/");
}

function replaceExt(href, ext) {
  const parsed = url.parse(href);

  if (typeof parsed.pathname === "string" && parsed.pathname !== "/") {
    parsed.pathname = [
      Path.dirname(parsed.pathname),
      `${Path.basename(parsed.pathname, Path.extname(parsed.path))}${ext}`
    ].join("/");
  }

  return url.format(parsed);
}

function isAbsolute(href) {
  const parsed = url.parse(href || "./");

  if (parsed.protocol) {
    return true;
  }

  if ((parsed.pathname || "").startsWith("/api/static/")) {
    return true;
  }
}

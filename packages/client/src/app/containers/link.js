import url from "url";
import Path from "path";
import queryString from "querystring";
import { Link } from "@patternplate/components";
import { pickBy } from "lodash";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { scrollTo } from "../actions";

export default connect(mapState, mapDispatch)(Link.RawLink);

function mapState(state, own) {
  const location = state.routing.locationBeforeTransitions;
  return Object.assign({}, own,
    { href: getHref(own, { base: state.base, location }) }
  );
}

function mapDispatch(dispatch, ownProps) {
  return bindActionCreators(
    {
      onClick(e) {
        if (ownProps.external) {
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

  const query = props.query === null
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
        return value !== "false" && value !== "0" && !!(value);
      }
    );

  if (
    parsed.pathname &&
    (parsed.pathname.includes("pattern") ||
      parsed.pathname.includes("doc/docs"))
  ) {
    parsed.pathname = `${Path.dirname(parsed.pathname)}/${Path.basename(
      parsed.pathname,
      Path.extname(parsed.pathname)
    )}.html`;
  }

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

function prefix(base, pathname) {
  const b = norm(base);
  const p = norm(pathname);

  if (p === '') {
    return `/${b}`;
  }

  if (p.startsWith(b)) {
    return `/${p}`;
  }

  return `/${[norm(base), norm(pathname)].join("/")}`;
}

function norm(p) {
  return p.split("/").filter(Boolean).join("/");
}

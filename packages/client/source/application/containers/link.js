import url from "url";
import queryString from "querystring";
import { Link } from "@patternplate/components";
import { pickBy } from "lodash";
import { connect } from "react-redux";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";

export default connect(mapState, mapDispatch)(Link.RawLink);

function mapState(state, own) {
  const location = state.routing.locationBeforeTransitions;
  return {
    ...own,
    href: getHref(own, { base: state.base, location })
  };
}

function mapDispatch(dispatch, ownProps) {
  return bindActionCreators(
    {
      onClick(e) {
        if (ownProps.external) {
          return { type: null };
        }
        e.preventDefault();
        return push(url.parse(e.currentTarget.href).path);
      }
    },
    dispatch
  );
}

function getHref(props, context) {
  if (props.external || !context.location) {
    return props.href;
  }

  const parsed = props.href
    ? url.parse(props.href)
    : {
        pathname: context.location.pathname,
        query: queryString.stringify(context.location.query)
      };

  parsed.query = queryString.parse(parsed.query);

  const query = pickBy(
    Object.assign(
      {},
      context.location.query,
      parsed.query,
      props.query || context.location.query
    ),
    value => value !== "false" && value !== false
  );

  const pathname =
    typeof parsed.pathname === "string"
      ? url.resolve(context.base, parsed.pathname)
      : context.location.pathname;

  return url.format({
    pathname,
    query,
    hash: props.hash
  });
}

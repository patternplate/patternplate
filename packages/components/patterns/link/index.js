const url = require("url");
const queryString = require("querystring");
const React = require("react");
const PropTypes = require("prop-types");

class Link extends React.Component {
  constructor(...args) {
    super(...args);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();

    if (typeof this.props.onClick === "function") {
      this.props.onClick(e);
    } else if (this.context.push) {
      this.context.push(this.href);
    }
  }

  get href() {
    const { context, props } = this;

    if (props.external || !context.location) {
      return props.href;
    }

    const parsed = props.href ? url.parse(props.href) : { query: "" };
    parsed.query = queryString.parse(parsed.query);
    const query = Object.assign(
      {},
      context.location.query,
      parsed.query,
      props.query || context.location.query
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

  render() {
    const { props } = this;

    return (
      <a
        target={props.external ? "_blank" : null}
        rel={props.external ? "noopener noreferrer" : null}
        className={props.className}
        href={this.href}
        onClick={this.handleClick}
        onMouseOver={props.onHover}
        title={props.title}
        data-id={props["data-id"]}
      >
        {props.children}
      </a>
    );
  }
}

module.exports = Link;

Link.contextTypes = {
  push: PropTypes.func,
  base: PropTypes.string,
  location: PropTypes.shape({
    query: PropTypes.any,
    href: PropTypes.string
  })
};

Link.defaultProps = {
  external: false,
  onHover: () => {}
};

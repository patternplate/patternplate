const React = require("react");
const inject = require("../injection").inject;

class Link extends React.Component {
  constructor(...args) {
    super(...args);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (typeof this.props.onClick === "function") {
      this.props.onClick(e);
    }
  }

  render() {
    const { props } = this;
    return (
      <a
        target={props.external ? "_blank" : null}
        rel={props.external ? "noopener noreferrer" : null}
        className={props.className}
        href={props.href}
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

module.exports = inject(Link);
module.exports.RawLink = Link;

Link.defaultProps = {
  external: false,
  onHover: () => {}
};

const React = require('react');

class Link extends React.Component {
  constructor(...args) {
    super(...args);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(e, this.props.href);
  }

  render() {
    const {props} = this;
    return (
  <a
    target={props.external ? '_blank' : null}
    rel={props.external ? 'noopener noreferrer' : null}
    className={props.className}
    href={props.href}
    onClick={this.handleClick}
    onMouseOver={props.onHover}
    title={props.title}
    data-id={props['data-id']}
  >
    {props.children}
  </a>
    );
  }
}

module.exports = Link;

Link.defaultProps = {
  external: false,
  onClick: () => {},
  onHover: () => {}
};

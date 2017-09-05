const React = require('react');
const styled = require('styled-components').default;
const fonts = require('../fonts');

const FONTS = fonts();

class Link extends React.Component {
  constructor(...args) {
    super(...args);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(e);
  }

  render() {
    const {props} = this;
    return (
      <StyledAnchor
        target={props.external ? '_blank' : null}
        rel={props.external ? 'noopener noreferrer' : null}
        className={props.className}
        href={props.href}
        onClick={this.handleClick}
        title={props.title}
        data-id={props['data-id']}
           >
        {props.children}
      </StyledAnchor>
    );
  }
}

module.exports = Link;

Link.defaultProps = {
  external: false,
  onClick: () => {}
};

const StyledAnchor = styled.a`
  font-family: ${FONTS.default};
`;

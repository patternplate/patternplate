const React = require('react');
const styled = require('styled-components').default;
const tag = require('tag-hoc').default;

import Icon from '../icon';
import Link from '../link';

const buttonTypes = [
  'button',
  'submit',
  'link'
];

function Button(props) {
  const OuterElement = props.type === 'link'
    ? tag(['external', 'type'])(Link)
    : tag(['external'])('button');

  return (
    <OuterElement
      className={props.className}
      title={props.title}
      onClick={props.onClick}
      external={props.external}
      href={props.href}
      type={props.type}
    >
      {props.children &&
        <span>{props.children}</span>
      }
      {
        props.symbol &&
          <StyledIcon
            symbol={props.symbol}
          />
      }
    </OuterElement>
  );
}

Button.defaultProps = {
  type: 'button'
};

function OuterElement(props) {
  if (props.type === 'link') {
    return <Link/>;
  }

}

const StyledButton = styled(Button)`
  appearance: none;
  display: inline-flex;
  height: 40px;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: none;
  outline: 0;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  font: inherit;
  box-sizing: border-box;
  vertical-align: top;
  ${props => !props.frameless && `
    padding: 4px;
    border: 1px solid currentColor;
  `}
  ${props => props.transparent && `
    background: transparent;
  `}
`;

const StyledIcon = styled(Icon)`
  &:not(:first-child) {
    margin-left: 5px;
  }
`;

module.exports = StyledButton;

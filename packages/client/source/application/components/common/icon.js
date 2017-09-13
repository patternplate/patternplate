import React from 'react';
import {styled} from '@patternplate/components';

const SIZES = {
  s: 15,
  m: 30,
  l: 50
};

export default Icon;

function Icon(props) {
  return (
    <StyledIcon className={props.className} size={props.size}>
      <use xlinkHref={`#${props.symbol || 'placeholder'}`} />
    </StyledIcon>
  );
}

Icon.defaultProps = {
  size: 'm',
  symbol: 'placeholder'
};

const StyledIcon = styled.svg`
  display: flex;
  width: ${props => SIZES[props.size]}px;
  height: ${props => SIZES[props.size]}px;
  justify-content: center;
  align-items: center;
`;

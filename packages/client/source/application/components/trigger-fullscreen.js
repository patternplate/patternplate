import React from 'react';
import {styled, Icon} from '@patternplate/components';

import Link from './common/link';

export default Fullscreen;

function Fullscreen(props) {
  return (
    <StyledLink
      external
      title={`Open pattern demo for "${props.id}" in a new tab`}
      href={props.href}
      >
      <StyledIcon symbol="fullscreen"/>
      Open pattern demo for "${props.id}" in a new tab
    </StyledLink>
  );
}

const StyledIcon = styled(Icon)`
  fill: ${props => props.theme.background};
`;

const StyledLink = styled(Link)`
  font-size: 0;
  line-height: 0;
`;

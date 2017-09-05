import React from 'react';
import {styled} from '@patternplate/components';
import Link from './link';

export default ToggleButton;

function ToggleButton(props) {
  const title = props.title || `${props.shortcut.description(props)} ${props.shortcut.toString()}`;

  if (props.active === false) {
    return (
      <StandIn className={props.className} title={title}>
        {props.children}
      </StandIn>
    );
  }

  return (
    <Link
      className={props.className}
      title={title}
      query={{ [props.shortcut.key]: !props.enabled }}
    >
      {props.children}
    </Link>
  );
}

const StandIn = styled.div`
	font-size: 0;
	line-height: 0;
`;

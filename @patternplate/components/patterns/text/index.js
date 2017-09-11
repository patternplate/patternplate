import React from 'react';
import styled from 'styled-components';
import tag from 'tag-hoc';

import fonts from '../fonts';

const FONTS = fonts();

export default Text;

function Text(props) {
  return (
    <StyledText
      is={props.is}
      className={props.className}
    >
      {props.children}
    </StyledText>
  );
}

const StyledText = styled('div')`
  font-family: ${FONTS.default};
`;

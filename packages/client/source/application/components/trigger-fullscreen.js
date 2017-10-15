import React from "react";
import { styled, Link, Icon } from "@patternplate/components";

export default Fullscreen;

function Fullscreen(props) {
  return (
    <StyledLink
      external
      title={`Open pattern demo for "${props.id}" in a new tab`}
      href={props.href}
    >
      <StyledIcon symbol="fullscreen" />
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

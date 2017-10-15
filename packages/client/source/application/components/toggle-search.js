import React from "react";
import { styled, Link, Icon } from "@patternplate/components";

export default SearchButton;

function SearchButton(props) {
  return (
    <StyledLink
      title={`Enable search ${props.shortcut.toString()}`}
      query={{ "search-enabled": !props.enabled }}
    >
      <StyledIcon base={props.base} symbol="search" />
      Search
    </StyledLink>
  );
}

const StyledIcon = styled(Icon)`
  fill: ${props => props.theme.color};
`;

const StyledLink = styled(Link)`
  font-size: 0;
`;

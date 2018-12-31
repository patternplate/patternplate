import * as React from "react";
import styled from "styled-components";
import { Link } from "@patternplate/component-link";
import { Icon } from "@patternplate/component-icon";

export interface SearchCloseProps {
  clears: boolean;
  shortcut: {
    toString(): string;
  }
}

const StyledClose = styled(Link)`
  font-size: 0;
  line-height: 0;
`;

const StyledCloseIcon = styled(Icon)`
  fill: ${props => props.theme.colors.color};
`;

export const SearchClose: React.SFC<SearchCloseProps> = function SearchClose(props) {
  const verb = props.clears ? `Clear` : "Close";
  const query = props.clears ? { search: null } : { "search-enabled": null };
  const symbol = "close";
  return (
    <StyledClose
      query={query}
      title={`${verb} search ${props.shortcut.toString()}`}
    >
      <StyledCloseIcon size="m" symbol={symbol} />
      {verb}
    </StyledClose>
  );
}

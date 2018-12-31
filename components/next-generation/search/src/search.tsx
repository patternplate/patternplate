import * as React from "react";
import * as Styles from "./search.styles";
import * as Slots from "./search-slots";
import { SearchResultList } from "./search-result-list";
import { SearchFieldBox } from "./search-field-box";

const NOOP = function NOOP() {};

export interface SearchProps {
  enabled?: boolean;
  inline?: boolean;
  onFocus?: React.EventHandler<React.SyntheticEvent<unknown>>;
  onSubmit?: React.FormEventHandler<HTMLElement>;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

export const Search: React.SFC<SearchProps> = function Search(props) {
  const searchResultList = Slots.withSlot(props.children, { slot: Slots.SearchResultListSlot });
  const searchPreviewChildren = Slots.withSlot(props.children, { slot: Slots.SearchResultPreviewSlot });
  const searchField = Slots.withSlot(props.children, { slot: Slots.SearchFieldSlot });
  const searchLegend = Slots.withSlot(props.children, { slot: Slots.SearchLegendSlot });
  const passThrough = Slots.withSlot(props.children, { slot: Slots.SearchPassThroughSlot });

  return (
    <Styles.StyledFormBox
      enabled={props.enabled}
      inline={props.inline}
      onClick={props.inline && !props.enabled ? props.onFocus : NOOP}
    >
      <Styles.StyledForm onSubmit={props.onSubmit} method="GET">
        <SearchFieldBox onClick={props.inline ? props.onClick : NOOP}>
          {searchField}
          {passThrough}
          <input type="submit" style={{ display: 'none' }} />
        </SearchFieldBox>
        {searchLegend}
        <Styles.StyledResults>
          {searchResultList}
          {searchPreviewChildren}
        </Styles.StyledResults>
      </Styles.StyledForm>
    </Styles.StyledFormBox>
  );
}


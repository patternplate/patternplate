import * as React from 'react';
import * as Styles from './search.styles';

export const SearchFieldSlot: React.SFC = function SearchFieldSlot(props) {
  return <>{props.children}</>;
};

export const SearchLegendSlot: React.SFC = function SearchFieldSlot(props) {
  return <>{props.children}</>;
};

export const SearchPassThroughSlot: React.SFC = function PassThroughSlot(props) {
  return <>{props.children}</>;
};

export const SearchResultListSlot: React.SFC = function SearchResultListSlot(props) {
  return <>{props.children}</>;
};

export const SearchResultPreviewSlot: React.SFC = function SearchResultPreviewSlot(props) {
  return <>{props.children}</>;
};

type SearchSlot =
  | typeof SearchResultListSlot
  | typeof SearchResultPreviewSlot
  | typeof SearchFieldSlot
  | typeof SearchLegendSlot
  | typeof SearchPassThroughSlot;

export function withSlot(children: React.ReactNode, { slot }: { slot: SearchSlot }): React.ReactElement<unknown>[] {
  return React.Children.toArray(children)
    .filter((child): child is React.ReactElement<unknown> => typeof child === 'object' && typeof child.type !== 'undefined')
    .filter(child => child.type === slot);
}

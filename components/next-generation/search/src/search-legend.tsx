import * as React from "react";
import * as Styles from "./search-legend.styles";

export interface SearchLegendItem {
  key: string;
  type: 'field';
  value: string;
  description: string;
}

export interface SearchLegendProps {
  className?: string;
  name: string;
  items: SearchLegendItem[];
}

export const SearchLegend: React.SFC<SearchLegendProps> = function SearchLegend(props) {
  return (
    <Styles.StyledSearchLegend className={props.className}>
      {props.name && <Styles.StyledLegendName>{props.name}</Styles.StyledLegendName>}
      <Styles.StyledSearchLegendBox>
        {props.items.map(field => {
          return (
            <Styles.StyledField key={field.key}>
              <Styles.StyledFieldLink title={field.description} query={{ search: field.value }}>
                {field.key}
              </Styles.StyledFieldLink>
            </Styles.StyledField>
          );
        })}
      </Styles.StyledSearchLegendBox>
    </Styles.StyledSearchLegend>
  );
}

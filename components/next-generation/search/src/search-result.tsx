import * as React from "react";
import * as Styles from "./search-result.styles";
import { Text } from "@patternplate/component-text";

export interface SearchResultProps {
  id: string;
  index?: number;
  name: string;
  href?: string;
  active?: boolean;
  onScrollRequest?({ target: HTMLElement }): void;
}

export class SearchResult extends React.Component<SearchResultProps> {
  private ref: HTMLElement | null = null;

  private saveRef = (ref: HTMLElement | null) => {
    this.ref = ref;
  }

  componentWillUpdate(next) {
    if (next.active && this.ref) {
      this.props.onScrollRequest({ target: this.ref });
    }
  }

  render() {
    const props = this.props;

    return (
      <Styles.StyledResult
        ref={this.saveRef}
        title={`Navigation to pattern ${props.name}`}
        data-id={props.id}
      >
        <Styles.StyledResultLink
          active={props.active}
          href={props.href}
          query={{ "search-enabled": false }}
        >
          <Styles.StyledResultLinkText active={props.active}>
            {props.name}
          </Styles.StyledResultLinkText>
        </Styles.StyledResultLink>
        <Styles.StyledPreviewLink
          active={props.active}
          query={{ "search-preview": props.index }}
        >
          <Text>
            Preview
          </Text>
        </Styles.StyledPreviewLink>
      </Styles.StyledResult>
    );
  }
}

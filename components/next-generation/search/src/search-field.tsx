import * as React from "react";
import * as Styles from "./search-field.styles";

export interface SearchFieldProps {
  autoFocus?: boolean;
  suggestion?: string;
  name?: string;
  title?: string;
  mark?: string;
  placeholder?: string;
  value?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: React.FormEventHandler<HTMLInputElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
}

export class SearchField extends React.Component<SearchFieldProps> {
  private ref: HTMLElement | null = null;

  private saveRef = (ref: HTMLElement | null) => {
    this.ref = ref;
  }

  public componentDidMount(): void {
    if (this.props.autoFocus && this.ref) {
      const length = this.props.value.length;

      if (this.ref.tagName === 'INPUT') {
        const ref = this.ref as HTMLInputElement;
        ref.focus();
        ref.setSelectionRange(length, length);
      }
    }
  }

  render() {
    const { props } = this;
    return (
      <Styles.StyledSearchField>
        <Styles.StyledIcon symbol="search" />
        <Styles.StyledInputContainer>
          <Styles.StyledInputSuggestion value={props.suggestion || ""} />
          <Styles.StyledInput
            autoComplete="off"
            autoFocus={props.autoFocus}
            name={props.name}
            onBlur={props.onBlur}
            onChange={props.onChange}
            onFocus={props.onFocus}
            onKeyDown={props.onKeyDown}
            placeholder={props.placeholder}
            title={props.title}
            type="text"
            value={props.value}
            data-search={props.mark}
            ref={this.saveRef}
          />
        </Styles.StyledInputContainer>
        {props.children}
      </Styles.StyledSearchField>
    );
  }
}

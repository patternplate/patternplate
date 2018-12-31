import React from "react";
import { debounce } from "lodash";
import * as Components from "@patternplate/components";

export default class SearchFieldContainer extends React.Component {
  static defaultProps = {
    blur: () => {},
    onChange: () => {},
    onFocus: () => {},
    onUp: () => {},
    onDown: () => {},
    onBlur: () => {},
    onStop: () => {},
    value: ""
  }

  constructor(...args) {
    super(...args);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.timer = null;
    this.onStop = debounce(this.props.onStop, 1000);
  }

  handleChange(e) {
    e.persist();
    this.props.onChange(e);
    this.onStop(e);
  }

  handleKeyDown(e) {
    const { target } = e;
    const hasValue = target.value.length > 0;
    const atEnd = hasValue && target.selectionStart === target.value.length;

    if (e.which === 32 && e.altKey && e.ctrlKey) {
      e.preventDefault();
      this.props.onClose();
    }
    if (e.which !== 27) {
      e.stopPropagation();
    }
    if (e.which === 27 && hasValue) {
      e.preventDefault();
      this.props.onClear();
    }
    if (e.which === 38) {
      this.props.onUp(e);
    }
    if (e.which === 39 && atEnd && this.props.suggestion) {
      e.preventDefault();
      this.props.onComplete(this.props.suggestion);
    }
    if (e.which === 40 && atEnd) {
      e.preventDefault();
      this.props.onDown(e);
    }
  }

  render() {
    const props = this.props;

    return (
      <Components.Search.SearchField
        autoFocus={props.autoFocus}
        name={props.name}
        onBlur={props.onBlur}
        onChange={this.handleChange}
        onFocus={props.onFocus}
        onKeyDown={this.handleKeyDown}
        placeholder={props.placeholder}
        suggestion={props.suggestion}
        title={props.title}
        value={props.value}
        data-search={props.mark}
      >
        {props.children}
      </Components.Search.SearchField>
    );
  }
}


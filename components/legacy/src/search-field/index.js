const React = require("react");
const styled = require("styled-components").default;
const Icon = require("@patternplate/component-icon").Icon;

const StyledSearchField = styled.label`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px 15px;
`;

const StyledIcon = styled(Icon)`
  flex-grow: 0;
  flex-shrink: 0;
  fill: ${props => props.theme.colors.color};
`;

const StyledInput = styled.input`
  position: relative;
  z-index: 2;
  width: 100%;
  border: 0;
  border-radius: 0;
  background: transparent;
  font-size: 16px;
  color: ${props => props.theme.colors.color};
  padding: 0;
  appearance: none;
  border-radius: 0;
  border: none;
  :focus {
    outline: none;
  }
`;

const StyledInputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-grow: 1;
  flex-shrink: 0;
  margin-left: 10px;
`;

const StyledInputSuggestion = styled(p => <StyledInput {...p} readOnly />)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  opacity: 0.3;
`;

class SearchField extends React.Component {
  constructor() {
    super();
    this.saveRef = this.saveRef.bind(this);
  }

  saveRef(ref) {
    this.ref = ref;
  }

  componentDidMount() {
    if (this.props.autoFocus && this.ref) {
      const length = this.props.value.length;
      this.ref.focus();
      this.ref.setSelectionRange(length, length);
    }
  }

  render() {
    const { props } = this;
    return (
      <StyledSearchField>
        <StyledIcon symbol="search" />
        <StyledInputContainer>
          <StyledInputSuggestion value={props.suggestion || ""} />
          <StyledInput
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
        </StyledInputContainer>
        {props.children}
      </StyledSearchField>
    );
  }
}

module.exports = SearchField;

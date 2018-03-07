const color = require("color");
const React = require("react");
const CopyToClipboard = require("react-clipboard.js").default;
const Component = require("react").Component;
const styled = require("styled-components").default;
const css = require("styled-components").css;
const { entries, omit, pick } = require("lodash");
const getThemes = require(".");

class ThemesDemo extends Component {
  constructor() {
    super();

    this.state = {
      colorFormat: "hex"
    };

    this.themes = getThemes();
    this.handleChange = e => {
      this.setState({ colorFormat: e.target.value });
    };
  }

  render() {
    return (
      <StyledDemo>
        <StyledSection>
          <label>
            <span>Color format: </span>
            <StyledSelect
              onChange={this.handleChange}
              defaultValue={this.state.colorFormat}
            >
              <option value="hex">HEX</option>
              <option value="rgb">RGB</option>
              <option value="hsl">HSL</option>
            </StyledSelect>
          </label>
        </StyledSection>

        <StyledSection>
          <Groups
            name="Color Groups"
            theme={this.themes.colorGroups}
            colorFormat={this.state.colorFormat}
          />
        </StyledSection>
        <StyledSection>
          <Theme
            name="Dark"
            theme={this.themes.dark}
            colorFormat={this.state.colorFormat}
          />
        </StyledSection>
        <StyledSection>
          <Theme
            name="Light"
            theme={this.themes.light}
            colorFormat={this.state.colorFormat}
          />
        </StyledSection>
      </StyledDemo>
    );
  }
}

module.exports = ThemesDemo;

const StyledDemo = styled.div`
  padding: 2em 1em 1em;
  font-family: sans-serif;
`;

const StyledSelect = styled.select`
  color: inherit;
`;

const StyledSection = styled.div`
  margin-bottom: 2em;
`;

const StyledName = styled.div`
  font-family: sans-serif;
  font-weight: bold;
  margin-bottom 10px;
`;

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

function Groups(props) {
  const groups = props.theme;

  let colorConverter;

  switch (props.colorFormat) {
    case "hsl":
      colorConverter = colorValue => colorValue.string(1);
      break;
    case "rgb":
      colorConverter = colorValue => colorValue.rgb().string(1);
      break;
    case "hex":
    default:
      colorConverter = colorValue => colorValue.hex();
      break;
  }

  return (
    <div>
      <StyledName>{props.name}</StyledName>
      <StyledGrid>
        {entries(groups).map(group => (
          <StyledTyleGroup key={group[0]}>
            {entries(group[1]).map(value => (
              <Tile
                key={value.join("-")}
                color={colorConverter(value[1])}
                name={`${group[0]} ${value[0]}`}
                grouped
              />
            ))}
          </StyledTyleGroup>
        ))}
      </StyledGrid>
    </div>
  );
}

function Theme(props) {
  const labelColors = pick(props.theme, [
    "error",
    "warning",
    "success",
    "info"
  ]);
  const themeColors = omit(
    props.theme,
    ["name", "fontWeight", "fontSize"].concat(Object.keys(labelColors))
  );

  let colorConverter;

  switch (props.colorFormat) {
    case "hsl":
      colorConverter = colorString =>
        color(colorString)
          .hsl()
          .string();
      break;
    case "rgb":
      colorConverter = colorString =>
        color(colorString)
          .rgb()
          .string();
      break;
    case "hex":
    default:
      colorConverter = colorString => color(colorString).hex();
      break;
  }

  return (
    <div>
      <StyledName>{props.name}</StyledName>
      <StyledGrid>
        {entries(labelColors).map(entry => (
          <Tile
            key={entry.join("-")}
            color={colorConverter(entry[1])}
            name={entry[0]}
          />
        ))}
      </StyledGrid>
      <StyledGrid>
        {entries(themeColors).map(entry => (
          <Tile
            key={entry.join("-")}
            color={colorConverter(entry[1])}
            name={entry[0]}
          />
        ))}
      </StyledGrid>
    </div>
  );
}

const BACKGROUND = props => props.color;
const COLOR = props =>
  color(props.color).luminosity() < 0.65
    ? "rgb(250, 250, 250)"
    : "rgb(10, 10, 10)";

const StyledTile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 200px;
  min-height: 200px;
  font-family: sans-serif;
  ${props =>
    !props.grouped &&
    css`
      box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
      margin-right: 1em;
      margin-bottom: 1em;
    `};
`;

const StyledTyleGroup = styled.div`
  display: flex;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 1em;
`;

function Tile(props) {
  return (
    <StyledTile color={props.color} grouped={props.grouped}>
      <ColorDot color={props.color} width={"100%"} height={"100%"} showValue />
      <StyledColorName>{props.name}</StyledColorName>
    </StyledTile>
  );
}

class ColorDot extends Component {
  constructor() {
    super();

    this.state = {
      copySucceeded: false
    };

    this.resetCopyState = () => {
      this.setState({ copySucceeded: false });
    };

    this.handleSuccess = e => {
      this.setState({ copySucceeded: true });

      setTimeout(this.resetCopyState, 1000);
    };
  }

  render() {
    const color = this.props.color;

    return (
      <StyledColorDot
        data-clipboard-text={color}
        data-copy-succeeded-message="Copied!"
        onSuccess={this.handleSuccess}
        copySucceeded={this.state.copySucceeded}
        color={color}
        width={this.props.width}
        height={this.props.width}
      >
        {this.props.showValue && <StyledColorValue>{color}</StyledColorValue>}
      </StyledColorDot>
    );
  }
}

const StyledColorName = styled.div`
  font-family: sans-serif;
  padding: 1em;
  background-color: #fff;
`;

const StyledColorDot = styled(CopyToClipboard).attrs({ component: "div" })`
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: flex-end;
  box-sizing: border-box;
  width: ${props => (props.width ? props.width : "40px")};
  height: ${props => (props.height ? props.height : "40px")};
  background-color: ${BACKGROUND};
  color: ${COLOR};
  padding: 1em;

  cursor: pointer;
  ${props =>
    props.rounded &&
    css`
      border-top-left-radius: inherit;
      border-bottom-left-radius: inherit;
    `}
  &::after {
    content: attr(data-copy-succeeded-message);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    color: white;
    transform-origin: 50%;
    transform: scale(0);
    border-radius: 100%;
    visibility: hidden;
    opacity: 0;
    transition: .3s cubic-bezier(0.42, 0, 0.48, 2);
    transition-property: opacity, transform, border-radius;
  }
  ${props =>
    props.copySucceeded &&
    css`
      &::after {
        border-radius: 0;
        transform: scale(1);
        opacity: 1;
        visibility: visible;
      }
    `}
`;

const StyledColorValue = styled.div`
  font-size: 1.1em;
  font-family: monospace;
`;

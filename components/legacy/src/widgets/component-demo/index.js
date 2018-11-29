const querystring = require("querystring");
const React = require("react");
const styled = require("styled-components").default;
const resizer = require("iframe-resizer");

module.exports = class PatternDemo extends React.Component {
  render() {
    const {props} = this;
    const pattern = props.get(props.id);
    const src = props.src(props.id);

    if (!src) {
      return <PatternDemoError message={`Could not find ${props.id}`}/>
    }

    const q = querystring.stringify({ resize: true, reload: props.reload });
    return <PatternFrame src={`${src}?${q}`}/>;
  }
}

function PatternDemoError(props) {
  return (
    <StyledPatternDemoError>
      <div>{props.message}</div>
      {props.snippet &&
        <pre>
          {props.snippet}
        </pre>
      }
    </StyledPatternDemoError>
  );
}

class PatternFrame extends React.Component {
  componentDidMount() {
    if (this.ref && !this.resizer) {
      resizer.iframeResizer({
        warningTimeout: 0,
        log: false
      }, this.ref);
    }
  }

  render() {
    const {props} = this;
    return <StyledPatternFrame
      ref={ref => this.ref = ref}
      {...props}
      />;
  }
}

const StyledPatternFrame = styled.iframe`
  width: 100%;
  min-width: 100%;
  border: 0;
`;

const StyledPatternDemoError = styled.div`
  background: ${props => props.theme.colors.error};
  color: #fff;
  padding: 10px 15px;
  font-family: monospace;
`;

const StyledFrame = styled.iframe`
  border: none;
  width: 100%;
`;

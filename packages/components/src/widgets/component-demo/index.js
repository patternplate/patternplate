const querystring = require("querystring");
const React = require("react");
const ResizingIframe = require("react-iframe-resizer-super").default;
const styled = require("styled-components").default;

module.exports = class PatternDemo extends React.Component {
  render() {
    const {props} = this;
    const pattern = props.get(props.id);
    const src = props.src(props.id);

    if (!src) {
      return <PatternDemoError message={`Could not find ${props.id}`}/>
    }

    const q = querystring.stringify({ resize: true, reload: props.reload });
    return <ResizingIframe iframeResizerOptions={{log: false}} src={`${src}?${q}`}/>;
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

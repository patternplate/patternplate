const React = require("react");
const styled = require("styled-components").default;

module.exports = class PatternDemo extends React.Component {
  constructor() {
    super();
    this.state = {
      height: 0
    };
  }

  componentDidMount() {
    if (!this.ref) {
      return;
    }
    const {contentDocument: document} = this.ref;
    this.resizeObserver = new ResizeObserver(entries => {
      const [{contentRect: {height}}] = entries;
      this.setState({height});
    });

    const ready = document.readyState === 'complete'
      ? fn => fn()
      : fn => document.addEventListener('DOMContentLoaded', fn);

    ready(() => this.resizeObserver.observe(document.body));
  }

  componentWillUnMount() {
    if (this.resizeObserver) {
      this.resizeObserver.close();
    }
  }

  render() {
    const {props} = this;
    const pattern = props.get(props.id);
    const src = props.src(props.id);

    if (!src) {
      return <PatternDemoError message={`Could not find ${props.id}`}/>
    }

    return (
      <StyledFrameContainer frameHeight={this.state.height}>
        <StyledFrame src={src} innerRef={ref => this.ref = ref}/>
      </StyledFrameContainer>
    );
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
  background: ${props => props.theme.error};
  color: #fff;
  padding: 10px 15px;
  font-family: monospace;
`;

const StyledFrame = styled.iframe`
  border: none;
  width: 100%;
`;

const StyledFrameContainer = styled.div`
  height: ${props => props.height}px;
`;

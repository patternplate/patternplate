const entries = require("lodash").entries;
const camelCase = require("lodash").camelCase;
const InfoPane = require(".");
const React = require("react");
const styled = require("styled-components").default;
const Themer = require("../demo-themer");

module.exports.default = () => (
  <Themer spacing>
    <InfoPaneDemo />
  </Themer>
);

const MANIFEST = `{
  "name": "info-pane",
  "displayName": "Info pane"
}`;

class InfoPaneDemo extends React.Component {
  constructor() {
    super();
    this.handleMountChange = this.handleMountChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);

    this.state = {
      mount: false,
      manifestEnabled: false
    };
  }

  handleMountChange() {
    this.setState(
      Object.assign(this.state, {
        mount: !this.state.mount
      })
    );
  }

  handleToggle(e) {
    const changes = entries(e).reduce((results, entry) => {
      results[camelCase(entry[0])] = Boolean(entry[1]);
      return results;
    }, {});

    this.setState(Object.assign(this.state, changes));
  }

  render() {
    return (
      <StyledDemoBox>
        <InfoPane
          flag="beta"
          hermit
          icon="patternplate"
          id="testpane"
          manifestEnabled={this.state.manifestEnabled}
          manifest={MANIFEST}
          mount={this.state.mount}
          name="Test pane"
          onMountChange={this.handleMountChange}
          standalone
          version="1.0.0"
        />
      </StyledDemoBox>
    );
  }
}

const StyledDemoBox = styled.div`
  margin: 10px 0 0 10px;
`;

const React = require("react");
const InfoPane = require("Pattern");
const styled = require("styled-components").default;
const Themer = require("../demo-themer");

module.exports = function InfoPaneDemo() {
  return (
    <Themer>
      <StyledDemoBox>
        <InfoPane
          standalone
          hermit
          icon="patternplate"
          name="Test pane"
          id="testpane"
          version="1.0.0"
          flag="beta"
        />
      </StyledDemoBox>
    </Themer>
  );
};

const StyledDemoBox = styled.div`
  margin: 10px 0 0 10px;
`;

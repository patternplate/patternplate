const React = require("react");
const styled = require("styled-components").default;
const DemoThemer = require("../demo-themer");
const Flag = require(".");

module.exports.default = FlagDemo;

function FlagDemo() {
  return (
    <DemoThemer>
      <FlagDemoContainer>
        <Flag>alpha</Flag>
        <Flag>beta</Flag>
        <Flag>rc</Flag>
        <Flag>stable</Flag>
        <Flag>deprecated</Flag>
      </FlagDemoContainer>
    </DemoThemer>
  );
}

const FlagDemoContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: ${props => props.theme.background};
  padding: 30px;
  > * {
    margin-left: 10px;
  }
`;

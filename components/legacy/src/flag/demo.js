const React = require("react");
const styled = require("styled-components").default;
const DemoThemer = require("../demo-themer");
const Flag = require(".");

module.exports.default = FlagDemo;
module.exports.FlagDemo = WrappedFlagDemo;

function FlagDemo() {
  return (
    <DemoThemer spacing={true}>
      <WrappedFlagDemo/>
    </DemoThemer>
  );
}

function WrappedFlagDemo() {
  return (
    <FlagDemoContainer>
      <Flag>alpha</Flag>
      <Flag>beta</Flag>
      <Flag>rc</Flag>
      <Flag>stable</Flag>
      <Flag>deprecated</Flag>
    </FlagDemoContainer>
  );
}


const FlagDemoContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: ${props => props.theme.colors.background};
  > * {
    margin-right: 10px;
  }
`;

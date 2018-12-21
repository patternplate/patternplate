const React = require("react");
const styled = require("styled-components").default;
const { Themer } = require("@patternplate/component-utility");
const Flag = require(".");

module.exports.default = FlagDemo;

function FlagDemo() {
  return (
    <Themer>
      <FlagDemoContainer>
        <Flag>alpha</Flag>
        <Flag>beta</Flag>
        <Flag>rc</Flag>
        <Flag>stable</Flag>
        <Flag>deprecated</Flag>
      </FlagDemoContainer>
    </Themer>
  );
}

const FlagDemoContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: ${props => props.theme.colors.background};
  padding: 30px;
  > * {
    margin-left: 10px;
  }
`;

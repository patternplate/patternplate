const React = require("react");
const Button = require(".");
const styled = require("styled-components").default;
const Themer = require("../demo-themer");

module.exports.default = function ButtonDemo() {
  return (
    <Themer spacing={true}>
      <StyledDemoBox>
        <Button
          symbol="reload"
          title="Reload"
          type="link"
          href="/"
          external
          layout="no-border"
        >
          Link Button!
        </Button>
        <Button symbol="reload" title="Reload">
          Button!
        </Button>
        <Button title="Reload" layout="no-border">
          Button without icon
        </Button>
        <Button symbol="patternplate" title="Patternplate" />
      </StyledDemoBox>
    </Themer>
  );
};

const StyledDemoBox = styled.div`
  ${Button} {
    margin-right: 10px;
  }
`;

const React = require("react");
const styled = require("styled-components").default;
const Icon = require(".");
const DemoThemer = require("../demo-themer");

module.exports.default = IconDemo;

function DemoIcon(props) {
  return (
    <StyledDemoIcon title={props.title}>
      <Icon symbol={props.symbol} />
    </StyledDemoIcon>
  );
}

function IconDemo() {
  return (
    <DemoThemer spacing={true}>
      <StyledIconDemo>
        {Icon.symbols.map(symbol => (
          <DemoIcon key={symbol} symbol={symbol} title={symbol} />
        ))}
      </StyledIconDemo>
    </DemoThemer>
  );
}

const TITLE = props => props.title;

const StyledDemoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: 10px;
  color: ${props => props.theme.colors.color};
  &::after {
    content: '${TITLE}';
    display: block;
    font-family: sans-serif;
    margin-left: 10px;
  }
`;

const StyledIconDemo = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${props => props.theme.colors.color};
`;

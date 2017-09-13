const React = require('react');
const CodePane = require('Pattern');
const styled = require('styled-components').default;
const Themer = require('../demo-themer');

module.exports = function CodeDemo() {
  return (
    <Themer>
      <StyledDemoBox>
        <CodePane source={`<div class="foo">Bar</div>`}/>
      </StyledDemoBox>
    </Themer>
  );
}

const StyledDemoBox = styled.div`{
    margin: 10px 0 0 10px;
  }
`

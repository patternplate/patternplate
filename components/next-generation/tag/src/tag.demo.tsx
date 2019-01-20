const React = require("react");
const styled = require("styled-components").default;
const { Themer } = require("@patternplate/component-utility");
import { Tag } from "./tag";

export default function TagDemo() {
  return (
    <Themer>
      <TagDemoContainer>
        <Tag>alpha</Tag>
        <Tag>beta</Tag>
        <Tag>rc</Tag>
        <Tag>stable</Tag>
        <Tag>deprecated</Tag>
      </TagDemoContainer>
    </Themer>
  );
}

const TagDemoContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  background: ${props => props.theme.colors.background};
  padding: 30px;
  > * {
    margin-left: 10px;
  }
`;

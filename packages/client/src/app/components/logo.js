import React from "react";
import { Link, styled, Icon } from "@patternplate/components";
import * as svg from "../utils/svg";

const StyledLink = styled(Link)`
  display: block;
  margin: 0 auto;
  &:link,
  &:visited {
    color: ${props => props.theme.active};
  }
`;

class Logo extends React.Component {
  render() {
    const { props } = this;

    const child = typeof props.source === "string"
      ? svg.render(svg.sanitize(svg.purge([svg.parse(props.source)]))[0])
      : <Icon symbol="patternplate" size="l"/>;

    return (
      <div className={props.className}>
        <StyledLink external href="/" query={null} target="_self">
          {child}
        </StyledLink>
      </div>
    );
  }
}

export default styled(Logo)`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 0;
  align-items: center;
  padding: 10px;
  background: ${props => props.theme.backgroundSecondary};
`;

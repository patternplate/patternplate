import * as React from "react";
import styled from "styled-components";
import { Link } from "@patternplate/component-link";
import { Icon } from "@patternplate/component-icon";

const StyledLink = styled(Link)`
  display: block;
  margin: 0 auto;
  &:link,
  &:visited {
    color: ${props => props.theme.colors.active};
  }
`;

interface InnerLogoProps {
  source?: string;
  className?: string;
}

const InnerLogo: React.SFC<InnerLogoProps> = props => {
  if (props.source) {
    return (
      <div className={props.className}>
        <StyledLink external="base" href="/" query={null} target="_self">
          <div dangerouslySetInnerHTML={{ __html: props.source }} />
        </StyledLink>
      </div>
    );
  }

  return (
    <div className={props.className}>
      <StyledLink external="base" href="/" query={null} target="_self">
        <Icon symbol="patternplate" size="l" />
      </StyledLink>
    </div>
  );
};

export interface LogoProps extends InnerLogoProps {}

const StyledLogo = styled(InnerLogo)<LogoProps>`
  box-sizing: border-box;
  display: flex;
  width: 100%;
  fill: currentColor;
  stroke: currentColor;
  stroke-width: 0;
  align-items: center;
  padding: 10px;
  background: ${props => props.theme.colors.backgroundSecondary};
`;

export const Logo = props => <StyledLogo {...props}/>;

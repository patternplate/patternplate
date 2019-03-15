import * as React from "react";
import styled from "styled-components";

export interface MainHeaderProps {
  className?: string;
  image?: React.ReactNode;
  title?: string;
}

export const MainHeader: React.SFC<MainHeaderProps> = function MainHeader(
  props
) {
  return (
    <StyledMainHeader className={props.className} title={props.title}>
      {props.image}
      {props.title && <StyledTitle>{props.title}</StyledTitle>}
    </StyledMainHeader>
  );
};

const StyledMainHeader = styled.div<{ image?: React.ReactNode }>`
  width: 100%;
  height: auto;
  color: ${props => props.theme.colors.color};
  ${props =>
    !props.image &&
    `
      display: flex;
      padding: 10px 15px;
      color: ${props.theme.active};
      align-items: center;
      justify-content: center;
    `};
`;

const StyledTitle = styled.span`
  font-family: ${props => props.theme.fonts.default};
`;

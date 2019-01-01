import * as React from "react";
import styled from "styled-components";
import * as Components from "@patternplate/components";

export const InlineLink = styled(Components.Link)`
  color: ${props => props.theme.colors.active};
  text-decoration: underline;
  text-decoration-style: dotted;
`;

export const Frame = styled.div<{ width?: string; }>`
  box-sizing: border-box;
  width: ${props => props.width || "100%"};
  min-width: 320px;
  max-width: 1440px;
  margin: 0 auto;
`;

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  z-index: 2;
  top: calc(100vh - 100px);
  background: ${props => props.theme.colors.background};
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
`;

export const ButtonRowContent = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
`;

export const ButtonRowRight = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-end;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 15px;
  @media screen and (min-width: 550px) {
    display: flex;
  }
`;

export const GithubButton = styled(Components.Link)`
  flex-shrink: 0;
  height: 40px;
  width: 40px;
  fill: color;
  color: #100133;
  svg {
    width: 100%;
    pointer-events: none;
  }
`;

export const GitterButton = styled(Components.Link)`
  flex-shrink: 0;
  height: 40px;
  width: 40px;
  fill: color;
  color: #100133;
  margin-left: 10px;
  svg {
    width: 100%;
    pointer-events: none;
  }
`;

import styled from "styled-components";
import * as Components from "@patternplate/components";

export const Connection = styled.div`
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
  padding: 20px 60px 120px 60px;
  background: ${props => props.theme.colors.background};
`;

export const Title = styled(Components.Headline)`
  font-size: 12vw;
  max-width: 60ch;
  @media screen and (min-width: 500px) {
    font-size: 60px;
  }
`;

export const Text = styled(Components.Text)`
  font-size: 6vw;
  text-align: left;
  max-width: 40ch;
  line-height: 1.5;
  @media screen and (min-width: 500px) {
    font-size: ${props => props.theme.fonts.fontSize * 2}px;
  }
`;

export const List = styled.ul`
  list-style: none;
  text-align: left;
  line-height: 2;
  font-weight: 100;
  white-space: nowrap;
  opacity: .75;
  margin-bottom: 1em;
  margin-left: -.75em;
  padding: 0;
  font-size: ${props => props.theme.fonts.fontSize * 2.5}px;

  @media screen and (min-width: 480px) {
    font-size: ${props => props.theme.fonts.fontSize * 3}px;
  }

  @media screen and (min-width: 1024px) {
    font-size: ${props => props.theme.fonts.fontSize * 4}px;
    margin-left: 50%;
  }
`;

export const Button = styled(Components.Link)`
  display: inline-block;
  color: ${props => props.theme.colors.background};
  background: ${props => props.theme.colors.color};
  padding: 15px 20px;
  border-radius: 2px;
  cursor: pointer;
`;

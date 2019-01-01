import styled from "styled-components";
import { Headline } from "@patternplate/component-headline";
import { Link } from "@patternplate/component-link";
import { Text } from "@patternplate/component-text";

export const Stage = styled.div`
  display: grid;
  grid-column-gap: 15px;
  position: relative;
  @media screen and (min-width: 720px) {
    grid-template-columns: 1.5fr 1fr;
    grid-column-gap: 5vw;
  }
  @media screen and (min-width: 840px) {
    grid-template-columns: 1.5fr 1.3fr;
  }
`;

export const StageSlot = styled.div`
  position: relative;
  padding: 20px 30px;

  @supports (padding: env(safe-area-inset-left)) {
    padding-left: calc(env(safe-area-inset-left) + 10px);
  }
`;

export const StageContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(-45deg, #4504da, #ff0353);
  min-height: calc(100vh + 100px);
  color: #ffffff;
  overflow: hidden;
`;

export const StageHeadline = styled(Headline)`
  font-size: 40px;
  margin: 0 0 1em 0;

  @media screen and (min-width: 480px) {
    font-size: 60px;
    max-width: 15ch;
  }

  @media screen and (min-width: 1240px) {
    font-size: 72px;
  }
`;

export const StageText = styled(Text)`
  max-width: 25ch;
  font-weight: 200;
  line-height: 1.3em;
  margin-bottom: 2em;
  font-size: 25px;
  @media screen and (min-width: 1240px) {
    font-size: 35px;
  }
`;

export const StageImage = styled.img`
  width: 150%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: -10px -10px 20px rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 720px) {
    bottom: -20px;
    top: 0;
    width: auto;
  }
`;

export const StageButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: ${props => (props.variant === "big" ? 34 : 24)}px;
  line-height: auto;
  padding: 0.6em;
  text-decoration: none;
  background: #100133;
  color: ${props => props.theme.colors.background};
  border-radius: 3px;
  margin-right: 20px;
  white-space: nowrap;
`;

export const StageButtonText = styled(Text)`
  color: ${props => props.theme.colors.background};
`;

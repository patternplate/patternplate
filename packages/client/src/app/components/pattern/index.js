import React from "react";
import Helmet from "react-helmet";
import { styled } from "@patternplate/components";
import tag from "tag-hoc";
import Transition from "react-transition-group/Transition";

import Markdown from "../common/markdown";
import PatternDemo from "./pattern-demo";

const VISIBILITY = props => (props.checkers ? "block" : "none");

const StyledPattern = styled(tag(["checkers"])("div"))`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  &::before {
    content: "";
    display: ${VISIBILITY};
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${props => checkers(props)};
    background-size: 16px 16px;
    background-position: 0 0, 8px 8px;
  }
`;

const StyledPatternFolder = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledPatternDoc = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;
`;

const StyledPatternDemo = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  height: 100%;
  max-width: 1240px;
  margin: 0 auto;
`;

const StyledPatternLoader = styled.div`
  position: absolute;
  z-index: 3;
  top: 0;
  right: 0;
  left: 0;
  height: 3px;
  &::after {
    position: absolute;
    top: 0;
    z-index: 2;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: ${props =>
      props.error ? props.theme.error : props.theme.active};
    opacity: 1;
    transition: ${props => (props.error ? "none" : "transform 1s ease-in-out")};
    ${props => {
      switch (props.status) {
        case "entering":
          return `
            transform: translateX(-100%);
          `;
        case "entered":
          return `${props =>
            props.error ? "" : "transform: translateX(-15%);"}`;
        case "exiting":
          return `
            transition: transform .3s ease-out;
            transform: translateX(0);
          `;
        case "exited":
          return `
            transform: translateX(-100%);
            transition: opacity .3s .25s ease-out;
          `;
      }
    }};
  }
`;

export default class Pattern extends React.Component {
  render() {
    const { props } = this;

    switch (props.type) {
      case "pattern":
        return (
          <StyledPattern checkers={props.opacity}>
            <Helmet
              title={[getPrefix(props), props.displayName]
                .filter(Boolean)
                .join(": ")}
            />
            <Transition
              in={props.loading || props.error}
              timeout={{ enter: 1000, exit: 850 }}
            >
              {status => (
                <StyledPatternLoader status={status} error={props.error} />
              )}
            </Transition>
            <StyledPatternDemo>
              <PatternDemo
                src={props.src}
                contents={props.contents}
                loading={props.loading}
              />
            </StyledPatternDemo>
          </StyledPattern>
        );
      case "not-found":
      default:
        return (
          <StyledPatternFolder>
            <StyledPatternDoc>
              <Markdown source={props.docs} />
            </StyledPatternDoc>
          </StyledPatternFolder>
        );
    }
  }
}

function grad(fill) {
  return `linear-gradient(45deg, ${fill} 25%, transparent 25%, transparent 75%, ${fill} 75%, ${fill})`;
}

function checkers(props) {
  const fill = props.theme.border;
  return `
    ${grad(fill)},
    ${grad(fill)};
  `;
}

function getPrefix(props) {
  if (props.loading) {
    return "Load";
  }
  if (props.error) {
    return "Error";
  }
  return "";
}

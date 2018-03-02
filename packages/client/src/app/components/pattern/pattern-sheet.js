import { connect } from "react-redux";
import React from "react";
import { Flag, Headline, Link, Markdown, styled, Tag, ThemeProvider, themes } from "@patternplate/components";

import * as item from "../../selectors/item";
import Fullscreen from "../../containers/trigger-fullscreen";
import ToggleOpacity from "../../containers/toggle-opacity";
import ConnectedPatternList from "../../containers/pattern-list-widget";
import ConnectedPatternDemo from "../../containers/pattern-demo-widget";

export default connect(mapProps)(PatternSheet);

function PatternSheet(props) {
  return (
    <StyledPatternSheet>
      <StyledPatternSheetContainer>
          <StyledControlsBox>
            <StyledName>
              {props.name}
              <StyledVersion>@{props.version}</StyledVersion>
            </StyledName>
            <ThemeProvider theme={themes().dark}>
              <StyledControlsArea orient="right">
                <StyledControlsItem>
                  <ToggleOpacity />
                </StyledControlsItem>
                <StyledControlsItem>
                  <Fullscreen />
                </StyledControlsItem>
              </StyledControlsArea>
            </ThemeProvider>
          </StyledControlsBox>
          <StyledBoxLine>
            <SearchTrigger field="flag" search={props.flag}>
              <Flag>{props.flag}</Flag>
            </SearchTrigger>
            <StyledTagList>
              {
                props.tags.map(tag => (
                  <SearchTrigger field="tags" search={tag}>
                    <Tag>{tag}</Tag>
                  </SearchTrigger>
                ))
              }
            </StyledTagList>
          </StyledBoxLine>
          {typeof props.doc === "string" &&
            <StyledMarkdownBox>
              <Markdown
                linkable={true}
                source={props.doc}
                widgets={{
                  PatternList: ConnectedPatternList,
                  PatternDemo: ConnectedPatternDemo
                }}
              />
            </StyledMarkdownBox>
          }
      </StyledPatternSheetContainer>
    </StyledPatternSheet>
  );
}

function SearchTrigger(props) {
  return (
    <Link
      className={props.className}
      query={{
        "search-enabled": true,
        search: `${props.field}=${props.search}`
      }}
      title={`Search other patterns with ${props.field} "${props.search}"`}
    >
      {props.children}
    </Link>
  );
}

function mapProps(state) {
  return {
    doc: item.selectContents(state),
    id: state.id,
    icon: item.selectIcon(state),
    type: item.selectType(state),
    name: item.selectName(state),
    flag: item.selectFlag(state),
    tags: item.selectTags(state),
    version: item.selectVersion(state)
  };
}

const TOOLBAR_HEIGHT = 60;

const StyledName = styled(props => <Headline {...props} is="h1" order={1}/>)`
  margin-top: 0;
`;

const StyledVersion = styled(props => <Headline {...props} is="small" order={3}/>)`
  display: inline-block;
  color: ${props => props.theme.dark};
  margin-top: 0;
`;

const StyledPatternSheet = styled.div`
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  min-height: 20vh;
  margin-top: -20vh;
  padding: 30px 60px;
  background: ${props => props.theme.background};
`;

const ORIENTATION = props => {
  const direction = props.orient === "right" ? "left" : "right";
  return `margin-${direction}: auto`;
};

const StyledPatternSheetContainer = styled.div`
  margin: 0 auto;
  max-width: 1240px;
`;

const StyledControlsArea = styled.div`
  display: flex;
  ${ORIENTATION};
`;

const StyledControlsBox = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 ${TOOLBAR_HEIGHT}px;
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  height: ${TOOLBAR_HEIGHT}px;
  background: white;
`;

const StyledControlsItem = styled.div`
  & + & {
    padding-left: 10px;
  }
`;

const StyledTagList = styled.div`
  display: inline-block;
  margin-left: 10px;
  padding: 2px 10px;
  border-left: 1px solid ${props => props.theme.border};
`;

const StyledBoxLine = styled.div`
  display: flex;
  align-items: center;
  min-height: 32px;
`;

const StyledMarkdownBox = styled.div`
  margin-top: 30px;
`;

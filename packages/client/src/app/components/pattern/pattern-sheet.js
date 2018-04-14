import { connect } from "react-redux";
import React from "react";
import remark from "remark";
import emoji from "remark-gemoji-to-emoji";

import { Flag, Headline, Link, Markdown, styled, Tag, Text, ThemeProvider, themes } from "@patternplate/components";

import * as item from "../../selectors/item";
import Fullscreen from "../../containers/trigger-fullscreen";
import ToggleOpacity from "../../containers/toggle-opacity";
import ConnectedComponentList from "../../containers/component-list-widget";
import ConnectedComponentDemo from "../../containers/component-demo-widget";

const processor = remark().use(emoji);

export default connect(mapProps)(PatternSheet);

function PatternSheet(props) {
  return (
    <StyledPatternSheet screenshot={props.screenshot}>
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
          {props.description &&
            <StyledDescription>
              {processor.processSync(props.description).contents}
            </StyledDescription>
          }
          <StyledBoxLine>
            <SearchTrigger field="flag" search={props.flag}>
              <Flag>{props.flag}</Flag>
            </SearchTrigger>
            <StyledTagList>
              {
                props.tags.map((tag, index) => (
                  <SearchTrigger key={`${tag}-${index}`} field="tags" search={tag}>
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
                  PatternList: ConnectedComponentList,
                  PatternDemo: ConnectedComponentDemo,
                  ComponentList: ConnectedComponentList,
                  ComponentDemo: ConnectedComponentDemo
                }}
              />
            </StyledMarkdownBox>
          }
      </StyledPatternSheetContainer>
    </StyledPatternSheet>
  );
}


const StyledSearchTrigger = styled.span`
  &:not(:first-child) {
    margin-left: 10px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function SearchTrigger(props) {
  return (
    <StyledSearchTrigger>
      <StyledLink
        className={props.className}
        query={{
          "search-enabled": true,
          search: `${props.field}=${props.search}`
        }}
        title={`Search other patterns with ${props.field} "${props.search}"`}
      >
        {props.children}
      </StyledLink>
    </StyledSearchTrigger>
  );
}

function mapProps(state) {
  return {
    doc: item.selectContents(state),
    description: item.selectDescription(state),
    id: state.id,
    icon: item.selectIcon(state),
    type: item.selectType(state),
    name: item.selectName(state),
    flag: item.selectFlag(state),
    tags: item.selectTags(state),
    version: item.selectVersion(state),
    screenshot: state.routing.locationBeforeTransitions.query.screenshot === "true"
  };
}

const TOOLBAR_HEIGHT = 60;

const StyledName = styled(props => <Headline {...props} is="h1" order={1}/>)`
  margin: 0 0 10px 0;
`;

const StyledVersion = styled(props => <Headline {...props} is="small" order={3}/>)`
  display: inline-block;
  color: ${props => props.theme.colors.color};
  margin: 0;
`;

const StyledDescription = styled(Text)`
  color: ${props => props.theme.colors.recess};
  margin-bottom: 20px;
`;

const StyledPatternSheet = styled.div`
  position: relative;
  z-index: 2;
  box-sizing: border-box;
  width: 100%;
  min-height: 30vh;
  margin-top: 70vh;
  padding: 30px 60px;
  border-top: 1px solid ${props => props.theme.colors.border};
  background: ${props => props.theme.colors.background};
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
  flex: 0 0 auto;
  position: relative;
  z-index: 2;
  box-sizing: border-box;
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
  border-left: 1px solid ${props => props.theme.colors.border};
`;

const StyledBoxLine = styled.div`
  display: flex;
  align-items: center;
  min-height: 32px;
`;

const StyledMarkdownBox = styled.div`
  margin-top: 30px;
`;

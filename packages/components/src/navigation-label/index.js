const React = require("react");
const styled = require("styled-components").default;
const fonts = require("../fonts");
const Icon = require("../icon");
const Link = require("../link");
const remark = require("remark");
const emoji = require("remark-gemoji-to-emoji");

const processor = remark().use(emoji);

const FONTS = fonts();

module.exports = NavigationLabel;

function NavigationLabel(props) {
  return (
    <StyledLabelContainer highlight={props.highlight}>
      <StyledLabel highlight={props.highlight} enabled={props.enabled}>
        <StyledLabelLink
          highlight={props.highlight}
          title={`${props.enabled ? 'Close' : 'Expand'} ${props.children} list`}
          query={{[`${props.name}-enabled`]: !props.enabled}}
          >
            <StyledLabelIcon enabled={props.enabled}>
              <Icon symbol="arrow-right" />
            </StyledLabelIcon>
            {processor.processSync(props.children).contents}
        </StyledLabelLink>
      </StyledLabel>
    </StyledLabelContainer>
  );
}

const StyledLabelContainer = styled.div`
  position: sticky;
  top: -1px;
  left: 0;
`;

const StyledLabelLink = styled(Link)`
  display: block;
  color: ${props => props.theme.color};
  cursor: pointer;
  text-decoration: none;
  width: 100%;
`;

const StyledLabel = styled.div`
  box-sizing: border-box;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  font-family: ${FONTS.default};
  font-size: .8em;
  color: ${props => props.theme.color};
  background-color: ${({enabled, theme}) => enabled ? theme.backgroundTertiary : theme.background};
  border-style: solid;
  border-top-color: ${({enabled, theme}) => enabled ? theme.backgroundSecondary : theme.border};
  border-bottom-color: ${props => props.enabled ? 'transparent' : props.theme.border};
  border-width: ${props => props.highlight ? 1 : 0}px 0;
  width: 100%;
`;

const StyledLabelIcon = styled.span`
  margin-right: 10px;
  transform-origin: center;
  transform: rotate(${props => props.enabled ? 90 : 0}deg);
`;

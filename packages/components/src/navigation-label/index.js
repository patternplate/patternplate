const React = require("react");
const styled = require("styled-components").default;
const fonts = require("../fonts");
const Icon = require("../icon");
const Link = require("../link");

const FONTS = fonts();

module.exports = NavigationLabel;

function NavigationLabel(props) {
  return (
    <StyledLabelContainer highlight={props.highlight}>
      <StyledLabelLink
        highlight={props.highlight}
        title={`${props.enabled ? 'Close' : 'Expand'} ${props.children} list`}
        query={{[`${props.name}-enabled`]: !props.enabled}}
        >
        <StyledLabel highlight={props.highlight} enabled={props.enabled}>
          <StyledLabelIcon enabled={props.enabled}>
            <Icon symbol="arrow-right" />
          </StyledLabelIcon>
          {props.children}
        </StyledLabel>
      </StyledLabelLink>
    </StyledLabelContainer>
  );
}

const StyledLabelContainer = styled.div`
  position: sticky;
  top: -1px;
  left: 0;
`;

const StyledLabelLink = styled(Link)`
  color: ${props => props.theme.color};
  cursor: pointer;
  text-decoration: none;
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
`;

const StyledLabelIcon = styled.span`
  margin-right: 10px;
  transform-origin: center;
  transform: rotate(${props => props.enabled ? 90 : 0}deg);
`;

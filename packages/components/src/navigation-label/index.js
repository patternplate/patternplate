const React = require("react");
const styled = require("styled-components").default;
const Icon = require("../icon");
const Link = require("../link");
const remark = require("remark");
const emoji = require("remark-gemoji-to-emoji");

const processor = remark().use(emoji);

module.exports = NavigationLabel;

function NavigationLabel(props) {
  return (
    <StyledLabelContainer highlight={props.highlight}>
      <StyledLabel
        highlight={props.highlight}
        enabled={props.enabled}
        size={props.size}
        >
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

const SIZES = {
  S: 0.9,
  M: 1
};

const StyledLabelContainer = styled.div`
  position: sticky;
  top: -1px;
  left: 0;
`;

const StyledLabelLink = styled(Link)`
  display: block;
  color: ${props => props.theme.colors.color};
  cursor: pointer;
  text-decoration: none;
  width: 100%;
`;

const StyledLabel = styled.div`
  box-sizing: border-box;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  font-family: ${props => props.theme.fonts.default};
  font-size: ${({size, theme}) => SIZES[size] * theme.fonts.fontSize}px;
  color: ${props => props.theme.colors.color};
  background-color: ${({enabled, theme}) => enabled ? theme.colors.backgroundTertiary : theme.colors.background};
  border-style: solid;
  border-top-color: ${({enabled, theme}) => enabled ? theme.colors.backgroundSecondary : theme.colors.border};
  border-bottom-color: ${props => props.enabled ? 'transparent' : props.theme.colors.border};
  border-width: ${props => props.highlight ? 1 : 0}px 0;
  width: 100%;
`;

const StyledLabelIcon = styled.span`
  margin-right: 10px;
  transform-origin: center;
  transform: rotate(${props => props.enabled ? 90 : 0}deg);
`;

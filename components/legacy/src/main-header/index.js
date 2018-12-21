const React = require("react");
const styled = require("styled-components").default;

module.exports = MainHeader;

function MainHeader(props) {
  return (
    <StyledMainHeader className={props.className} title={props.title}>
      {props.image}
      {props.title && <StyledTitle>{props.title}</StyledTitle>}
    </StyledMainHeader>
  );
}

const StyledMainHeader = styled.div`
  width: 100%;
  height: auto;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundSecondary};
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

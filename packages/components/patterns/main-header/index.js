const React = require('react');
const styled = require('styled-components').default;
const fonts = require('../fonts');
const Icon = require('../icon');

const FONTS = fonts();

module.exports = MainHeader;

function MainHeader(props) {
	const icon = props.image ?
		props.image :
		<StyledHeaderLogo symbol="patternplate" size="l"/>;

	return (
		<StyledMainHeader
			className={props.className}
			title={props.title}
		>
			{icon}
			{props.title &&
				<StyledTitle>
					{props.title}
				</StyledTitle>
			}
		</StyledMainHeader>
	);
}

const StyledMainHeader = styled.div`
	width: 100%;
	height: auto;
  color: ${props => props.theme.color};
  background-color: ${props => props.theme.backgroundSecondary};
	${props => !props.image && `
		display: flex;
		padding: 10px 15px;
		color: ${props.theme.active};
		align-items: center;
		justify-content: center;
	`}
`;

const StyledHeaderLogo = styled(Icon)`
	fill: currentColor;
	stroke: currentColor;
	stroke-width: 0;
	${props => props.title && `
		margin-right: 5px;
	`}
`;

const StyledTitle = styled.span`
  font-family: ${FONTS.default};
`;

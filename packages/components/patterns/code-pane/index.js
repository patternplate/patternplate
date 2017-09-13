const React = require('react');
const styled = require('styled-components').default;

const Code = require('../code');

module.exports = CodePane;

function CodePane(props) {
	return (
		<StyledCodePane className={props.className} hermit={props.hermit}>
			<StyledScrollbox>
				<Code block language="html">
					{props.source}
				</Code>
			</StyledScrollbox>
		</StyledCodePane>
	);
}

const BORDER_RADIUS = 10;

const StyledCodePane = styled.div`
	position: relative;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	&::before {
		content: '';
		position: absolute;
		z-index: 1;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		border-radius: ${props => props.hermit ? `${BORDER_RADIUS}px` : `0 ${BORDER_RADIUS}px ${BORDER_RADIUS}px 0`};
		background: ${props => props.theme.background};
	}
`;

const StyledScrollbox = styled.div`
	position: relative;
	z-index: 2;
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	overflow: scroll;
	-webkit-overflow-scrolling: touch;
`;

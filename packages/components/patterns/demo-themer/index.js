const React = require('react');
const styled = require('styled-components').default;
const {ThemeProvider} = require('styled-components');
const getThemes = require('../themes');

const themes = getThemes();

module.exports = Themer;

function Themer(props) {
  return (
	<StyledThemer>
		<ThemeProvider key="dark" theme={themes.dark}>
			{props.children}
		</ThemeProvider>
		<ThemeProvider key="light" theme={themes.light}>
			{props.children}
		</ThemeProvider>
	</StyledThemer>
  );
}

const StyledThemer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const React = require('react');
const {ThemeProvider} = require('styled-components');
const getThemes = require('../themes');

const themes = getThemes();

module.exports = Themer;

function Themer(props) {
	return (
		<div>
			<ThemeProvider key="dark" theme={themes.dark}>
				{props.children}
			</ThemeProvider>
			<ThemeProvider key="light" theme={themes.light}>
				{props.children}
			</ThemeProvider>
		</div>
	);
}

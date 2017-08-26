import React from 'react';
import PropTypes from 'prop-types';
import getThemes from 'themes';
import {ThemeProvider} from 'styled-components';

const themes = getThemes();

export default function Themer(props) {
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

Themer.propTypes = {
	children: PropTypes.any.isRequired
};

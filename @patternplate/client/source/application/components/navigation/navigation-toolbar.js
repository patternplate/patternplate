import React from 'react';
import styled from 'styled-components';
import Icon from '../common/icon';
import Indicator from '../../containers/indicator';
import ToggleSearch from '../../containers/toggle-search';

export default function NavigationToolbar() {
	return (
		<StyledNavigationToolbar>
			<StyledSettings>
				<SettingsButton/>
			</StyledSettings>
			<StyledSearch>
				<ToggleSearch/>
			</StyledSearch>
			<StyledIndicator>
				<Indicator/>
			</StyledIndicator>
		</StyledNavigationToolbar>
	);
}

function SettingsButton() {
	return (
		<div>
			<StyledIcon
				size="s"
				symbol="placeholder"
				/>
		</div>
	);
}

const StyledIcon = styled(Icon)`
	fill: ${props => props.theme.color};
`;

const StyledNavigationToolbar = styled.div`
	display: flex;
	align-items: center;
	height: 40px;
	padding: 10px 15px;
`;

const StyledIndicator = styled.div`
	margin-left: auto;
`;

const StyledSearch = styled.div`
	display: flex;
	flex-grow: 1;
	align-items: center;
	justify-content: center;
`;

const StyledSettings = styled.div`
	margin-right: auto;
`;

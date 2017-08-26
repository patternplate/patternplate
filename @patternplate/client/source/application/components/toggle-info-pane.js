import React, {PropTypes as t} from 'react';
import styled from 'styled-components';

import Icon from './common/icon';
import ToggleButton from './common/toggle-button';

export default Info;

function Info(props) {
	return (
		<StyledToggleButton
			enabled={props.enabled}
			shortcut={props.shortcut}
			>
			<StyledIcon symbol="info"/> {props.shortcut.toString()}
		</StyledToggleButton>
	);
}

Info.propTypes = {
	enabled: t.bool,
	shortcut: t.any
};

const StyledIcon = styled(Icon)`
	fill: ${props => props.theme.tint};
`;

const StyledToggleButton = styled(ToggleButton)`
	font-size: 0;
	line-height: 0;
`;

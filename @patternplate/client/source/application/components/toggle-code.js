import React from 'react';
import {Icon, styled} from '@patternplate/components';

import ToggleButton from './common/toggle-button';

export default CodeButton;

function CodeButton(props) {
	return (
		<StyledToggleButton enabled={props.enabled} shortcut={props.shortcut}>
			<StyledIcon enabled={props.enabled} symbol="code"/> {props.shortcut.toString()}
		</StyledToggleButton>
	);
}

const COLOR = props => props.enabled ? props.theme.active : props.theme.color;

const StyledIcon = styled(Icon)`
	fill: ${COLOR};
`;

const StyledToggleButton = styled(ToggleButton)`
	font-size: 0;
	line-height: 0;
`;

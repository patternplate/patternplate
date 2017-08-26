import React, {PropTypes as types} from 'react';
import styled, {injectGlobal} from 'styled-components';
import Text from './text';

export default Indicator;

function Indicator(props) {
	return (
		<StyledIndicator
			onClick={props.onClick}
			title={isValid(props.status) ? `Force sync ${props.shortcut.toString()}` : ''}
			>
			<StyledLabel size="s" status={props.status}>{getLabel(props)}</StyledLabel>
			<StyledDot status={props.status}/>
		</StyledIndicator>
	);
}

Indicator.propTypes = {
	onClick: types.func,
	status: types.oneOf(['', 'error', 'loading', 'loaded']).isRequired,
	shortcut: types.object.isRequired
};

const StyledDot = styled.div`
	position: relative;
	flex-grow: 0;
	flex-shrink: 0;
	height: 7.5px;
	width: 7.5px;
	margin-right: 5px;
	border-radius: 50%;
	background: ${props => props.status === 'error' ? 'rgb(205, 63, 69)' : props.theme.active};
	transition: background .4s ease-in-out, opacity .5s ease-in;
	opacity: ${props => props.status ? 1 : 0};
	cursor: ${props => props.status ? 'pointer' : ''};
	${props => getGlow(props)}
`;

const StyledIndicator = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	position: relative;
`;

const StyledLabel = styled(Text)`
	position: absolute;
	right: 20px;
	color: ${props => props.theme.color};
	${props => getOut(props)}
`;

function getGlow(props) {
	return `
		&::before {
			content: '';
			position: absolute;
			top: 50%;
			left: 50%;
			height: 12px;
			width: 12px;
			filter: blur(3px);
			background: inherit;
			transform: translate(-50%, -50%);
			opacity: .6;
			${getPulse(props)};
		}
	`;
}

function getOut(props) {
	if (props.status !== 'loaded') {
		return;
	}

	/* eslint-disable no-unused-expressions */
	injectGlobal`
			@keyframes out {
				to {
					opacity: 0;
				}
			}
		`;
	/* eslint-enable */

	return `
			animation: out 1s .15s;
			animation-fill-mode: forwards;
		`;
}

function getLabel(props) {
	switch (props.status) {
		case 'error':
			return 'offline';
		case 'loaded':
			return 'synced';
		case 'loading':
			return 'syncing';
		default:
			return '';
	}
}

function getPulse(props) {
	if (props.status !== 'loading') {
		return;
	}

	/* eslint-disable no-unused-expressions */
	injectGlobal`
			@keyframes pulse {
				from {
					opacity: .6;
					transform: translate(-50%, -50%) scale(1);
				}
				50% {
					opacity: 0;
					transform: translate(-50%, -50%) scale(.75);
				}
				to {
					opacity: .6;
					transform: translate(-50%, -50%) scale(1);
				}
			}
		`;
	/* eslint-enable */

	return `
			animation: pulse 1s infinite;
		`;
}

function isValid(status) {
	return ['loading', 'loaded'].includes(status);
}

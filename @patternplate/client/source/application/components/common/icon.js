import React, {PropTypes as t} from 'react';
import styled from 'styled-components';
import {withRegistry} from './icon-registry';
import {iconNames} from './icons';

const SIZES = {
	s: 15,
	m: 30,
	l: 50
};

export default withRegistry(Icon);

function Icon(props) {
	return (
		<StyledIcon className={props.className} size={props.size}>
			<use xlinkHref={`#${props.symbol || 'placeholder'}`}/>
		</StyledIcon>
	);
}

Icon.propTypes = {
	className: t.string,
	size: t.oneOf(['s', 'm', 'l']),
	symbol: t.oneOf(iconNames).isRequired
};

Icon.defaultProps = {
	size: 'm',
	symbol: 'placeholder'
};

const StyledIcon = styled.svg`
	display: flex;
	width: ${props => SIZES[props.size]}px;
	height: ${props => SIZES[props.size]}px;
	justify-content: center;
	align-items: center;
`;

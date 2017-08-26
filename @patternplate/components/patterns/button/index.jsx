import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from 'icon';
import Link from 'link';

const buttonTypes = [
	'button',
	'submit',
	'link'
];

function Button(props) {

	const OuterElement = props.type === 'link' ?
		<Link/> :
		<button type={props.type}/>;

	return (
		<OuterElement.type
			{...OuterElement.props}
			className={props.className}
			title={props.title}
			onClick={props.onClick}
			external={props.external}
			href={props.href}
		>
			{props.children &&
				<span>{props.children}</span>
			}
			{
				props.symbol &&
					<StyledIcon
						symbol={props.symbol}
					/>
			}
		</OuterElement.type>
	);
}

Button.propTypes = {
	title: PropTypes.string.isRequired,
	symbol: PropTypes.string.isRequired,
	className: PropTypes.string,
	children: PropTypes.any,
	type: PropTypes.oneOf(buttonTypes),
	href: PropTypes.string,
	onClick: PropTypes.func,
	external: PropTypes.bool,
	frameless: PropTypes.bool,
	transparent: PropTypes.bool
};

Button.defaultProps = {
	type: 'button'
};

const StyledButton = styled(Button)`
	appearance: none;
	display: inline-flex;
	height: 40px;
	align-items: center;
	justify-content: center;
	padding: 5px;
	border: none;
	outline: 0;
	background: ${props => props.theme.background};
	color: ${props => props.theme.color};
	font: inherit;
	box-sizing: border-box;
	vertical-align: top;
	${props => !props.frameless && `
		padding: 4px;
		border: 1px solid currentColor;
	`}
	${props => props.transparent && `
		background: transparent;
	`}
`;

const StyledIcon = styled(Icon)`
	&:not(:first-child) {
		margin-left: 5px;
	}
`;

export default StyledButton;

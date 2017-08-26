import React from 'react';
import PropTypes from 'prop-types';

export default class Link extends React.Component {
	constructor(...args) {
		super(...args);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.onClick(e, this.props.href);
	}

	render() {
		const {props} = this;
		return (
			<a
				target={props.external ? '_blank' : null}
				rel={props.external ? 'noopener noreferrer' : null}
				className={props.className}
				href={props.href}
				onClick={this.handleClick}
				title={props.title}
				data-id={props['data-id']}
			>
				{props.children}
			</a>
		);
	}
}

Link.propTypes = {
	children: PropTypes.any.isRequired,
	className: PropTypes.string,
	external: PropTypes.bool,
	href: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	title: PropTypes.string
};

Link.defaultProps = {
	className: undefined,
	external: false,
	onClick: () => {},
	title: undefined
};

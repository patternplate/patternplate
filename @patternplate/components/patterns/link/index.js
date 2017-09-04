const React = require('react');

class Link extends React.Component {
	constructor(...args) {
		super(...args);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e) {
		this.props.onClick(e);
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

module.exports = Link;

Link.defaultProps = {
	className: undefined,
	external: false,
	onClick: () => {},
	title: undefined
};

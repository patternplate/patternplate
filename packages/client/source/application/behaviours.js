import React from 'react';

export function mountable(Component) {
	return class MountableComponent extends React.Component {
		componentDidMount() {
			if (typeof this.props.onMount === 'function') {
				this.props.onMount();
			}
		}
		render() {
			const {onMount, ...rest} = this.props;
			return <Component {...rest}/>;
		}
	};
}

export function skippable(Component, prop = 'active') {
	return props => props[prop] === true ? <Component {...props}/> : null;
}

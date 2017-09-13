import React from 'react';
import Helmet from 'react-helmet';
import {styled} from '@patternplate/components';
import * as svg from '../utils/svg';

class FavIcon extends React.Component {
	constructor(...args) {
		super(...args);
		this.state = {};
	}

	componentDidMount() {
		if (typeof this.props.source !== 'string') {
			return;
		}

		const [purged] = svg.purge([svg.parse(this.props.source)]);
		const source = svg.stringify(purged);

		svg.png(source)
			.then(href => this.setState({href}))
			.catch(err => {
				console.error(err);
				this.setState({href: null});
			});
	}

	render() {
		const {props} = this;

		if (typeof props.source !== 'string') {
			return null;
		}

		const [purged] = svg.purge([svg.parse(props.source)]);
		const source = svg.stringify(purged);

		const link = [
			{rel: 'icon', href: this.state.href, type: 'image/png'},
			{rel: 'icon', href: svg.btoa(source), type: 'image/svg+xml'}
		];

		return <Helmet link={link}/>;
	}
}

export default styled(FavIcon)`
	width: 100%;
	height: auto;
	stroke: ${props => props.theme.color};
	stroke-width: 0;
	fill: ${props => props.theme.color};
`;


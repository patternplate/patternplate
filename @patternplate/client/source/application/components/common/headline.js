import React, {Component, PropTypes as types} from 'react';
import classnames from 'classnames';
import pure from 'pure-render-decorator';

@pure
class Headline extends Component {
	displayName = 'Headline';

	static propTypes = {
		children: types.node.isRequired,
		order: types.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
		display: types.oneOf([1, 2, 3, 4, 5, 6]),
		className: types.string
	};

	static defaultProps = {
		children: 'Headline',
		order: 1
	};

	render() {
		const TagName = `h${this.props.order}`;
		const className = classnames('h', `h${this.props.display || this.props.order}`, this.props.className);

		return (
			<TagName className={className}>
				{this.props.children}
			</TagName>
		);
	}
}

export default Headline;

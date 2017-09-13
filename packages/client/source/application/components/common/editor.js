import React, {Component} from 'react';

export default class Editor extends Component {
	render() {
		const {props} = this;

		return (
			<textarea
				className={props.className}
				onChange={props.onChange}
				onKeyDown={props.onKeyDown}
				value={props.value}
				/>
		);
	}
}

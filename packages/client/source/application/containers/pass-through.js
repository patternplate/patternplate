import {entries} from 'lodash';
import React from 'react';
import {connect} from 'react-redux';

export default connect(mapProps)(PassThrough);

function PassThrough(props) {
	return (
		<div>
			{props.items.map(([name, value]) => <input type="hidden" key={name} name={name} value={value}/>)}
		</div>
	);
}

function mapProps(state, own) {
	const {query} = state.routing.locationBeforeTransitions;
	const q = {...query, ...(own.query || {})};
	const items = entries(q).filter(([, value]) => value !== null);
	return {items};
}

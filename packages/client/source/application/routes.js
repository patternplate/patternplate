import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Application from './containers/application';
import Pattern from './containers/pattern';
import Documentation from './containers/documentation';
import NotFound from './containers/not-found';

export default function (store) {
	const state = store.getState();
	return (
		<Route path={state.base} component={Application}>
			<IndexRoute component={Documentation}/>
			<Route path="pattern/*" component={Pattern}/>
			<Route path="doc/*" component={Documentation}/>
			<Route path="*" component={NotFound}/>
		</Route>
	);
}

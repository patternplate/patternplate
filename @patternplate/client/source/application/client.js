import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';
import {Provider} from 'react-redux';
import {syncHistoryWithStore} from 'react-router-redux';

import routes from './routes';
import configureStore from './store';

export default function (data, el) {
	const store = configureStore(browserHistory, data);
	const history = syncHistoryWithStore(browserHistory, store);

	const router = (
		<Provider store={store}>
			<Router history={history}>
				{routes(store)}
			</Router>
		</Provider>
	);

	return render(router, el);
}

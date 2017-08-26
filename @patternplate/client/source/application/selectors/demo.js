import queryString from 'query-string';
import {createSelector} from 'reselect';
import urlQuery from '../utils/url-query';
import selectItem from './item';

const selectEnv = createSelector(
	state => state.environment,
	state => state.schema.envs,
	(env, envs) => Array.isArray(envs) ? envs.find(e => e.name === env) : {name: 'index'}
);

export const selectSrc = createSelector(
	selectItem,
	state => state.base,
	selectEnv,
	state => state.pattern,
	state => state.mountEnabled,
	(item, base, env, pattern, mount) => {
		if (!item) {
			return null;
		}

		const pathname = urlQuery.format({
			pathname: `${base}demo/${item.id}/index.html`,
			query: {
				environment: env.name
			}
		});

		const query = queryString.stringify({
			reloadTime: pattern.reloadTime,
			mount
		});

		return `${pathname}?${query}`;
	}
);

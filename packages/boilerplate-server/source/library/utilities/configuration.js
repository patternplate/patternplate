import {merge} from 'lodash';
import requireAll from 'require-all';

function loadConfiguration(
  dirname,
  filter = /(.*).(js|json)$/,
  env = 'development'
) {
  const rawConfiguration = requireAll({
    dirname,
    filter,
    resolve: mod => mod.default || mod
  });

  rawConfiguration.environments = rawConfiguration.environments || {};
  const envConfiguration = rawConfiguration.environments[env] || {};

  return merge({}, rawConfiguration, envConfiguration, {environment: env});
}

export default loadConfiguration;

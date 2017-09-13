import {merge} from 'lodash';
import getEnvSets from './get-env-sets';

export default getSourceSets;

function getSourceSets(datasets) {
  return getSourceFileSets(datasets).reduce((sets, set) => {
    const isDoc = set.file.type === 'documentation';
    const isIndex = set.file.concern === 'index';
    const hasDemo = sets.some(sibling => {
      return (
        sibling.id === set.id &&
        sibling.file.type === set.file.type &&
        sibling.file.concern === 'demo'
      );
    });
    const types =
      isDoc || (isIndex && hasDemo) ? ['source'] : ['source', 'transformed'];
    const amend = types.map(type => {
      return merge({}, set, {type});
    });
    return [...sets, ...amend];
  }, []);
}

function getSourceFileSets(datasets) {
  const envSets = getEnvSets(datasets);
  return envSets.reduce((sets, set) => {
    const amend = set.files.map(file => {
      return merge({}, set, {file});
    });
    return [...sets, ...amend];
  }, []);
}

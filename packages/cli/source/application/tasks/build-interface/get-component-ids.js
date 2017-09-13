import getComponents from './get-components';

export default getMountIds;

function getMountIds(datasets, automount) {
  const componentPatterns = getComponents(datasets, automount);
  return componentPatterns.map(pattern => pattern.id);
}

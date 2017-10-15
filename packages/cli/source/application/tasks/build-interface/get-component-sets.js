import { merge } from "lodash";
import getComponents from "./get-components";

export default getComponentSets;

function getComponentSets(datasets, automount) {
  const components = getComponents(datasets, automount);
  return components.reduce((sets, set) => {
    const amend = set.environmentNames.map(name =>
      merge({}, set, { env: name })
    );
    return [...sets, ...amend];
  }, []);
}

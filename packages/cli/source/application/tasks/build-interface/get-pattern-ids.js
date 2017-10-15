import getNavigationUrls from "./get-navigation-urls";
import serverRequire from "./server-require";
// Const getNavigation = serverRequire('get-navigation');
export default getPatternIds;

async function getPatternIds(...args) {
  const navigation = await getNavigation(...args);
  return getNavigationUrls(navigation);
}

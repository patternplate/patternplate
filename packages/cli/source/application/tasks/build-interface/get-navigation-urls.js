export default getNavigationUrls;

function getNavigationUrls(tree) {
  return (tree.children || []).reduce((pool, item) => {
    const fragments = item.id.split("/");
    const baseName = fragments[fragments.length - 1];
    const relative = fragments.slice(0, fragments.length - 1);

    const children = getNavigationUrls(item);
    return [
      ...pool,
      {
        id: item.id,
        type: item.type,
        relative,
        baseName,
        name: `${baseName}/index.html`
      },
      ...children
    ];
  }, []);
}

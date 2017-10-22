export default find;

function find(tree, id, { type }) {
  if (id === "/") {
    return tree;
  }

  if (!id || !id.startsWith(`${type}/`)) {
    return null;
  }

  const reg = new RegExp(`^${type}/`);

  const frags = id
    .replace(reg, "")
    .split("/")
    .filter(Boolean);

  const match = tree.children.find(
    child =>
      child.path.every((s, i) => frags[i] === s) &&
      (child.type === type || child.type === "folder")
  );

  return match;
}

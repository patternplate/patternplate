module.exports = {
  loadManifest
};

async function loadManifest(dir) {
  if (typeof dir !== "string") {
    throw new Error(`load-manifest dir expects string, received ${dir}, typeof ${dir}`);
  }
}

import loadTransforms from "./load-transforms";

export default transforms;

async function transforms(application) {
  const initTransforms = await loadTransforms(
    application.configuration.transforms
  );
  return initTransforms(application);
}

export { loadTransforms };

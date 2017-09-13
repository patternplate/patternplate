import loadTransform from './load-transform';
import selectTransformNames from './select-transform-names';

export default loadTransforms;

async function loadTransforms(config = {}) {
	const transformNames = selectTransformNames(config);
	const jobs = transformNames.map(name => loadTransform(name));
	const loaded = await Promise.all(jobs);
	return app => {
		return loaded.reduce((transforms, transform) => {
			transforms[transform.name] = transform.export(app);
			return transforms;
		}, {});
	};
}

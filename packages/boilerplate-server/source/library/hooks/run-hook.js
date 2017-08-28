export default async function runHook(hook, application) {
	await hook.stage.bind(hook)('configure', application);
	await hook.stage.bind(hook)('start', application);
}

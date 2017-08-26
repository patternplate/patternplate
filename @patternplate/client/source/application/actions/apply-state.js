export default applyState;
export const type = '@@APPLY_STATE';

function applyState(payload) {
	return {
		type,
		payload
	};
}

export default toString;

function toString(input) {
	if (!input) {
		return;
	}
	if (typeof input === 'string') {
		return input;
	}
	if (input.toString) {
		return input.toString();
	}
	return String(input);
}

import r from 'resolve';

export default resolvePackage;
function resolvePackage(name, opts = {}) {
	return new Promise((resolve, reject) => {
		r(name, opts, (error, result) => {
			if (error) {
				return reject(error);
			}
			resolve(result);
		});
	});
}

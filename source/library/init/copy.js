import ncp from 'ncp';
export default copy;

function copy(from, to, options = {}) {
	return new Promise((resolve, reject) => {
		ncp(from, to, options, err => {
			if (err) {
				return reject(err);
			}
			resolve();
		});
	});
}

import rimraf from 'rimraf';

export default function rm(target) {
	return new Promise((resolve, reject) => {
		rimraf(target, {}, error => {
			if (error) {
				reject(error);
			} else {
				resolve();
			}
		});
	});
}

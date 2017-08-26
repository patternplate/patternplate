import url from 'url';

export default function isURI(input) {
	const {host, hostname} = url.parse(input);
	return [host, hostname].every(Boolean);
}

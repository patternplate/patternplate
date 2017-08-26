import path from 'path';
import urlQuery from './url-query';

export default function getIdByPathname(pathname, base = '/') {
	const parsed = urlQuery.parse(pathname);
	return path.relative(base, parsed.pathname);
}

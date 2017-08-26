import path from 'path';
import url from 'url';
import renderPage from '../../library/render-page';

function indexRouteFactory(application) {
	return async function indexRoute() {
		const parsed = url.parse(this.request.url);

		if (!parsed.pathname.endsWith('/') && !path.extname(this.request.url)) {
			parsed.pathname = `${parsed.pathname}/`;
			const rewritten = url.format(parsed);
			this.redirect(rewritten);
			return;
		}

		this.body = await renderPage(application, this.request.url);
	};
}

export default indexRouteFactory;

import conditional from 'koa-conditional-get';
import etag from 'koa-etag';

export default function startEtagsMiddleware ( application ) {
	application.engine.use(conditional());

	application.engine.use(function * test(next) {
		yield next;
	});

	return etag();
}

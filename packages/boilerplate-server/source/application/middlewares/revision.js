
export default function startRevisionMiddleware ( application ) {
	return function * revisionMiddleWare ( next ) {
		yield next;
	};
}

import { resolve, basename, extname } from 'path';
import { createReadStream } from 'fs';

import resolvePath from 'resolve-path';
import { stat } from '../../library/utilities/fs';

const notfound = [ 'ENOENT', 'ENAMETOOLONG', 'ENOTDIR' ];

async function serve( application, root, configuration = {} ) {
	if ( [ 'HEAD', 'GET' ].indexOf( this.method ) === -1 ) {
		return;
	}

	let path = this.captures[0];
	path = path[ 0 ] === '/' ? path.slice( 1 ) : path;

	try {
		path = decodeURIComponent( path )
	} catch ( err ) {
		application.log.error( 'Could not decode path' );
		application.log.debug( err );
		this.throw( 'failed to decode', 400 );
	}

	path = resolvePath( root, path );

	if ( basename( path )[ 0 ] === '.' ) {
		return;
	}

	let stats;

	try {
		stats = await stat( path );
		if ( stats.isDirectory() ) {
			return;
		}
	} catch ( err ) {
		if ( notfound.indexOf( err.code ) > -1 ) {
			return;
		}
		err.status = 500;
		throw err;
	}

	this.set( 'Last-Modified', stats.mtime.toUTCString() );
	this.set( 'Content-Length', stats.size );
	this.set( 'Cache-Control', `max-age=${configuration.options.maxage | 0}` );

	this.type = extname( path );
	this.body = createReadStream( path );
	return;
}

export default function staticRouteFactory ( application, configuration ) {
	let userStaticPath = resolve( application.runtime.patterncwd, configuration.options.root );

	return async function staticRoute ( ) {
		let statist = serve.bind( this );

		await statist( application, userStaticPath, configuration );
	};
}

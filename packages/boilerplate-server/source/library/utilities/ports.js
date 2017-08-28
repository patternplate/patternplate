import {checkPortStatus as test, findAPortNotInUse as find} from 'portscanner';

class Ports {
	static test ( ...args ) {
		return new Promise( function fullfill ( resolve, reject ) {
			test( ...[ ...args, function cb ( error, result ) {
				return resolve( result === 'closed' );
			} ] );
		} );
	}

	static find ( ...args ) {
		return new Promise( function fullfill ( resolve, reject ) {
			find( ...[ ...args, function cb ( error, result ) {
				return resolve( result );
			} ] );
		} );
	}
}

export default Ports;

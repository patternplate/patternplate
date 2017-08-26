import 'dom4';

import url from 'url';
import fetch from 'isomorphic-fetch';
import platform from 'platform';
import {merge} from 'lodash';
import router from '../../application/client';

const {document} = global;

main()
	.catch(err => {
		console.error(err);
	});

async function main() {
	const slot = document.query('[data-application]');
	const vault = document.query('[data-application-state]');
	const data = await getData(vault);

	router(data, slot);
}

async function getData(vault) {
	const data = JSON.parse(vault.textContent);
	const schema = await getStateData(data.base);

	return merge(
		data,
		getPlatformData(),
		getWindowData(),
		{
			schema,
			navigation: schema.meta
		}
	);
}

async function getStateData(base) {
	return (await fetch(url.resolve(base, '/api'))).json();
}

function getPlatformData() {
	return {
		clientRuntimeName: platform.name,
		clientRuntimeVersion: platform.version,
		clientOsName: platform.os.name,
		clientOsVersion: platform.os.version
	};
}

function getWindowData() {
	return {
		window: {
			width: global.innerWidth,
			height: global.innerHeight
		}
	};
}

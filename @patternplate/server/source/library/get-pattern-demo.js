import url from 'url';
import {merge, uniqBy} from 'lodash';
import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

import getPatternRetriever from './utilities/get-pattern-retriever';
import urlQuery from './utilities/url-query';
import getPatternSource from './get-pattern-source';
import getComponent from './get-component';

export default getPatternDemo;

async function getPatternDemo(application, id, filters, environment, options) {
	const getFile = getPatternSource(application);
	filters.outFormats = ['html'];

	const [pattern] = await getPatternRetriever(application)(id, filters, environment, ['read'], {
		automount: options.mount
	});

	if (!pattern) {
		return null;
	}

	const order = ['demo', 'index'];

	const path = Object.values(pattern.files)
		.sort((a, b) => order.indexOf(a.basename) - order.indexOf(b.basename))
		.map(file => file.path)[0];

	if (!path) {
		return null;
	}

	const automount = selectAutoMount(application, pattern, options.mount);
	const content = await getFile(path, 'transformed', environment, {automount});
	const {formats} = application.configuration.patterns;

	if (automount) {
		await getComponent(application, pattern.id, environment);
	}

	const render = getRenderer(formats, automount);
	const resources = (application.resources || []).filter(({pattern: p}) => p === null || p === pattern.id);
	return render(content.body, pattern, resources);
}

function selectAutoMount(a, p, forced) {
	const transform = a.configuration.transforms['react-to-markup'] || {};
	const pattern = selectReactToMarkup(selectManifestOptions(p));
	const settings = merge({}, transform.opts, pattern.opts, {automount: forced});
	return settings.automount || false;
}

function selectReactToMarkup(o) {
	return o['react-to-markup'] || {};
}

function selectManifestOptions(p) {
	return p.manifest.options || {};
}

function getRenderer(formats, component = false) {
	return (content, result, resources) => {
		const transforms = result.config.transforms;
		const styleFormat = getFormat(formats, transforms, 'style');
		const scriptFormat = getFormat(formats, transforms, 'script');
		const styleReference = getUriByFormat(result, styleFormat, '/demo');

		const markupContent = [{content}];
		const styleContent = resources.filter(r => r.type === 'css' && !r.reference);
		const scriptContent = resources.filter(r => r.type === 'js' && !r.reference);

		const scripts = component ? [] : [{uri: getUriByFormat(result, scriptFormat, '/demo')}];
		const styles = [{id: styleReference}].filter(i => i.id);

		const markupReferences = uniqBy(resources.filter(r => r.type === 'html' && r.reference), 'id');
		const styleReferences = uniqBy([...styles, ...resources.filter(r => r.type === 'css' && r.reference)], 'id');
		const scriptReferences = uniqBy([...resources.filter(r => r.type === 'js' && r.reference), ...scripts], 'id')
			.filter(s => component || !String(s.id).startsWith('react-mount'));

		return layout({
			title: result.id,
			content: {
				markup: markupContent,
				style: styleContent,
				script: scriptContent
			},
			reference: {
				markup: markupReferences,
				style: styleReferences,
				script: scriptReferences
			}
		});
	};
}

const formatNames = {
	markup: 'html',
	style: 'css',
	script: 'js'
};

function getUriByFormat(pattern, format = '', base = '') {
	if (!format) {
		return null;
	}

	const outFormats = pattern.outFormats || [];
	const type = format.toLowerCase();
	const match = outFormats.find(o => o.type === type);

	if (match) {
		return urlQuery.format({
			pathname: `${base}/${pattern.id}/index.${match.extension}`,
			query: {
				environment: pattern.filters.environments[0] || 'index'
			}
		});
	}

	return null;
}

function getFormat(formats, transforms, type) {
	const entries = Object.entries(formats);
	// try to get a format with matching outFormat
	// markup => html
	// style => css
	// script => js
	const formatName = formatNames[type];
	const found = entries.find(findByOutFormat(formatName, transforms));

	if (found) {
		return (found[1] || {}).name || found[0];
	}

	// Legacy get format by name
	// {name: 'Format'}
	const legacy = entries.find(findByName(type));
	if (legacy) {
		return (legacy[0] || {}).name || legacy[0];
	}

	return null;
}

function findByName(name) {
	return entry => entry[1].name.toLowerCase() === name;
}

function findByOutFormat(name, transforms) {
	return entry => {
		const outFormat = getOutFormat(entry, transforms);
		return name === outFormat;
	};
}

function getOutFormat(entry, transforms) {
	const entryTransforms = entry[1].transforms || [];
	// If no transforms are configured
	// use the inbound transform extension as outFormat
	if (!entryTransforms.length) {
		return entry[0];
	}

	const transformName = entryTransforms[entryTransforms.length - 1];
	const transformConfig = transforms[transformName];
	return transformConfig.outFormat;
}

function layout(props) {
	const styleRefs = (props.reference.style || []).filter(isReference);
	const scriptRefs = (props.reference.script || []).filter(isReference);

	const demo = (
		<Demo
			content={props.content}
			title={props.title}
			styleRefs={styleRefs}
			scriptRefs={scriptRefs}
			/>
	);

	return `<!doctype html>\n${renderToStaticMarkup(demo)}`;
}

function isAbsolute(reference) {
	return !isRelative(reference) && !hasUri(reference);
}

function isReference(reference) {
	return 'id' in reference || 'uri' in reference;
}

function isRelative(reference) {
	return (reference.id || '').charAt(0) === '.' || hasUri(reference);
}

function hasUri(reference) {
	return 'uri' in reference;
}

function Demo(props) {
	return (
		<html>
			<head>
				<title>{props.title}</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>
				<link rel="icon" href="data:;base64,iVBORw0KGgo="/>
				{props.styleRefs
					.filter(isAbsolute)
					.map(style => <link rel="stylesheet" href={url.resolve(`/api/resource/`, style.id)}/>)}
				{props.styleRefs
					.filter(isRelative)
					.map(style => <link rel="stylesheet" href={style.uri || style.id}/>)}
			</head>
			<body>
				{(props.content.markup || []).map(markup => <div dangerouslySetInnerHTML={{__html: markup.content}}/>)}
				{props.scriptRefs
					.filter(isAbsolute)
					.map(script => <script src={`/api/resource/${script.id}.js`}/>)}
				{props.scriptRefs
					.filter(isRelative)
					.filter(script => Boolean(script.uri || script.id))
					.map(script => <script src={script.uri || script.id}></script>)}
			</body>
		</html>
	);
}

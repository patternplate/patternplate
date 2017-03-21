// @flow
import requireUncached from 'require-uncached';
import resolveFrom from 'resolve-from';

export default styledComponentsTransformFactory;

type MetaResource = {|
	id: string;
	content: string[];
	type: string;
	reference: boolean;
	pattern: string;
|};

/** A patternplate File object with attaced meta data */
type File = {
	buffer: Buffer;
	path: string;
	pattern: {
		id: string;
		post?: Function[];
	};
	dependencies?: FileDependencies; // eslint-disable-line no-use-before-define
	meta?: {
		css?: MetaResource[]
	};
};

/** Map of dependencies available to a file */
type FileDependencies = {
	[localName: string]: File;
};

function styledComponentsTransformFactory(application: Object): Function {
	return async function (file: File): Promise<File> {
		file.pattern.post = (file.pattern.post || []).concat(getCSS(file, application));
		return file;
	};
}

function getCSS(file, app) {
	return (): void => {
		const styledPath = resolveFrom(process.cwd(), 'styled-components');
		const styled = requireUncached(styledPath); // eslint-disable-line flow-check/check, import/no-dynamic-require
		const result = styled.styleSheet.getCSS();
		styled.styleSheet.reset();

		app.resources = app.resources.filter(r => r.id !== `styled-components/${file.pattern.id}`);

		app.resources.push({
			id: `styled-components/${file.pattern.id}`,
			pattern: file.pattern.id,
			type: 'css',
			reference: true,
			content: result
		});
	};
}

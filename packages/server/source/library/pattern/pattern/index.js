/* eslint-disable max-len*/
import path from 'path';
import fauxCache from './faux-cache';
import fauxLog from './faux-log';
import inject from './inject';
import read from './read';
import readManifest from './read-manifest';
import transform from './transform';

const defaultFilters = {environments: [], inFormats: [], outFormats: []};

export class Pattern {
	constructor(patternPath, base, config = {}, transforms = {}, filters = {}, cache = null) {
		const id = patternPath.split(path.sep).join('/');
		this.options = config.options || {};
		this.base = base;
		this.cache = cache || fauxCache;
		this.config = {parents: [], ...config};
		this.dependencies = {};
		this.demoDependencies = {};
		this.environments = {index: {manifest: {name: 'index'}}};
		this.files = {};
		this.filters = {...defaultFilters, ...filters};
		this.id = id;
		this.isEnvironment = id.includes('@environment');
		this.log = config.log || fauxLog;
		this.manifest = {};
		this.path = path.resolve(base, id);
		this.results = {};
		this.transforms = transforms;
	}

	inject(manifest, patterns) {
		inject(this, manifest, patterns);
		return this;
	}

	async read(path = this.path) {
		await read(this, path);
		return this;
	}

	async readManifest(path = this.path) {
		await readManifest(this, path);
		return this;
	}

	async transform() {
		await transform(this);
		return this;
	}
}

export default async function patternFactory(...args) {
	return await new Pattern(...args);
}

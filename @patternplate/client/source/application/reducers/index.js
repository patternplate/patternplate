import activeBlock from './active-block';
import base from './base';
import codeEnabled from './code-enabled';
import connection from './connection';
import depth from './depth';
import demo from './demo';
import demoDependenciesEnabled from './demo-dependencies-enabled';
import demoDependentsEnabled from './demo-dependents-enabled';
import dependenciesEnabled from './dependencies-enabled';
import dependentsEnabled from './dependents-enabled';
import docEnabled from './doc-enabled';
import environment from './environment';
import fetching from './fetching';
import id from './id';
import infoEnabled from './info-enabled';
import lightbox from './lightbox';
import manifestEnabled from './manifest-enabled';
import messages from './messages';
import mountEnabled from './mount-enabled';
import navigationEnabled from './navigation-enabled';
import opacity from './opacity';
import pattern from './pattern';
import search from './search';
import searchEnabled from './search-enabled';
import searchPreview from './search-preview';
import searchValue from './search-value';
import schema from './schema';
import shortcuts from './shortcuts';
import theme from './theme';
import hideEnabled from './hide-enabled';
import window from './window';

const ident = (state = {}) => state;
const getDependencies = (reducer = {}) => reducer.dependencies || [];

export default {
	activeBlock,
	base,
	codeEnabled,
	config: ident,
	connection,
	demo,
	demoDependenciesEnabled,
	demoDependentsEnabled,
	dependenciesEnabled,
	dependentsEnabled,
	depth,
	docEnabled,
	environment,
	fetching,
	hideEnabled,
	id,
	infoEnabled,
	lightbox,
	manifestEnabled,
	messages,
	mountEnabled,
	navigationEnabled,
	opacity,
	pattern,
	schema,
	search,
	searchEnabled,
	searchPreview,
	searchValue,
	shortcuts,
	startBase: ident,
	theme,
	window
};

export const dependencies = {
	connection: getDependencies(connection),
	pattern: getDependencies(pattern)
};

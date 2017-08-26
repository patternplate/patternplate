import {values} from 'lodash';
import React, {PropTypes as t} from 'react';
import styled from 'styled-components';
import tag from 'tag-hoc';

import Icon from './common/icon';
import {InnerInfoPane} from './info-pane';
import Link from './common/link';
import Markdown from './common/markdown';
import Outside from './outside';
import SearchField from './common/search-field';
import Text from './text';
import withToggleStates from '../connectors/with-toggle-states';
import PassThrough from '../containers/pass-through';

const InfoPane = withToggleStates(InnerInfoPane);

const NOOP = () => {};

export default class Search extends React.Component {
	constructor(...args) {
		super(...args);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleUp = this.handleUp.bind(this);
		this.handleDown = this.handleDown.bind(this);
		this.handleActivate = this.handleActivate.bind(this);
		this.handleScrollRequest = this.handleScrollRequest.bind(this);
		this.getListRef = this.getListRef.bind(this);
	}

	handleScrollRequest(e) {
		if (!this.list) {
			return;
		}
		const l = this.list.getBoundingClientRect();
		const i = e.target.getBoundingClientRect();

		if (i.bottom > l.bottom) {
			this.list.scrollTop = e.target.offsetTop - l.height + i.height;
		}

		if (i.top < l.top) {
			this.list.scrollTop = e.target.offsetTop - 30;
		}
	}

	getListRef(ref) {
		this.list = ref;
	}

	componentDidMount() {
		if (typeof this.props.onMount === 'function') {
			this.props.onMount();
		}
	}

	handleActivate(e) {
		const id = e.target.getAttribute('data-id');
		const index = [...this.props.docs, ...this.props.components].findIndex(i => i.id === id);

		if (index > -1) {
			this.props.onActivate(index);
		}
	}

	handleUp(e) {
		e.stopPropagation();
		if (this.props.activeItem && this.props.activeItem.index > 0) {
			e.preventDefault();
			this.props.onUp();
		}
	}

	handleDown(e) {
		e.stopPropagation();
		const available = this.props.components.length + this.props.docs.length - 2;

		if (this.props.activeItem && available >= this.props.activeItem.index) {
			this.props.onDown();
		}
	}

	handleSubmit(e) {
		e.preventDefault();
		if (!this.props.activeItem) {
			return this.props.onSubmit(e);
		}
		this.props.onNavigate(`/${this.props.activeItem.type}/${this.props.activeItem.id}`);
	}

	render() {
		const {props} = this;
		const withComponents = props.components.length > 0;
		const withDocs = props.docs.length > 0;

		return (
			<StyledFormBox
				enabled={props.enabled}
				inline={props.inline}
				onClickOutside={props.inline || !props.enabled ? NOOP : props.onClickOutside}
				onClick={props.inline && !props.enabled ? props.onFocus : NOOP}
				value={props.value}
				>
				<StyledForm onSubmit={this.handleSubmit} method="GET">
					<StyledSearchFieldBox onClick={props.inline ? props.onClick : NOOP}>
						<SearchField
							linkTo="/search"
							mark={props.inline ? null : true}
							name={props.inline ? 'inline-search' : 'search'}
							onBlur={props.inline ? NOOP : props.onBlur}
							onChange={props.inline ? NOOP : props.onChange}
							onClear={props.inline ? NOOP : props.onClear}
							onComplete={props.inline ? NOOP : props.onComplete}
							onFocus={props.inline ? NOOP : props.onFocus}
							onStop={props.inline ? NOOP : props.onStop}
							onUp={props.inline ? NOOP : this.handleUp}
							onDown={props.inline ? NOOP : this.handleDown}
							placeholder="Search"
							suggestion={props.suggestion}
							title={`Search for patterns ${props.shortcuts.toggleSearch.toString()}`}
							value={props.value || ''}
							>
							{props.enabled &&
								<Close
									shortcut={props.shortcuts.close}
									clears={String(props.value).length > 0}
									/>
							}
						</SearchField>
						<PassThrough query={{'search-enabled': true, 'search': null}}/>
						<HiddenSubmit/>
						<SearchLegend name={props.legend.name} items={props.legend.items}/>
					</StyledSearchFieldBox>
					<StyledResults>
						{
							(withComponents || withDocs) &&
								<StyledResultList innerRef={this.getListRef}>
									{withDocs > 0 &&
										<StyledResultHeading>
											Docs ({props.docs.length})
										</StyledResultHeading>
									}
									{
										props.docs.map(d => (
											<Result
												active={(props.activeItem || {}).id === d.id}
												id={d.id}
												index={d.index}
												icon={d.manifest.icon || d.type}
												name={d.manifest.displayName}
												key={d.id}
												onActivate={this.handleActivate}
												onScrollRequest={this.handleScrollRequest}
												type="doc"
												/>
										))
									}
									{withComponents > 0 &&
										<StyledResultHeading navigationEnabled={props.navigationEnabled}>
											Components ({props.components.length})
										</StyledResultHeading>
									}
									{
										props.components.map(d => (
											<Result
												active={(props.activeItem || {}).id === d.id}
												id={d.id}
												index={d.index}
												icon={d.manifest.icon || d.type}
												name={d.manifest.displayName}
												key={d.id}
												onActivate={this.handleActivate}
												onScrollRequest={this.handleScrollRequest}
												type="pattern"
												/>
										))
									}
								</StyledResultList>
						}
						{(withComponents || withDocs) &&
							<ResultPreview
								item={props.activeItem}
								/>
						}
					</StyledResults>
				</StyledForm>
			</StyledFormBox>
		);
	}
}

Search.propTypes = {
	activeItem: t.any.string,
	components: t.array.isRequired,
	docs: t.array.isRequired,
	enabled: t.bool.isRequired,
	inline: t.bool,
	onActivate: t.func.isRequired,
	onBlur: t.func.isRequired,
	onChange: t.func.isRequired,
	onClickOutside: t.func.isRequired,
	onComplete: t.func.isRequired,
	onDown: t.func.isRequired,
	onFocus: t.func,
	onMount: t.func.isRequired,
	onNavigate: t.func.isRequired,
	onSubmit: t.func.isRequired,
	onUp: t.func.isRequired,
	suggestion: t.string,
	value: t.string.isRequired
};

const SEARCH_HEIGHT = '60vh';
const SEARCH_FIELD_HEIGHT = '80px';
const SEARCH_LEGEND_HEIGHT = '30px';

const StyledFormBox = styled(Outside)`
	width: 100%;
	height: 100%;
	border-radius: 10px;
	overflow: hidden;
	pointer-events: all;
	overflow: hidden;
	margin: ${props => props.inline ? `calc(12.5vh - 30px) 0 60px 0` : 'none'};
	opacity: ${props => props.inline && props.enabled ? '0' : '1'};
`;

const StyledForm = styled.form`
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 2;
	width: 100%;
	max-height: ${SEARCH_HEIGHT};
	${props => withTint(props)}
`;

const StyledSearchFieldBox = styled.div`
	position: relative;
	z-index: 1;
	flex: 0 0 auto;
`;

const StyledResults = styled.div`
	position: relative;
	z-index: 1;
	flex: 1 1 auto;
	display: flex;
	flex-direction: row;
	max-height: calc(${SEARCH_HEIGHT} - ${SEARCH_FIELD_HEIGHT} - ${SEARCH_LEGEND_HEIGHT}); /* ensure firefox scrolls result list */
	/* overflow: hidden; position: sticky breaks when doing this*/
`;

const StyledResultPreview = styled.div`
	flex: 1 1 60%;
	overflow: scroll;
	-webkit-touch-scroll: auto;
`;

const StyledResultList = styled.div`
	flex: 1 0 40%;
	overflow: scroll;
	-webkit-touch-scroll: auto;
	border-right: 1px solid ${props => props.theme.border};
`;

const StyledResultHeading = styled(Text)`
	box-sizing: border-box;
	position: -webkit-sticky;
	position: sticky;
	z-index: 1;
	top: 0;
	margin: 0;
	font-size: 14px;
	padding: 3px 15px;
	border-width: 1px 0;
	border-style: solid;
	border-color: ${props => props.theme.border};
	color: ${props => props.theme.color};
	background: ${props => props.theme.background};
`;

const StyledIcon = styled(tag(['active'])(Icon))`
	flex: 0 0 auto;
	fill: ${props => props.active ? props.theme.active : props.theme.color};
	margin-right: 10px;
`;

const Linkable = tag(['active'])(Link);

const StyledPreviewLink = styled(Linkable)`
	position: absolute;
	right: 15px;
	top: 50%;
	transform: translateY(-50%);
	text-decoration: none;
	color: ${props => props.theme.border};
	opacity: 0;
	&:hover {
		color: ${props => props.theme.color};
		text-decoration: underline;
	}
`;

const StyledResultLink = styled(Linkable)`
	display: flex;
	align-items: center;
	width: 100%;
	padding: 10px 15px;
	line-height: 20px;
	color: ${props => props.active ? props.theme.active : props.theme.color};
	text-decoration: none;
`;

const StyledResult = styled.div`
	position: relative;
	box-sizing: border-box;
	display: flex;
	align-items: center;
	&:hover ${StyledResultLink} {
		mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 75px, rgba(0, 0, 0, 1) 125px);
		-webkit-mask-image: linear-gradient(to left, rgba(0, 0, 0, 0) 75px, rgba(0, 0, 0, 1) 125px);
	}
	&:hover ${StyledPreviewLink} {
		opacity: 1;
	}
`;

class Result extends React.Component {
	constructor(...args) {
		super(...args);
		this.getRef = this.getRef.bind(this);
	}

	getRef(ref) {
		this.ref = ref;
	}

	componentWillUpdate(next) {
		if (next.active && this.ref) {
			this.props.onScrollRequest({target: this.ref});
		}
	}

	render() {
		const {props} = this;
		return (
			<StyledResult
				innerRef={this.getRef}
				active={props.active}
				title={`Navigation to pattern ${props.name}`}
				data-id={props.id}
				>
				<StyledResultLink active={props.active} href={`/${props.type}/${props.id}`} query={{'search-enabled': false}}>
					<StyledIcon active={props.active} size="m" symbol={props.icon}/>
					<Text active={props.active} size="l">{props.name}</Text>
				</StyledResultLink>
				<StyledPreviewLink active={props.active} query={{'search-preview': props.index}}>
					<Text active={props.active} size="s">Preview</Text>
				</StyledPreviewLink>
			</StyledResult>
		);
	}
}

Result.propTypes = {
	active: t.bool,
	icon: t.string.isRequired,
	id: t.string.isRequired,
	index: t.number.isRequired,
	name: t.string.isRequired,
	type: t.string.isRequired,
	onHover: t.func,
	onScrollRequest: t.func
};

Result.defaultProps = {
	onScrollRequest: () => {}
};

const Submit = props => <input className={props.className} type="submit"/>;

Submit.propTypes = {
	className: t.string
};

const HiddenSubmit = styled(Submit)`
	display: none;
`;

const StyledClose = styled(Link)`
	font-size: 0;
	line-height: 0;
`;

const StyledCloseIcon = styled(Icon)`
	fill: ${props => props.theme.color};
`;

function Close(props) {
	const verb = props.clears ? `Clear` : 'Close';
	const query = props.clears ? {search: null} : {'search-enabled': null};
	const symbol = props.clears ? 'return' : 'close';
	return (
		<StyledClose
			query={query}
			title={`${verb} search ${props.shortcut.toString()}`}
			>
			<StyledCloseIcon size="s" symbol={symbol}/>
			{verb}
		</StyledClose>
	);
}

Close.propTypes = {
	clears: t.bool,
	shortcut: t.any
};

const StyledMarkdown = styled(Markdown)`
	width: 80%;
	margin: 0 auto;
`;

function ResultPreview(props) {
	if (!props.item) {
		return null;
	}
	switch (props.item.type) {
		case 'doc':
			return (
				<StyledResultPreview>
					<StyledMarkdown source={props.item.contents}/>
				</StyledResultPreview>
			);
		default:
			return (
				<StyledResultPreview>
					<InfoPane
						active
						demoDependencies={values(props.item.demoDependencies)}
						demoDependents={values(props.item.demoDependents)}
						dependencies={values(props.item.dependencies)}
						dependents={values(props.item.dependents)}
						flag={props.item.manifest.flag}
						icon={props.item.manifest.options.icon || props.item.type}
						id={props.item.id}
						manifest={JSON.stringify(props.item.manifest, null, '  ')}
						name={props.item.manifest.displayName}
						tags={props.item.manifest.tags}
						version={props.item.manifest.version}
						/>
				</StyledResultPreview>
			);
	}
}

ResultPreview.propTypes = {
	item: t.any
};

const StyledSearchLegend = styled.div`
	display: flex;
	align-items: center;
	height: 30px;
	position: relative;
	box-sizing: border-box;
	width: 100%;
	padding: 0 15px;
	border: 1px solid ${props => props.theme.border};
	color: ${props => props.theme.color};
	${props => withTint(props)}
`;

const StyledSearchLegendBox = styled.div`
	display: flex;
	overflow: scroll;
	-webkit-overflow-scrolling: touch;
	width: 100%;
	position: relative;
	z-index: 1;
	::-webkit-scrollbar {
		display: none;
	}
`;

const StyledField = styled(Text)`
	padding: 0 10px;
	color: ${props => props.theme.color};
	&:first-child {
		padding-left: 0;
	}
`;

const StyledLegendName = styled(StyledField)`
	padding-right: 20px;
	font-weight: bold;
	color: ${props => props.theme.color};
	position: relative;
	z-index: 1;
`;

const StyledFieldLink = styled(Link)`
	white-space: nowrap;
	&:link, &:active, &:visited, &:hover {
		color: ${props => props.theme.color};
		text-decoration: none;
	}
`;

function SearchLegend(props) {
	return (
		<StyledSearchLegend className={props.className}>
			{props.name &&
				<StyledLegendName>
					{props.name}
				</StyledLegendName>
			}
			<StyledSearchLegendBox>
				{(props.items || []).map(l => {
					switch (l.type) {
						case 'field':
						default:
							return (
								<StyledField key={l.key}>
									<StyledFieldLink title={l.description} query={{search: `${l.value}`}}>{l.key}</StyledFieldLink>
								</StyledField>
							);
					}
				})}
			</StyledSearchLegendBox>
		</StyledSearchLegend>
	);
}

function withTint(props) {
	return `
		&::before {
			content: '';
			position: absolute;
			z-index: 0;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background: ${props.theme.tint};
			opacity: 0.975;
		}
	`;
}

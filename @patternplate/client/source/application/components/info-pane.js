import React, {PropTypes as t} from 'react';
import semver from 'semver';
import styled from 'styled-components';
import text from 'react-addons-text-content';
import Code from './common/code';
import Flag from './flag';
import Icon from './common/icon';
import Link from './common/link';
import Text from './text';

export default InfoPane;
export {InnerInfoPane};

const BORDER_RADIUS = 10;

const StyledInfoPane = styled.div`
	position: relative;
	width: 300px;
	min-height: 300px;
	height: 100%;
	box-sizing: border-box;
	border-radius: ${props => props.hermit ? `${BORDER_RADIUS}px` : `${BORDER_RADIUS}px 0 0 ${BORDER_RADIUS}px`};
	border-right: 1px solid ${props => props.theme.border};
	border-right-width: ${props => props.hermit ? 0 : 1}px;
	overflow: scroll;
	overflow-x: hidden;
	background: ${props => props.theme.tint};
`;

const StyledInnerPane = styled.div`
	position: relative;
	z-index: 1;
	background: ${props => props.theme.tint};
`;

const StyledName = styled.div`
	position: relative;
	z-index: 1;
	display: flex;
	flex: 0 0 auto;
	align-items: center;
	margin-bottom: 10px;
	padding: 10px 15px 0 15px;
`;

const StyledToolbar = styled.div`
	display: flex;
	position: relative;
	z-index: 1;
	align-items: center;
	padding: 0 15px 10px 15px;
`;

const StyledDisplayName = styled(Text)`
	flex: 1 0 auto;
	color: ${props => props.theme.color};
	margin-right: 10px;
`;

const StyledId = styled(Text)`
	flex: 0 1 auto;
	color: ${props => props.theme.recess};
	text-align: right;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const StyledIcon = styled(Icon)`
	flex: 0 0 auto;
	fill: ${props => props.theme.color};
	margin-right: 5px;
`;

const StyledData = styled.table`
	position: relative;
	z-index: 1;
	flex: 0 0 auto;
	width: 100%;
	border-collapse: collapse;
	border-spacing: 0;
`;

const StyledDataCell = styled.td`
	box-sizing: border-box;
	height: 30px;
	padding: 4px 6px;
	border-top: 1px solid ${props => props.theme.border};
	&:first-child {
		padding-left: 20px;
	}
	&:last-child {
		text-align: right;
		padding-right: 15px;
	}
`;

const StyledKey = styled(Text)`
	font-weight: bold;
	color: ${props => props.theme.color};
`;

class SearchTrigger extends React.Component {
	constructor(...args) {
		super(...args);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(e, href) {
		e.preventDefault();
		e.stopPropagation();

		if (typeof this.props.onClick === 'function') {
			this.props.onClick(e, href);
		}
	}

	render() {
		const {props} = this;
		return (
			<Link
				className={props.className}
				onClick={this.handleClick}
				query={{'search-enabled': true, 'search': `${props.field}=${props.search}`}}
				title={`Search other patterns with ${props.field} "${props.search}"`}
				>
				{props.children}
			</Link>
		);
	}
}

SearchTrigger.propTypes = {
	children: t.any,
	className: t.string.isRequired,
	field: t.string.isRequired,
	onClick: t.func,
	search: t.string.isRequired,
	title: t.string.isRequired
};

const StyledVersion = styled(Version)`
	&:link, &:visited {
		text-decoration: none;
		color: ${props => {
			const v = text(props.children);
			if (!semver.valid(v)) {
				return props.theme.error;
			}
			if (semver.satisfies(v, '<=0.1')) {
				return props.theme.error;
			}
			if (semver.satisfies(v, '> 0.1 < 1')) {
				return props.theme.color;
			}
			return props.theme.success;
		}}
	}
`;

const StyledTag = styled(Tag)`
	display: inline-block;
	padding: 2px 4px;
	margin-top: 1.5px;
	margin-bottom: 1.5px;
	border: 1px solid ${props => props.theme.color};
	border-radius: 3px;
	&:link, &:visited, &:active {
		text-decoration: none;
		color: ${props => props.theme.color};
	}
	&:nth-child(2n) {
		margin-left: 3px;
	}
`;

const StyledToggleHead = styled(ToggleHead)`
	display: flex;
	align-items: center;
	height: 30px;
	font-weight: bold;
	color: ${props => props.theme.color};
	padding: 3px 15px 3px 20px;
	box-sizing: border-box;
	border-top: 1px solid ${props => props.theme.border};
`;

const StyledToggleBody = styled.div`
	display: flex;
	color: ${props => props.theme.color};
	box-sizing: border-box;
	width: 100%;
	padding: 5px 15px 5px 20px;
	box-sizing: border-box;
	background: ${props => props.theme.tint};
`;

const StyledCode = styled(Code)`
	width: 100%;
`;

function InfoPane(props) {
	const {className, ...rest} = props;

	return (
		<StyledInfoPane className={className} hermit={props.hermit}>
			<InnerInfoPane {...rest} standalone/>
		</StyledInfoPane>
	);
}

function InnerInfoPane(props) {
	return (
		<StyledInnerPane standalone={props.standalone} className={props.className}>
			<StyledName>
				<StyledIcon symbol={props.icon}/>
				<StyledDisplayName>{props.name}</StyledDisplayName>
				<StyledId>{props.id}</StyledId>
			</StyledName>
			{props.children &&
				<StyledToolbar>
					{props.children}
				</StyledToolbar>
			}
			<StyledData>
				<tbody>
					<tr>
						<StyledDataCell>
							<StyledKey>Version</StyledKey>
						</StyledDataCell>
						<StyledDataCell>
							<StyledVersion field="version" search={props.version}>
								{props.version}
							</StyledVersion>
						</StyledDataCell>
					</tr>
					<tr>
						<StyledDataCell>
							<StyledKey>Flag</StyledKey>
						</StyledDataCell>
						<StyledDataCell>
							<SearchTrigger field="flag" search={props.flag}>
								<Flag>{props.flag}</Flag>
							</SearchTrigger>
						</StyledDataCell>
					</tr>
					{
						has(props.tags) &&
							<tr>
								<StyledDataCell>
									<StyledKey>Tags</StyledKey>
								</StyledDataCell>
								<StyledDataCell>
									{props.tags.map(t => <StyledTag key={t} tag={t}/>)}
								</StyledDataCell>
							</tr>
					}
					{
						has(props.envs) && props.envs.length > 1 &&
							<tr>
								<StyledDataCell>
									<StyledKey>Environment</StyledKey>
								</StyledDataCell>
								<StyledDataCell>
									<Select
										name="environment"
										onChange={props.onEnvChange}
										value={props.env.name}
										>
										{
											props.envs.map(e => (<option key={e.name} value={e.name}>{e.displayName}</option>))
										}
									</Select>
								</StyledDataCell>
							</tr>
					}
					{
						<tr>
							<StyledDataCell>
								<StyledKey>Mount</StyledKey>
							</StyledDataCell>
							<StyledDataCell>
								<input type="checkbox" checked={props.mount} onChange={props.onMountChange}/>
							</StyledDataCell>
						</tr>
					}
				</tbody>
			</StyledData>
			{
				has(props.dependencies) &&
					<Toggle
						head={`Dependencies (${props.dependencies.length})`}
						enabled={props.dependenciesEnabled}
						name="dependencies"
						>
						<PatternList>
							{props.dependencies.map(d => <PatternItem key={d.id} pattern={d}/>)}
						</PatternList>
					</Toggle>
			}
			{
				has(props.dependents) &&
					<Toggle
						head={`Dependents (${props.dependents.length})`}
						enabled={props.dependentsEnabled}
						name="dependents"
						>
						<PatternList>
							{props.dependents.map(d => <PatternItem key={d.id} pattern={d}/>)}
						</PatternList>
					</Toggle>
			}
			{
				has(props.demoDependencies) &&
					<Toggle
						head={`Demo Dependencies (${props.demoDependencies.length})`}
						enabled={props.demoDependenciesEnabled}
						name="demo-dependencies"
						>
						<PatternList>
							{props.demoDependencies.map(d => <PatternItem key={d.id} pattern={d}/>)}
						</PatternList>
					</Toggle>
			}
			{
				has(props.demoDependents) &&
					<Toggle
						head={`Demo Dependents (${props.demoDependents.length})`}
						enabled={props.demoDependentsEnabled}
						name="demo-dependents"
						>
						<PatternList>
							{props.demoDependents.map(d => <PatternItem key={d.id} pattern={d}/>)}
						</PatternList>
					</Toggle>
			}
			<Toggle head="Manifest" enabled={props.manifestEnabled} name="manifest">
				<StyledCode block language="json">{props.manifest}</StyledCode>
			</Toggle>
		</StyledInnerPane>
	);
}

InnerInfoPane.propTypes = {
	className: t.string,
	demoDependents: t.array.isRequired,
	demoDependentsEnabled: t.bool.isRequired,
	demoDependencies: t.array.isRequired,
	demoDependenciesEnabled: t.bool.isRequired,
	dependents: t.array.isRequired,
	dependentsEnabled: t.bool.isRequired,
	dependencies: t.array.isRequired,
	dependenciesEnabled: t.bool.isRequired,
	flag: t.string.isRequired,
	icon: t.string.isRequired,
	id: t.string.isRequired,
	manifest: t.string.isRequired,
	manifestEnabled: t.bool.isRequired,
	name: t.string.isRequired,
	standalone: t.bool.isRequired,
	style: t.string,
	tags: t.array.isRequired,
	version: t.string.isRequired
};

const StyledSelectContainer = styled.div`
	position: relative;
	&::after {
		position: absolute;
		right: 0;
		top: 50%;
		z-index: 1;
		content: '▼';
		font-size: 0.8em;
		color: ${props => props.theme.color};
		transform: translateY(-50%);
	}
`;

const StyledSelect = styled.select`
	position: relative;
	z-index: 2;
	appearance: none;
	color: ${props => props.theme.color};
	background: transparent;
	font-size: 16px;
	border: none;
	border-radius: none;
	padding-right: 20px;
	&:focus {
		outline: none;
	}
`;

function Select(props) {
	return (
		<StyledSelectContainer className={props.className}>
			<StyledSelect
				onChange={props.onChange}
				value={props.value}
				>
				{props.children}
			</StyledSelect>
		</StyledSelectContainer>
	);
}

function Version(props) {
	return (
		<SearchTrigger className={props.className} search={props.search} field="version">
			<Text>{props.search}</Text>
		</SearchTrigger>
	);
}

Version.propTypes = {
	className: t.string.isRequired,
	search: t.string.isRequired,
	children: t.string.isRequired
};

function Tag(props) {
	return (
		<SearchTrigger className={props.className} search={props.tag} field="tags">
			<Text>{props.tag}</Text>
		</SearchTrigger>
	);
}

Tag.propTypes = {
	className: t.string.isRequired,
	tag: t.string.isRequired
};

const StyledArrow = styled(Text)`
	font-size: .8em;
	transform: ${props => props.rotated ? `rotate(0deg)` : `rotate(90deg)`};
`;

const StyledHead = styled(Link)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-decoration: none;
`;

function ToggleHead(props) {
	return (
		<StyledHead query={{[`${props.name}-enabled`]: !props.enabled}} className={props.className}>
			<Text>{props.children}</Text>
			<StyledArrow rotated={props.enabled}>▼</StyledArrow>
		</StyledHead>
	);
}

ToggleHead.propTypes = {
	name: t.string.isRequired,
	enabled: t.string.isRequired,
	className: t.string.isRequired,
	children: t.string.isRequired
};

const StyledPatternList = styled.div`
	width: 100%;
`;

function PatternList(props) {
	return (
		<StyledPatternList>
			{props.children}
		</StyledPatternList>
	);
}

PatternList.propTypes = {
	children: t.any
};

const StyledPatternItem = styled(Link)`
	display: block;
	color: ${props => props.theme.color};
	text-decoration: none;
	padding: 3px 0;
`;

function PatternItem(props) {
	return (
		<StyledPatternItem href={`pattern/${props.pattern.id}`} data-id={props.pattern.id}>
			<Text>{props.pattern.manifest.displayName}</Text>
		</StyledPatternItem>
	);
}

PatternItem.propTypes = {
	pattern: t.any
};

const StyledToggle = styled.div`
	position: relative;
	z-index: 1;
	flex: 1 1 auto;
	min-height: 30px;
`;

function Toggle(props) {
	return (
		<StyledToggle>
			<StyledToggleHead name={props.name} enabled={props.enabled}>
				{props.head}
			</StyledToggleHead>
			{props.enabled &&
				<StyledToggleBody>
					{props.children}
				</StyledToggleBody>
			}
		</StyledToggle>
	);
}

Toggle.propTypes = {
	children: t.any,
	enabled: t.bool,
	head: t.any,
	name: t.string
};

function has(val) {
	return Array.isArray(val) && val.length > 0;
}

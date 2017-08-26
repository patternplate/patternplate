import React from 'react';
import PropTypes from 'prop-types';
// import Flag from 'flag';
import NavigationItem from 'navigation-item';

export default function NavigationTree(props) {
	return (
		<div className={props.className}>
			{props.children}
			{(props.data || []).filter(item => typeof item.manifest === 'object').map(item => {
				const hidden = (item.manifest.options || {}).hidden || false;
				const icon = item.manifest.options.icon || item.type;
				const iconActive = item.manifest.options.iconActive || icon;

				return (
					<NavigationItem
						key={item.id}
						active={item.active}
						hidden={hidden}
						href={item.href}
						id={item.id}/*
						meta={item.warnings.map(warning => {
							switch (warning.type) {
								case 'flag':
								default:
									return <Flag key={warning.value} title={warning.message}>{warning.value}</Flag>;
							}
						})}*/
						name={item.manifest.displayName}
						onScrollRequest={props.onScrollRequest}
						prefix={props.prefix}
						symbol={icon}
						symbolActive={iconActive}
						type={item.type}
					>
						{
							item.type === 'folder' &&
								<NavigationTree
									active={props.active}
									data={item.children}
									id={item.id}
									onScrollRequest={props.onScrollRequest}
									prefix={item.prefix}
								/>
						}
					</NavigationItem>
				);
			})}
		</div>
	);
}

NavigationTree.propTypes = {
	active: PropTypes.string.isRequired,
	className: PropTypes.string,
	children: PropTypes.any,
	data: PropTypes.array.isRequired,
	id: PropTypes.string.isRequired,
	onScrollRequest: PropTypes.func,
	prefix: PropTypes.string.isRequired
};

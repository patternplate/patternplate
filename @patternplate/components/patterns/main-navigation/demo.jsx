import React from 'react';
import styled from 'styled-components';
import Pattern from 'Pattern';
import Themer from 'demo-themer';
import Button from 'button';

const navigation = {
	children: [
		{
			contents: '',
			name: 'atoms',
			active: true,
			manifest: {
				version: '1.0.0',
				flag: 'alpha',
				options: {},
				name: 'atoms',
				displayName: 'atoms'
			},
			id: 'atoms',
			path: [
				'atoms'
			],
			href: '/atoms',
			type: 'folder',
			children: [
				{
					contents: '',
					name: 'icon',
					active: true,
					manifest: {
						version: '1.0.0',
						flag: 'alpha',
						options: {},
						name: 'icon',
						displayName: 'Icon'
					},
					id: 'atoms/icon',
					path: [
						'atoms',
						'icon'
					],
					href: '/atoms/icon',
					type: 'pattern',
					dependents: [
						'molecules/button',
						'molecules/main-logo',
						'molecules/navigation-item'
					],
					envs: [
						'dark',
						'index'
					]
				}
			]
		},
		{
			contents: '',
			name: 'molecules',
			manifest: {
				version: '1.0.0',
				flag: 'alpha',
				options: {},
				name: 'molecules',
				displayName: 'molecules'
			},
			id: 'molecules',
			path: [
				'molecules'
			],
			href: '/molecules',
			type: 'folder',
			children: []
		},
		{
			contents: '',
			name: 'organisms',
			manifest: {
				version: '1.0.0',
				flag: 'alpha',
				options: {},
				name: 'organisms',
				displayName: 'organisms'
			},
			id: 'organisms',
			path: [
				'organisms'
			],
			href: '/organisms',
			type: 'folder',
			children: []
		},
		{
			contents: '',
			name: 'pages',
			manifest: {
				version: '1.0.0',
				flag: 'alpha',
				options: {},
				name: 'pages',
				displayName: 'pages'
			},
			id: 'pages',
			path: [
				'pages'
			],
			href: '/pages',
			type: 'folder',
			children: []
		},
		{
			contents: '',
			name: 'templates',
			manifest: {
				version: '1.0.0',
				flag: 'alpha',
				options: {},
				name: 'templates',
				displayName: 'templates'
			},
			id: 'templates',
			path: [
				'templates'
			],
			href: '/templates',
			type: 'folder',
			children: []
		}
	]
};

const docs = {
	children: [
		{
			contents: '',
			name: 'documentation',
			manifest: {
				version: '1.0.0',
				flag: 'alpha',
				options: {
					icon: 'documentation'
				},
				name: 'documentation',
				displayName: 'Documentation'
			},
			id: 'documentation',
			path: [
				'documentation'
			],
			href: '/documentation'
		}
	]
};

const Dummy = styled.div`
	width: 30px;
	height: 30px;
	background-color: #ccc;
`;

const tools = ['react', 'search', 'reload'];
const toolComponents = tools.map(
	(item, index) => (
		<Button
			key={index}
			type="link"
			symbol={item}
			frameless
			transparent
		/>
	)
);

export default function MainNavigationDemo() {
	return (
		<Themer>
			<Pattern
				docs={docs}
				navigation={navigation}
				tools={toolComponents}
				applicationTitle="Patternplate"
			/>
		</Themer>
	);
}

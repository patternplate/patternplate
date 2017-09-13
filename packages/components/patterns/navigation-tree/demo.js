const React = require('react');
const styled = require('styled-components').default;
const Pattern = require('Pattern');

const data = [
  {
    contents: '',
    name: 'atoms',
    manifest: {
      version: '1.0.0',
      flag: 'alpha',
      options: {},
      name: 'atoms',
      displayName: 'atoms'
    },
    id: 'atoms',
    path: ['atoms'],
    href: '/atoms',
    type: 'folder',
    children: [
      {
        contents: '',
        name: 'icon',
        manifest: {
          version: '1.0.0',
          flag: 'alpha',
          options: {},
          name: 'icon',
          displayName: 'Icon'
        },
        id: 'atoms/icon',
        path: ['atoms', 'icon'],
        href: '/atoms/icon',
        type: 'pattern',
        dependents: [
          'molecules/button',
          'molecules/main-logo',
          'molecules/navigation-item'
        ],
        envs: ['dark', 'index']
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
    path: ['molecules'],
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
    path: ['organisms'],
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
    path: ['pages'],
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
    path: ['templates'],
    href: '/templates',
    type: 'folder',
    children: []
  }
];

module.exports = function NavigationTreeDemo() {
  return (
	<StyledDemoContainer>
		<Pattern data={data} id="" active="atoms" prefix=""/>
	</StyledDemoContainer>
  );
};

const StyledDemoContainer = styled.div`max-width: 320px;`;

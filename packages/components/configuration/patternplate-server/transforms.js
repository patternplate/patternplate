module.exports = {
  'babel': {
    inFormat: 'jsx',
    outFormat: 'js',
    opts: {
      presets: [
        ['env', {
          targets: {
            node: '4',
            browsers: ['last 2 versions', 'IE 10']
          }
        }],
        'react'
      ]
    }
  },
  'browserify': {
    inFormat: 'js',
    outFormat: 'js',
    vendors: ['react', 'react-dom', 'vis']
  },
  'react-mount': {
    inFormat: 'js',
    outFormat: 'js'
  },
  'react-to-markup': {
    inFormat: 'js',
    outFormat: 'html'
  },
  'styled-components': {
    inFormat: 'html',
    outFormat: 'html'
  }
};

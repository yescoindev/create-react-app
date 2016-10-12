function getPostCSSConfig() {
  return [
    require('postcss-import'),
    require('postcss-global-theme')({
      themes: ['dark', 'dark-2', 'finance', 'green'] // TODO: this should be set in css file
    }),
    require('postcss-simple-vars'),
    require('postcss-calc'),
    require('postcss-short'), // TODO: deprecate this
    require('autoprefixer')({
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ]
    }),
  ];
}

module.exports = getPostCSSConfig;

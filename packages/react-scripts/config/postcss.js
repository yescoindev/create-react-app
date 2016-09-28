function getPostCSSConfig() {
  return [
    require('postcss-import'),
    require('postcss-global-theme')({
      // TODO: this should be set in css file
      themes: ['dark', 'dark-2']
    }),
    require('postcss-simple-vars'),
    require('postcss-calc'),
    require('postcss-short'),
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

function getPostCSSConfig() {
  return [
    require('postcss-import'),
    require('postcss-global-theme')({
      themes: [
        'dark', 'dark-2', 'finance', 'green', 'yellow', 'purple',
      ]
    }),
    require('postcss-simple-vars'),
    require('postcss-calc'),
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

const THEMES_BY_VENDOR = {
  quoine: ['dark', 'dark-2', 'finance', 'green'],
  qryptos: ['yellow'],
  zabit: ['purple'],
  traders: ['traders-dark', 'traders-light'],
};

function getPostCSSConfig() {
  return [
    require('postcss-import'),
    require('postcss-global-theme')({
      themes: THEMES_BY_VENDOR[process.env.REACT_APP_VENDOR],
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

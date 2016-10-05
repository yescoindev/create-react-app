// test 2

var params = JSON.stringify({
  importLoaders: 1,
  modules: true,
  // TODO: change REACT_APP_LOCAL_IDENT_NAME to something more generic
  // eg: CLASS_FORMAT
  localIdentName: process.env.REACT_APP_LOCAL_IDENT_NAME === 'full' ?
    '[path][name]---[local]' : '[hash:base64:8]',
  // disables autoprefixer in css-loader itself:
  // https://github.com/webpack/css-loader/issues/281
  // We already have it thanks to postcss. We only pass this flag in
  // production because "css" loader only enables autoprefixer-powered
  // removal of unnecessary prefixes when Uglify plugin is enabled.
  // Webpack 1.x uses Uglify plugin as a signal to minify *all* the assets
  // including CSS. This is confusing and will be removed in Webpack 2:
  // https://github.com/webpack/webpack/issues/283
  // TODO: maybe we don't need this in development. Not sure if it cause problem
  autoprefixer: false
});

module.exports = params;

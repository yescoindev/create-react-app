{
  "extends": "airbnb",
  "env": {
    "browser": true
  },
  "rules": {
    // temporary disable these rules to allow custom webpack config in
    // "resolve". TODO: use webpack resolver properly
    "import/no-extraneous-dependencies": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0
  }
}

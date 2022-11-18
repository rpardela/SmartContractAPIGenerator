module.exports = {
  'env': {
    'browser': true,
    'commonjs': true,
    'es2021': true,
    'es6': true,
    'jquery': true,
    'node': true,
  },
  'extends': ['eslint:recommended'],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'rules': {
    "no-case-declarations": ["warn"],
    "no-control-regex": ["warn"],
    "no-useless-escape": ["warn"],
    "no-unused-vars": ["warn"],
  }
};

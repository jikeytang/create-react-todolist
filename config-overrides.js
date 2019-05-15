/* config-overrides.js */
const { injectBabelPlugin } = require('react-app-rewired')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = function override(config, env) {
  //配置别名
  config.resolve.alias = {
    '@': resolve('src')
  }

  return config
};
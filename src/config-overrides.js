const merge = require('webpack-merge')

module.exports = function override(config, env) {
  let mergedConfig = merge(config, {
    resolve: {
      alias: {
        shared: `${__dirname}/shared`,
        assets: `${__dirname}/assets`,
      }
    }
  })
  return mergedConfig
}

// https://cli.vuejs.org/zh/config/
const HelloWorldPlugin = require('./bin/test')

module.exports = {
  devServer: {
    port: 8080,

  },
  productionSourceMap: false,
  configureWebpack: {
    plugins: [new HelloWorldPlugin({options: true})]
  }
}
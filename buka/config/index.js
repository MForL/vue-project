'use strict'
// Template version: 1.2.0
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
        // http://m.buka.cn/api/v3/home?page=1
        // http://m.buka.cn/ranking/get_data
        // http://m.buka.cn/m/216443
        // http://m.buka.cn/search/ajax_tips_v2
      '/api': { //路径的匹配规则，以/v4开头的路径自动代理到目标服务器
        target: 'http://m.buka.cn', //目标服务器
        　　　　changeOrigin: true, //开启代理
        　　　　pathRewrite: { '^/api': '/api' } //这里重写路径/run就代理到对应地址
        　　
      },
      '/search': { //路径的匹配规则，以/v4开头的路径自动代理到目标服务器
        target: 'http://m.buka.cn', //目标服务器
        　　　　changeOrigin: true, //开启代理
        　　　　pathRewrite: { '^/search': '/search' } //这里重写路径/run就代理到对应地址
        　　
      },
      '/ranking': { //路径的匹配规则，以/v4开头的路径自动代理到目标服务器
        target: 'http://m.buka.cn', //目标服务器
        　　　　changeOrigin: true, //开启代理
        　　　　pathRewrite: { '^/ranking': '/ranking' } //这里重写路径/run就代理到对应地址
        　　
      },
      '/m': { //路径的匹配规则，以/v4开头的路径自动代理到目标服务器
        target: 'http://m.buka.cn', //目标服务器
        　　　　changeOrigin: true, //开启代理
        　　　　pathRewrite: { '^/m': '/m' } //这里重写路径/run就代理到对应地址
        　　
      },
      '/ap': {
        target: 'http://localhost:8088/ap/',
        changeOrigin: true,
        pathRewrite: {
          '^/ap': ''
            }
        }
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.HOST, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-

    // Use Eslint Loader?
    // If true, your code will be linted during bundling and
    // linting errors and warings will be shown in the console.
    useEslint: true,
    // If true, eslint errors and warings will also be shown in the error overlay
    // in the browser.
    showEslintErrorsInOverlay: false,

    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * SourceMap
     */
    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}

'use strict';

module.exports = {

  build: {
    server: {
      proxies: [
        {
          context: '/api',
          host: 'api.github.com',
          port: 443,
          https: true,
          changeOrigin: true,
          rewrite: {
            '^/api': ''
          }
        }
      ]
    }
  },

  vendor: {
    files: {
      js: [
        'angular/angular.js',
        'angular-animate/angular-animate.js',
        'angular-bootstrap/ui-bootstrap-tpls.js',
        'angular-growl/build/angular-growl.js',
        'angular-ui-router/release/angular-ui-router.js',
        'angular-translate/angular-translate.js',
        'angular-translate-loader-static-files/angular-translate-loader-static-files.js',
        'angular-translate-handler-log/angular-translate-handler-log.js',
        'lodash/dist/lodash.compat.js'
      ],
      js_mock: [
        'angular-mocks/angular-mocks.js'
      ],
      js_spec: [
        //'lodash/dist/lodash.compat.js'
      ],
      js_e2e: [
        //'lodash/dist/lodash.compat.js'
      ],
      css: [
        'animate.css/animate.css',
        'angular-growl/build/angular-growl.min.css'
      ],
      assets: [
        'font-awesome/fonts/*.*',
        'json3/lib/json3.min.js',
        'respond/dest/respond.min.js',
        'console-polyfill/index.js',
        'es5-shim/es5-shim.min.js'
      ]
    }
  }

};

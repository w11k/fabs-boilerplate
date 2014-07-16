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
    },
    spec: {
      browsers: ['PhantomJS']
    },
    e2e: {
      browsers: ['PhantomJS']
    }
  },

  vendor: {
    files: {
      js: [
      ],
      js_mock: [
        'angular-mocks/angular-mocks.js'
      ],
      js_spec: [
      ],
      js_e2e: [
      ],
      css: [
        'angular-growl/build/angular-growl.min.css'
      ],
      assets: [
        'json3/lib/json3.min.js',
        'respond/dest/respond.min.js',
        'console-polyfill/index.js',
        'es5-shim/es5-shim.min.js'
      ]
    }
  }

};

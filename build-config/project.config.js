'use strict';

module.exports = {

  build: {
    sass: {
      enabled: false
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
        'angular/angular.js'
      ],
      js_mock: [
        'angular-mocks/angular-mocks.js'
      ],
      js_spec: [
      ],
      js_e2e: [
      ],
      css: [
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

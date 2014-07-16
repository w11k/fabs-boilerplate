'use strict';

angular.module('app.mock', ['ngMockE2E', 'app']);

angular.module('app.mock').run(function ($httpBackend) {

  function escapeForRegExp(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
  }

  var apiUrlPrefix = '/api/';

  // pass through all gets to a url not starting with our api prefix
  var apiUrlRegExp = new RegExp('^(?!' + escapeForRegExp(apiUrlPrefix) + ').+$');
  $httpBackend.whenGET(apiUrlRegExp).passThrough();
});

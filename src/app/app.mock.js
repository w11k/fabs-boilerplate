'use strict';

angular.module('app.mock', ['ngMockE2E', 'app']);

angular.module('app.mock').config(function ($translateProvider) {
  $translateProvider.useMissingTranslationHandlerLog();
});

/*
 * passThrough is present for ngMockE2E.$httpBackend, not for ngMock.$httpBackend (unit tests)
 * so call it only for the app.mock module, which has a dependency to ngMockE2E
 */
angular.module('app.mock').run(function ($httpBackend) {
  // pass through all calls to load assets
  $httpBackend.whenGET(/^assets\/(.*)/).passThrough();
  // pass through all calls to load templates not included in js code
  $httpBackend.whenGET(/(.*).html$/).passThrough();
  // pass through all calls to load translations not included in js code
  $httpBackend.whenGET(/(.*)translations\/(.*).json$/).passThrough();
});

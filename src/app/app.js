'use strict';

angular.module('app', [
  'ngAnimate',
  'ui.router',
  'angular-growl',
  'pascalprecht.translate',
  'app.translations',
  'app.templates',
  'fabs.boilerplate.route.home'
]);

angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
});

angular.module('app').config(function ($translateProvider, growlProvider) {
  /**
   * Whenever the path to a file is calculated and not hard coded, we have to use manual cache busting!
   */
  $translateProvider.useStaticFilesLoader({
    prefix: '@@cacheBustingDir/translations/',
    suffix: '.json'
  });

  $translateProvider.preferredLanguage('de');
  $translateProvider.fallbackLanguage(['de']);

  growlProvider.globalTimeToLive(3000);
});

angular.module('app').run(function (translationService) {
  translationService.applyBrowserLanguage();
});

angular.module('app').factory('translationService', function ($translate, $window) {

  return {
    loadFallbackLanguage: function () {
      // returns a promise
      return $translate.uses($translate.fallbackLanguage());
    },
    applyBrowserLanguage: function () {
      var language = $window.navigator.language || $window.navigator.userLanguage;
      language = language.substring(0, 2);

      // returns a promise
      return $translate.uses(language);
    }
  };

});

angular.module('app').controller('AppCtrl', function ($scope) {

  $scope.$on('$stateChangeSuccess', function (event, toState) {
    if (angular.isDefined(toState.data) && angular.isDefined(toState.data.pageTitle)) {
      $scope.pageTitle = toState.data.pageTitle + ' | fabs boilerplate';
    }
  });

});


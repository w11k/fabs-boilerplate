'use strict';

angular.module('app', [
  'ngAnimate',
  'ui.router',
  'angular-growl',
  'app.templates',
  'fabs.boilerplate.route.home'
]);

angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
});

angular.module('app').config(function ($translateProvider, growlProvider) {
  growlProvider.globalTimeToLive(3000);
});

angular.module('app').controller('AppCtrl', function ($scope) {

  $scope.$on('$stateChangeSuccess', function (event, toState) {
    if (angular.isDefined(toState.data) && angular.isDefined(toState.data.pageTitle)) {
      $scope.pageTitle = toState.data.pageTitle + ' | fabs boilerplate';
    }
  });

});

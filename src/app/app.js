'use strict';

angular.module('app', [
  'ngAnimate',
  'ui.router',
  'app.templates',
  'fabs.boilerplate.route.home'
]);

angular.module('app').config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');
});

angular.module('app').controller('AppCtrl', function ($scope) {

  $scope.$on('$stateChangeSuccess', function (event, toState) {
    if (angular.isDefined(toState.data) && angular.isDefined(toState.data.pageTitle)) {
      $scope.pageTitle = toState.data.pageTitle + ' | fabs boilerplate';
    }
  });

});

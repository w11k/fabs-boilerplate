'use strict';

angular.module('fabs.boilerplate.route.home', [
  'ui.router',
  'fabs.boilerplate.core'
]);

angular.module('fabs.boilerplate.route.home').config(function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/home',
    views: {
      main: {
        controller: 'HomeCtrl',
        templateUrl: 'route/home/home.html'
      }
    },
    data: { pageTitle: 'Home' }
  });
});

angular.module('fabs.boilerplate.route.home').controller('HomeCtrl', function ($scope, w11kService) {


  $scope.user = {
    name: 'World'
  };

  w11kService.get().then(function (w11k) {
    $scope.w11k = w11k;
  });

});

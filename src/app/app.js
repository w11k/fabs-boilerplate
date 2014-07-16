'use strict';

angular.module('app', [
  'app.templates'
]);

angular.module('app').controller('AppCtrl', function ($scope) {
  $scope.welcomeMessage = 'Hello fabs!';
});

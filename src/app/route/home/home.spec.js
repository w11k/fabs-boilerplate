'use strict';

describe('home section', function () {

  beforeEach(module('fabs.boilerplate.route.home'));

  describe('home controller', function () {

    var $scope;

    beforeEach(inject(function ($controller, $rootScope) {
      $scope = $rootScope.$new();
      $controller('HomeCtrl', { $scope: $scope });
    }));

    it('should hold a name to show', inject(function () {
      expect($scope.user).toBeDefined();
      expect($scope.user.name).toBeDefined();
    }));
  });

});

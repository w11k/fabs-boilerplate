'use strict';

describe('App module', function () {

  beforeEach(module('app'));

  describe('App controller', function () {
    var $scope;

    beforeEach(inject(function ($controller, $rootScope) {
      $scope = $rootScope.$new();
      $controller('AppCtrl', { $scope: $scope });
    }));

    it('should be able to be instantiated', inject(function () {
      expect($scope).toBeDefined();
    }));
  });
});

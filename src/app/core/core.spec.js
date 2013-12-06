'use strict';

describe('core module', function () {

  beforeEach(module('fabs.boilerplate.core'));

  beforeEach(function () {
    this.addMatchers({
      toBeAFunction: function () {
        return typeof this.actual === 'function';
      }
    });
  });

  describe('xy service', function () {

    it('should use http to query xy data from server', inject(function (w11kService, $httpBackend, w11kMockData) {
      $httpBackend.expectGET('/api/orgs/w11k');

      expect(w11kService.get()).toBeDefined();

      w11kService.get().then(function (result) {
        expect(result).toBe(w11kMockData);
      });

      // makes the test sync again
      $httpBackend.flush();
    }));

  });


});

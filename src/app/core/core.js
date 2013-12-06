'use strict';

angular.module('fabs.boilerplate.core', [
]);

angular.module('fabs.boilerplate.core').factory('w11kService', function ($http) {
  return {
    get: function () {
      return $http.get('/api/orgs/w11k').then(function (response) {
        return response.data;
      });
    }
  };
});

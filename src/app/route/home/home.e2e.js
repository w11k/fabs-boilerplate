'use strict';

describe('Home route', function () {
  beforeEach(function () {
    browser().navigateTo('/');
  });

  describe('bindings and translations example', function () {

    it('should print welcome message with name', function () {
      element('.navbar a').click();
      expect(element('div.well.bindingAndTranslate p').text()).toContain(', World');
    });

  });

});

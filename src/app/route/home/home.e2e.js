'use strict';

// Page Object Pattern to separate knowledge about page structure and test code
var HomeRoute = function () {
  this.userName = element(by.model('user.name'));
  this.welcomeMessage = element(by.css('p.message'));

  this.apiData = element(by.css('div.well.api > p > span.data'));

  this.get = function () {
    browser.get('/');
  };
};

describe('Home route', function () {
  var page = new HomeRoute();

  beforeEach(function () {
    page.get();
  });

  describe('bindings and translations example', function () {
    it('should print welcome message with name', function () {
      page.userName.clear();
      page.userName.sendKeys('Test');
      expect(page.welcomeMessage.getText()).toContain(', Test');
    });

  });

  describe('api example', function () {
    it('should print some data about w11k', function () {
      expect(page.apiData.getText()).toEqual('Weigle Wilczek GmbH, Esslingen, Germany');
    });

  });

});

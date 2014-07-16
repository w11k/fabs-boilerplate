'use strict';

// Page Object Pattern to separate knowledge about page structure and test code
var IndexPage = function () {
  this.headline = element(by.tagName('h1'));

  this.get = function () {
    browser.get('/');
  };
};

describe('Index page', function () {
  var page = new IndexPage();

  beforeEach(function () {
    page.get();
  });

  it('should have a headline', function () {
    expect(page.headline.getText()).toContain('fabs');
  });

});

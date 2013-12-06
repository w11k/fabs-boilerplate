'use strict';

var grunt = require('grunt');
var fabs = require('fabs');
var path = require('path');

module.exports = function () {
  // get absolute path to folder of project.config.js
  var configFolder = path.resolve('./build-config');

  var config = fabs.getGruntConfig(configFolder);
  grunt.initConfig(config);
};

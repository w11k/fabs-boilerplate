'use strict';

var grunt = require('grunt');
var fabs = require('fabs');
var path = require('path');
var lodash = require('lodash');

module.exports = function () {
  // get absolute path to folder of project.config.js
  var configFolder = path.resolve('./build-config');
  var fabsConfig = fabs.getGruntConfig(configFolder);

  var customConfig = {
    bump: {
      options: {
        commit: false
      }
    }
  };

  var config = lodash.merge({}, fabsConfig, customConfig);
  grunt.initConfig(config);
};

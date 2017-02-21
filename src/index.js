var angular = require('angular');

require('angular-ui-router');
require('angular-sanitize');
require('angular-material');
require('angular-messages');
require('angular-aria');

var routesConfig = require('./config/routes');
var themeConfig = require('./config/theme');
var postsInCollection = require('./app/components/collections/collection');
var singlePost = require('./app/components/single/single');

// Webpack deals with the SASS
require('./scss/index.scss');

angular.module('app', ['ui.router', 'ngSanitize', 'ngMaterial', 'ngAria', 'ngMessages'])
  .config(routesConfig)
  .config(themeConfig)
  .component('app', postsInCollection)
  .component('postsInCollection', postsInCollection)
  .component('singlePost', singlePost);

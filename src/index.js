var angular = require('angular');

require('angular-ui-router');
require('angular-sanitize');
require('angular-material');
require('angular-messages');
require('angular-aria');

var routesConfig = require('./routes');
var postsInCategory = require('./app/components/category/posts-in-category');
var singlePost = require('./app/components/single/single');

// Webpack deals with the SASS
require('./scss/index.scss');

angular.module('app', ['ui.router', 'ngSanitize', 'ngMaterial', 'ngAria'])
  .config(routesConfig)
  .component('app', postsInCategory)
  .component('postsInCategory', postsInCategory)
  .component('singlePost', singlePost);

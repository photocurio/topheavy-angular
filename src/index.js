var angular = require('angular');

require('angular-ui-router');
require('angular-sanitize');
require('angular-material');
require('angular-messages');
require('angular-aria');

var routesConfig = require('./config/routes');
var themeConfig = require('./config/theme');
var postsInCategory = require('./app/components/collections/category');
var postsInTag = require('./app/components/collections/tag');
var singlePost = require('./app/components/single/single');

// Webpack deals with the SASS
require('./scss/index.scss');

angular.module('app', ['ui.router', 'ngSanitize', 'ngMaterial', 'ngAria', 'ngMessages'])
  .config(routesConfig)
  .config(themeConfig)
  .component('umbrella', backgroundElement)
  .component('app', postsInCategory)
  .component('postsInCategory', postsInCategory)
  .component('postsInTag', postsInTag)
  .component('singlePost', singlePost);

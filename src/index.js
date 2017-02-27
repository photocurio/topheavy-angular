var angular = require('angular');

require('angular-ui-router');
require('angular-sanitize');
require('angular-material');
require('angular-messages');
require('angular-aria');

var routesConfig = require('./config/routes');
var themeConfig = require('./config/theme');
var collectionPosts = require('./app/components/collection/collection');
var singlePost = require('./app/components/single/single');
var pageComponent = require('./app/components/page/page');

// Webpack deals with the SASS
require('./scss/index.scss');

angular.module('app', ['ui.router', 'ngSanitize', 'ngMaterial', 'ngAria', 'ngMessages'])
  .config(routesConfig)
  .config(themeConfig)
  .component('home', collectionPosts)
  .component('collectionPosts', collectionPosts)
  .component('page', pageComponent)
  .component('singlePost', singlePost);

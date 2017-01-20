var angular = require('angular');

require('angular-sanitize');

require('angular-ui-router');

var routesConfig = require('./routes');
var postsInCategory = require('./app/components/category/posts-in-category');
var singlePost = require('./app/components/single/single');

// Webpack deals with the SASS
require('./scss/index.scss');

angular.module('app', ['ui.router', 'ngSanitize'])
  .config(routesConfig)
  .component('app', postsInCategory)
  .component('postsInCategory', postsInCategory)
  .component('singlePost', singlePost);

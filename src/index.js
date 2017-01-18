var angular = require('angular');

require('angular-sanitize');

require('angular-ui-router');

var routesConfig = require('./routes');

var wpApiFactory = require('./app/factory/wp-api-factory');

var main   = require('./app/components/main/main');
var singlePost = require('./app/components/single/single');
var header = require('./app/components/header/header');
var title  = require('./app/components/title/title');
var footer = require('./app/components/footer/footer');

// Webpack deals with this
require('./scss/index.scss');

angular.module('app', ['ui.router', 'ngSanitize'])

  .config(routesConfig)

  // Get JSON data
  .factory('wpApiFactory', wpApiFactory)

  // .controller('mainController', MainController)
  .component('app', main)
  .component('singlePost', singlePost)
  .component('fountainHeader', header)
  .component('fountainTitle', title)
  .component('fountainFooter', footer);

var angular = require('angular');
require('angular-ui-router');
require('angular-sanitize');
require('angular-animate');
require('bootstrap-loader');
require('angular-ui-bootstrap');

var routesConfig = require('./app/config/routes');
var siteHeader = require('./app/components/header/header');
var navbar = require('./app/components/navbar/navbar');
var siteFooter = require('./app/components/footer/footer');
var collectionPosts = require('./app/components/collection/collection');
var singlePost = require('./app/components/single/single');
var pageComponent = require('./app/components/page/page');

// Webpack deals with the SASS
// require('./scss/index.scss');

angular.module('app', ['ui.router', 'ngSanitize', 'ngAnimate', 'ui.bootstrap'])
  .config(routesConfig)
  .component('siteHeader', siteHeader)
  .component('navbar', navbar)
  .component('siteFooter', siteFooter)
  .component('home', collectionPosts)
  .component('collectionPosts', collectionPosts)
  .component('page', pageComponent)
  .component('singlePost', singlePost);

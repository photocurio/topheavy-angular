var angular = require('angular');
require('angular-ui-router');
require('angular-sanitize');
require('bootstrap-loader');
require('angular-animate');
require('angular-ui-bootstrap');

var routesConfig = require(     './routes.config');
var WPAPI = require(            './services/wpapi.factory');
var Prism = require(            './services/highlight.factory');
var siteHeader = require(       './app/components/header/header');
var navbar = require(           './app/components/navbar/navbar');
var siteFooter = require(       './app/components/footer/footer');
var collectionPosts = require(  './app/components/collection/collection');
var singlePost = require(       './app/components/single/single');
var paginationLinks = require(  './app/components/pagination/pagination');
var comments = require(         './app/components/comments/comments');
var replies = require(          './app/components/replies/replies');
var postMeta = require(         './app/components/meta/meta');
var pageComponent = require(    './app/components/page/page');

angular.module('app', ['ui.router', 'ngSanitize', 'ngAnimate', 'ui.bootstrap'])
  .config(routesConfig)
  .factory('Prism', Prism)
  .factory('WPAPI', WPAPI)
  .component('siteHeader', siteHeader)
  .component('navbar', navbar)
  .component('siteFooter', siteFooter)
  .component('home', collectionPosts)
  .component('paginationLinks', paginationLinks)
  .component('comments', comments)
  .component('collectionPosts', collectionPosts)
  .component('postMeta', postMeta)
  .component('page', pageComponent)
  .component('singlePost', singlePost)
  .component('replies', replies);

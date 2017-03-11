module.exports = routesConfig;

var collectionResolve = require('../components/collection/collection-resolve');
var pageResolve = require('../components/page/page-resolve');
var singleReslove = require('../components/single/single-resolve');

/** @ngInject */
function routesConfig($locationProvider, $urlRouterProvider, $stateProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  $stateProvider.state('home', {
    url: '/?page',
    params: {
      page: {
        value: '1',
        squash: true
      }
    },
    component: 'collectionPosts',
    resolve: collectionResolve
  })
  .state('collection', {
    url: '/:taxonomy/:slug/?page',
    params: {
      page: {
        value: '1',
        squash: true
      }
    },
    component: 'collectionPosts',
    resolve: collectionResolve
  })
  .state('page', {
    url: '/:slug/',
    component: 'page',
    resolve: pageResolve
  })
  .state('single', {
    url: '/:year/:month/:slug/',
    component: 'singlePost',
    resolve: singleReslove
  });
}
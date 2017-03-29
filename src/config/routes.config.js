module.exports = routesConfig;

// each state has a Resolve Object that fetches the data
var collectionResolve = require('../app/components/collection/collection-resolve');
var pageResolve       = require('../app/components/page/page-resolve');
var singleResolve     = require('../app/components/single/single-resolve');

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
    resolve: singleResolve
  });
}

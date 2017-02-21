module.exports = routesConfig;

/** @ngInject */
function routesConfig($locationProvider, $urlRouterProvider, $stateProvider) {

  $locationProvider.html5Mode(true).hashPrefix('!');

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('app', {
    url: '/',
    component: 'postsInCollection'
  })
  .state('collection', {
    url: '/:taxonomy/:slug',
    component: 'postsInCollection'
  })
  .state('single', {
    url: '/:year/:month/:slug',
    component: 'singlePost'
  });
}

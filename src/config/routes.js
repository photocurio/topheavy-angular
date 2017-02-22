module.exports = routesConfig;

/** @ngInject */
function routesConfig($locationProvider, $urlRouterProvider, $stateProvider) {

  $locationProvider.html5Mode(true).hashPrefix('!');

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('app', {
    url: '/?page',
    params: {
      page: {
        value: '1',
        squash: true
      }
    },
    component: 'postsInCollection'
  })
  .state('collection', {
    url: '/:taxonomy/:slug?page',
    params: {
      page: {
        value: '1',
        squash: true
      }
    },
    component: 'postsInCollection'
  })
  .state('single', {
    url: '/:year/:month/:slug',
    component: 'singlePost'
  });
}

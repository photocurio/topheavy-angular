module.exports = routesConfig;

/** @ngInject */
function routesConfig($locationProvider, $urlRouterProvider, $stateProvider) {

  $locationProvider.html5Mode(true).hashPrefix('!');

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('app', {
    url: '/',
    component: 'postsInCategory'
  })
  .state('category', {
    url: '/category/:slug',
    component: 'postsInCategory'
  })
  .state('tag', {
    url: '/tag/:slug',
    component: 'postsInTag'
  })
  .state('single', {
    url: '/:year/:month/:slug',
    component: 'singlePost'
  });
}

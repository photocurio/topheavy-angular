// each state has a Resolve Object that fetches data
import collectionResolve  from '../app/components/collection/collection-resolve';
import pageResolve        from '../app/components/page/page-resolve';
import singleResolve      from '../app/components/single/single-resolve';

export default ($locationProvider, $urlRouterProvider, $stateProvider) => {
  'ngInject';
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
    component: 'posts',
    resolve: {
      collection: collectionResolve
    }
  })
  .state('collection', {
    url: '/:taxonomy/:slug/?page',
    params: {
      page: {
        value: '1',
        squash: true
      }
    },
    component: 'posts',
    resolve: {
      collection: collectionResolve
    }
  })
  .state('page', {
    url: '/:slug/',
    component: 'page',
    resolve: {
      page: pageResolve
    }
  })
  .state('single', {
    url: '/:year/:month/:slug/',
    component: 'singlePost',
    resolve: {
      single: singleResolve
    }
  });
};

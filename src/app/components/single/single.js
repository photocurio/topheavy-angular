var WPAPI = require('wpapi');

module.exports = {
  controller: singleController,
  template: require('./single.html')
};

/** @ngInject */
function singleController($stateParams, $scope, $rootScope, $element, $log) {

  $element.addClass('single-post');

  var SELF = this;

  var wp = new WPAPI({
    endpoint: 'http://topheavypilesofbooks.com/wp-json'
  });

  var fail = function(error) {
    $log.error(error);
  };

  var success = function(response){
    // the response will be an array with one post object
    SELF.post = response[0];
    // organize the data
    SELF.post.categories = SELF.post._embedded['wp:term'][0];
    SELF.post.tags = SELF.post._embedded['wp:term'][1];
    // delete unneeded data
    delete SELF.post._embedded;
    delete SELF.post._links;
    // apply the data to the scope

    // Highlight navbar if post is in certain categories
    if (SELF.post.categories.filter(function(cat){ return cat.slug === 'web-development'; }).length > 0) {
      $rootScope.currentNavItem = 'webdev';
    } else if (SELF.post.categories.filter(function(cat){ return cat.slug === 'books'; }).length > 0) {
      $rootScope.currentNavItem = 'books';
    } else {
      $rootScope.currentNavItem = 'home';
    }

    $scope.$apply();
  };

  wp.posts().param('slug', $stateParams.slug).embed().then(success, fail);
}

var WPAPI = require('wpapi');

module.exports = {
  controller: collectionController,
  template: require('./collection.html')
};

/** @ngInject */
function collectionController($stateParams, $scope, $filter, $log, $state) {
  var SELF = this;
  var wp = new WPAPI({
    endpoint: 'http://topheavypilesofbooks.com/wp-json'
  });

  // Pagination functions
  SELF.page = parseInt($stateParams.page) || 1;
  SELF.nextPage = function() {
    $state.go('.', {page: SELF.page + 1}, {notify: false});
  };
  SELF.previousPage = function() {
    $state.go('.', {page: SELF.page - 1}, {notify: false});
  };
  // success handler
  var success = function(response){
    // loop through the response to make any changes
    for (var i = 0; i < response.length; i ++) {
      // filter the date so it can be used by the router
      var postDate = response[i].date;
      response[i].year = $filter('date')(postDate, 'yyyy');
      response[i].month = $filter('date')(postDate, 'MM');
      response[i].categories = response[i]._embedded['wp:term'][0];
      response[i].tags = response[i]._embedded['wp:term'][1];
      response[i].featuredimage = response[i]._embedded['wp:featuredmedia'];
      delete response[i]._embedded;
      delete response[i]._links;
    }
    // after processing, add the response to the controller
    SELF.posts = response;
    // apply the data to scope
    $scope.$apply();
  };

  // error handler
  var fail = function(error) {
    $log.error(error);
  };

  // setup the query if the taxonomy slug is in the URL
  if ($stateParams.slug) {

    if ($stateParams.taxonomy && $stateParams.taxonomy === 'category') {
      // first use the slug to lookup the category ID
      wp.categories().slug($stateParams.slug).then(function(cats) {
        // then use the ID to get the posts
        return wp.posts().categories(cats[0].id).param('page', SELF.page).embed();
      }).then(success, fail);

    } else if ($stateParams.taxonomy && $stateParams.taxonomy === 'tag') {
      wp.tags().slug($stateParams.slug).then(function(cats) {
        return wp.posts().tags(cats[0].id).param('page', SELF.page).embed();
      }).then(success, fail);
    }
  } else {
    // if there is no taxonomy slug, get the default posts
    wp.posts().param('page', SELF.page).embed().then(success, fail);
  }
}

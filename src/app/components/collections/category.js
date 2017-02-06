var WPAPI = require('wpapi');

module.exports = {
  controller: categoryController,
  template: require('./collection.html')
};

/** @ngInject */
function categoryController($stateParams, $scope, $filter, $log) {

  var SELF = this;

  var wp = new WPAPI({
    endpoint: 'http://topheavypilesofbooks.com/wp-json'
  });

  // success handler
  var success = function(response){

    // loop through the response to make any changes
    for (var i = 0; i < response.length; i ++) {

      // filter the date so it can be used by the router
      var postDate = response[i].date;
      response[i].year = $filter('date')(postDate, 'yyyy');
      response[i].month = $filter('date')(postDate, 'MM');
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

  // if the slug is in the URL
  if ($stateParams.slug) {

    // first use the slug to lookup the category ID
    wp.categories().slug($stateParams.slug).then(function(cats) {

      // then use the ID to get the posts
      return wp.posts().categories(cats[0].id);
    }).then(success, fail);

  } else {

    // if there is no category slug, get the default posts
    wp.posts()
    .then(success, fail);
  }
}

var WPAPI = require('wpapi');

module.exports = {
  controller: categoryController,
  template: require('./category.html')
};

/** @ngInject */
function categoryController($stateParams, $scope, $filter, $log, $element) {
  $element.addClass('posts-in-category');
  var SELF = this;
  var slug = $stateParams.slug;
  var wp = new WPAPI({
    endpoint: 'http://topheavypilesofbooks.com/wp-json'
  });

  var success = function(response){

    // process and apply the data
    for (var i = 0; i < response.length; i ++) {
      var postDate = response[i].date;

      // Add a simple year and month to each post object.
      // They can be passed to the router when we need to
      // link the the single state for each post.
      // This allows 'permalinks' like WordPress has.
      response[i].year = $filter('date')(postDate, 'yyyy');
      response[i].month = $filter('date')(postDate, 'MM');
    }
    SELF.posts = response;
    $scope.$apply();
  };
  var fail = function(error) {
    // log errors
    $log.error(error);
  };

  // if the slug is in the URL
  if (slug) {

    // use the slug to lookup the category ID
    wp.categories().slug(slug)
    .then(function(cats) {
      var thisCatId = cats[0].id;

      // then use the ID to get the posts
      return wp.posts().categories(thisCatId);
    })
    .then(success, fail);
  } else {

    // if there is no category slug, get the default posts
    wp.posts()
    .then(success, fail);
  }
}

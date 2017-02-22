var WPAPI = require('wpapi');

module.exports = {
  controller: singleController,
  template: require('./single.html')
};

/** @ngInject */
function singleController($stateParams, $scope, $element, $log) {

  $element.addClass('single-post');

  var SELF = this;

  var slug = $stateParams.slug;

  var wp = new WPAPI({
    endpoint: 'http://topheavypilesofbooks.com/wp-json'
  });

  var fail = function(error) {
    $log.error(error);
  };

  var success = function(response){
    // process and apply the data
    // the response will be an array
    // with one post object
    SELF.post = response[0];

    // fetch the categories
    wp.categories().param('post', response[0].id).then(function(catResponse) {
      SELF.categories = catResponse;
    }, fail);

    // fetch the tags
    wp.tags().param('post', response[0].id).then(function(tagResponse) {
      SELF.tags = tagResponse;
      $scope.$apply();
    }, fail);

    // $scope.$apply();
  };

  wp.posts().param('slug', slug).then(success, fail);
}

var WPAPI = require('wpapi');

module.exports = {
  controller: singleController,
  template: require('./single.html')
};

/** @ngInject */
function singleController($stateParams, $scope, $element, $log) {

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
    SELF.post.categories = SELF.post._embedded['wp:term'][0];
    SELF.post.tags = SELF.post._embedded['wp:term'][1];

    // apply the data to the scope
    $scope.$apply();
  };

  wp.posts().param('slug', $stateParams.slug).embed().then(success, fail);
}

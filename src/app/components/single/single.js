var WPAPI = require('wpapi');

module.exports = {
  controller: singleController,
  template: require('./single.html')
};

/** @ngInject */
function singleController($stateParams, $scope, $element) {
  $element.addClass('single-post');
  var SELF = this;
  var slug = $stateParams.slug;
  var wp = new WPAPI({
    endpoint: 'http://topheavypilesofbooks.com/wp-json'
  });

  var success = function(response){

    // process and apply the data
    // the response will be an array
    // with one post object
    SELF.post = response[0];
    $scope.$apply();
  };

  var fail = function(error) {

    // log errors
    $log.error(error);
  };

  wp.posts().param('slug', slug).then(success, fail);
}

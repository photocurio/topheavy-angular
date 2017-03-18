module.exports = {
  single: singlePost
};

/** @ngInject */
function singlePost($stateParams, $log, $rootScope, WPAPI) {
  var wp = new WPAPI({
    endpoint: 'https://topheavypilesofbooks.com/topheavy/wp-json'
  });

  var fail = function (error) {
    $log.error(error);
  };

  var success = function (response) {
    // the response will be an array with one post object
    var post = response[0];
    // set document title
    $rootScope.title = post.title.rendered;
    // make Categories and Tags simpler
    post.categories = post._embedded['wp:term'][0];
    post.tags = post._embedded['wp:term'][1];
    return post;
  };
  $rootScope.totem = 'bicycle';
  return wp.posts().param('slug', $stateParams.slug).embed().then(success, fail);
}

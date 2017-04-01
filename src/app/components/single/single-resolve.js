export default ($stateParams, $log, $rootScope, WPAPI) => {
  'ngInject';
  const wp = new WPAPI({
    endpoint: 'https://topheavypilesofbooks.com/topheavy/wp-json'
  });

  const fail = error => $log.error(error);

  const success = response => {
    // the response will be an array with one post object
    const post = response[0];
    // set document title
    $rootScope.title = post.title.rendered;
    // make Categories and Tags simpler
    post.categories = post._embedded['wp:term'][0];
    post.tags = post._embedded['wp:term'][1];
    return post;
  };
  $rootScope.totem = 'bicycle';
  return wp.posts().param('slug', $stateParams.slug).embed().then(success, fail);
};

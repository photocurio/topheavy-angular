export default ($stateParams, $log, $rootScope, WPAPI) => {
  'ngInject';
  const wp = new WPAPI({
    endpoint: 'https://topheavypilesofbooks.com/topheavy/wp-json'
  });

  const fail = error => $log.error(error);

  const success = response => {
    // the response will be an array with one post object
    const page = response[0];
    if (page.slug === 'about-me') {
      $rootScope.totem = 'scooter';
    }
    // set document title
    $rootScope.title = page.title.rendered;
    return page;
  };
  return wp.pages().param('slug', $stateParams.slug).embed().then(success, fail);
};

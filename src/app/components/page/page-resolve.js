module.exports = {
  page: pageQuery
};

/** @ngInject */
function pageQuery($stateParams, $log, $rootScope, WPAPI) {
  var wp = new WPAPI({
    endpoint: 'http://topheavypilesofbooks.com/topheavy/wp-json'
  });

  var fail = function (error) {
    $log.error(error);
  };

  var success = function (response) {
    // the response will be an array with one post object
    var page = response[0];
    if (page.slug === 'about-me') {
      $rootScope.totem = 'scooter';
    }
    // set document title
    $rootScope.title = page.title.rendered;
    return page;
  };
  return wp.pages().param('slug', $stateParams.slug).embed().then(success, fail);
}

var WPAPI = require('wpapi');

module.exports = {
  page: pageQuery
};

/** @ngInject */
function pageQuery($stateParams, $log, $rootScope) {
  var wp = new WPAPI({
    endpoint: 'http://topheavypilesofbooks.com/wp-json'
  });

  var fail = function (error) {
    $log.error(error);
  };

  var success = function (response) {
    // the response will be an array with one post object
    var page = response[0];
    // set document title
    $rootScope.title = page.title.rendered;
    return page;
  };
  return wp.pages().param('slug', $stateParams.slug).embed().then(success, fail);
}

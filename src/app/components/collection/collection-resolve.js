var WPAPI = require('wpapi');

module.exports = {
  collection: collectionPosts
};

/** @ngInject */
function collectionPosts($stateParams, $log, $filter, $rootScope) {
  var page = parseInt($stateParams.page, 10) || 1;
  var slug = $stateParams.slug;
  var taxonomy = $stateParams.taxonomy;

  var wp = new WPAPI({
    endpoint: 'http://topheavypilesofbooks.com/wp-json'
  });

  // error handler
  var fail = function (error) {
    $log.error(error);
  };

  // success handler
  var success = function (response) {
    var posts = response;
    for (var i = 0; i < posts.length; i++) {
      // filter the date so it can be used by the router
      var postDate = posts[i].date;
      posts[i].year = $filter('date')(postDate, 'yyyy');
      posts[i].month = $filter('date')(postDate, 'MM');
      posts[i].categories = posts[i]._embedded['wp:term'][0];
      posts[i].tags = posts[i]._embedded['wp:term'][1];
      posts[i].featuredimage = posts[i]._embedded['wp:featuredmedia'];
      delete posts[i]._embedded;
      delete posts[i]._links;
    }
    return posts;
  };

  // setup the query if the taxonomy slug is in the URL
  if (taxonomy === 'category') {
    // first use the slug to lookup the category ID
    return wp.categories().slug(slug).then(function(cats) {
      // set document title on rootscope
      $rootScope.title = cats[0].name;
      // then use the ID to get the posts
      return wp.posts().categories(cats[0].id).perPage(12).param('page', page).embed();
    }).then(success, fail);
  } else if (taxonomy === 'tag') {
    return wp.tags().slug(slug).then(function(tags) {
      $rootScope.title = tags[0].name;
      return wp.posts().tags(tags[0].id).perPage(12).param('page', page).embed();
    }).then(success, fail);
  } else {
    $rootScope.title = 'topheavypilesofbooks';
    return wp.posts().param('page', page).perPage(12).embed().then(success, fail);
  }
};

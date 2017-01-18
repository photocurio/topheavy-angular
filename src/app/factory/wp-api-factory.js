'use strict';
var WPAPI = require('wpapi');

module.exports = PostsContent;

/** @ngInject */
function PostsContent($q, $log) {

  var deferred = $q.defer();

  var successCallback = function (response) {
    deferred.resolve(response);
  };

  var errorCallback = function (err) {
    $log.error(err);
  };

  var wp = new WPAPI({
    endpoint: 'http://topheavypilesofbooks.com/wp-json'
  });

  // id is the category id
  var getPostsByCategory = function (id) {
    wp.posts().param('category', id).then(successCallback, errorCallback);
    return deferred.promise;
  };

  // get the post by slug, not ID
  var getPost = function (slug) {
    wp.posts().param('slug', slug).then(successCallback, errorCallback);
    return deferred.promise;
  };

  return {
    getPost: getPost,
    getPostsByCategory: getPostsByCategory
  };
}

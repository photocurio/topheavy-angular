module.exports = {
  controller: commentformController,
  template: require('./commentform.html'),
  require: {
    post: '^^singlePost'
  },
  bindings: {
    comment: '<'
  }
};

/** @ngInject */
function commentformController($log, WPAPI) {
  var wp = new WPAPI({
    endpoint: 'https://topheavypilesofbooks.com/topheavy/wp-json'
  });

  var SELF = this;

  var commentSuccess = function(createComment) {
    $log.log('Your comment on the post "'
      + SELF.post.single.title.rendered
      + '" is awaiting moderation.');
  };

  var commentFail = function(error) {
    $log.log('Failed to create comment: ' + error);
  };

  SELF.$onInit = function() {
    SELF.submitted = false;
  };

  SELF.createComment = function(isValid) {
    SELF.submitted = true;
    if (isValid) {
      wp.comments()
      .create({
        post: SELF.post.single.id,
        author_email: SELF.comment.email,
        author_name: SELF.comment.author,
        content: SELF.comment.content,
      })
      .then(commentSuccess, commentFail);
      return false;
    } else {
      $log.log('the commentform didn\'t pass validation');
    }
  };
}

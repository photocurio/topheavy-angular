module.exports = {
  controller: commentformController,
  template: require('./comments.html'),
  require: {
    post: '^^singlePost'
  }
};

/** @ngInject */
function commentformController($log, $timeout, WPAPI) {
  var wp = new WPAPI({
    endpoint: 'https://topheavypilesofbooks.com/topheavy/wp-json'
  });

  var SELF = this;

  var commentSuccess = function(result) {
    if (result) {
      $timeout(function() {
        SELF.notification = {
          show: true,
          type: 'success',
          message: 'Your comment on the post <em>' +
            SELF.post.single.title.rendered +
            '</em> is now in the moderation queue.'
        };
        SELF.commentform.$setPristine();
        SELF.comment = null;
      }, 10);
    }
  };

  var commentFail = function(error) {
    $log.error('Failed to create comment: ' + angular.toJson(error));
  };

  SELF.$onInit = function() {
    SELF.notification = {
      show: false,
      type: '',
      message: ''
    };
  };

  SELF.createComment = function() {
    if (SELF.commentform.$valid) {
      wp.comments().create({
        post: SELF.post.single.id,
        author_email: SELF.commentform.email.$modelValue,
        author_name: SELF.commentform.author.$modelValue,
        content: SELF.commentform.content.$modelValue,
      }).then(commentSuccess, commentFail);
    } else {
      SELF.notification = {
        show: true,
        type: 'warning',
        message: 'The comment form didn\'t pass validation. Please try again.'
      };
    }
  };
}

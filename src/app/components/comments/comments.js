class commentformController {
  constructor($log, $timeout, WPAPI) {
    'ngInject';
    const wp = new WPAPI({
      endpoint: 'https://topheavypilesofbooks.com/topheavy/wp-json'
    });

    const commentSuccess = result => {
      if (result) {
        $timeout(() => {
          this.notification = {
            show: true,
            type: 'success',
            message: `Your comment on the post <em>
              ${this.post.single.title.rendered}
              </em> is now in the moderation queue.`
          };
          this.commentform.$setPristine();
          this.comment = null;
        }, 0);
      }
    };

    const commentFail = error => {
      const errorString = angular.toJson(error);
      $log.error(`Failed to create comment: ${errorString}`);
    };

    this.$onInit = () => {
      this.notification = {
        show: false,
        type: '',
        message: ''
      };
    };

    this.createComment = () => {
      if (this.commentform.$valid) {
        wp.comments().create({
          post: this.post.single.id,
          author_email: this.commentform.email.$modelValue,
          author_name: this.commentform.author.$modelValue,
          content: this.commentform.content.$modelValue
        }).then(commentSuccess, commentFail);
      } else {
        this.notification = {
          show: true,
          type: 'warning',
          message: `The comment form didn't pass validation. Please try again.`
        };
      }
    };
  }
}

export default {
  controller: commentformController,
  template: require('./comments.html'),
  require: {
    post: '^^singlePost'
  }
};

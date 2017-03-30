class repliesController {
  /** @ngInject */
  constructor($log) {
    this.$onInit = function() {
      this.replies = this.post.single._embedded.replies[0];
    };
  }
}

export const replies = {
  template: require('./replies.html'),
  controller: repliesController,
  require: {
    post: '^^singlePost'
  }
};

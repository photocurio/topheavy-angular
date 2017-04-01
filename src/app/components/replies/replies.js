class repliesController {
  constructor() {
    this.$onInit = function() {
      this.replies = this.post.single._embedded.replies[0];
    };
  }
}

export default {
  template: require('./replies.html'),
  controller: repliesController,
  require: {
    post: '^^singlePost'
  }
};

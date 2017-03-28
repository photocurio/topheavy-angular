module.exports = {
  template: require('./replies.html'),
  controller: repliesController,
  require: {
    post: '^^singlePost'
  }
};

/** @ngInject */
function repliesController($log){
  var SELF = this;
  SELF.$onInit = function() {
    SELF.replies = SELF.post.single._embedded.replies[0];
  };
}

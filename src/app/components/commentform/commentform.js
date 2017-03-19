module.exports = {
  controller: commentformController,
  template: require('./commentform.html'),
  bindings: {
  }
};

/** @ngInject */
function commentformController($element, $log) {
  var SELF = this;

  SELF.$onInit = function(){

  };

  SELF.$postLink = function() {
  };
}

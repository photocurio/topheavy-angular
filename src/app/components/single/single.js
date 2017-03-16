module.exports = {
  controller: singleController,
  template: require('./single.html'),
  bindings: {
    single: '<'
  }
};

/** @ngInject */
// function singleController($element, $timeout, $log) {
function singleController($element, $timeout, $log, Prism) {
  var SELF = this;

  SELF.$onInit = function(){
    $element.addClass('single-post');
  };

  SELF.$postLink = function() {
    $timeout(Prism.highlightAll, 0);
  };

}

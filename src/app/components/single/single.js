module.exports = {
  controller: singleController,
  template: require('./single.html'),
  bindings: {
    single: '<'
  }
};

/** @ngInject */
function singleController($element, $timeout, $log, $state, Prism) {
  var SELF = this;

  SELF.$onInit = function(){
    $element.addClass('single-post');
    SELF.stateName = $state.current.name;
  };

  SELF.$postLink = function() {
    $timeout(Prism.highlightAll, 0);
  };
}

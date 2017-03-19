module.exports = {
  controller: pageController,
  template: require('./page.html'),
  bindings: {
    page: '<'
  }
};

/** @ngInject */
function pageController($element, $state) {
  var SELF = this;
  SELF.$onInit = function(){
    $element.addClass('page');
    SELF.stateName = $state.current.name;
  };
}

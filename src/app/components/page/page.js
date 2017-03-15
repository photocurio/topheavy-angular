module.exports = {
  controller: pageController,
  template: require('./page.html'),
  bindings: {
    page: '<'
  }
};

/** @ngInject */
function pageController($element) {
  var SELF = this;
  SELF.$onInit = function(){
    $element.addClass('page');
  };
}

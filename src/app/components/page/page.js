module.exports = {
  controller: pageController,
  template: require('./page.html'),
  bindings: {
    page: '<'
  }
};

/** @ngInject */
function pageController($element) {
  $element.addClass('page');
}

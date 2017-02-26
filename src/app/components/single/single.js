module.exports = {
  controller: singleController,
  template: require('./single.html'),
  bindings: {
    single: '<'
  }
};

/** @ngInject */
function singleController($element) {
  $element.addClass('single-post');
}

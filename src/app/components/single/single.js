class singleController {
  /** @ngInject */
  constructor ($element, $timeout, $log, $state) {

    this.$onInit = () => {
      $element.addClass('single-post');
      this.stateName = $state.current.name;
    };

    this.$postLink = () => {
      $timeout(Prism.highlightAll, 0);
    };
  }
}

export const singlePost = {
  controller: singleController,
  template: require('./single.html'),
  bindings: {
    single: '<'
  }
};

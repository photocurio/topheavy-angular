
class pageController {
  /** @ngInject */
  constructor($element, $state) {
    this.$onInit = () => {
      $element.addClass('page');
      this.stateName = $state.current.name;
    };
  }
}

export const pageComponent = {
  controller: pageController,
  template: require('./page.html'),
  bindings: {
    page: '<'
  }
};

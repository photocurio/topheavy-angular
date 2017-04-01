
class pageController {
  constructor($element, $state) {
    'ngInject';
    this.$onInit = () => {
      $element.addClass('page');
      this.stateName = $state.current.name;
    };
  }
}

export default {
  controller: pageController,
  template: require('./page.html'),
  bindings: {
    page: '<'
  }
};

class collectionsController {
  constructor($state) {
    'ngInject';
    this.$onInit = () => {
      this.stateName = $state.current.name;
    };
  }
}

export default {
  controller: collectionsController,
  template: require('./collection.html'),
  bindings: {
    collection: '<'
  }
};

class collectionController {
  /** @ngInject */
  constructor($state) {
    this.$onInit = () => {
      this.stateName = $state.current.name;
    };
  }
}

export const collectionPosts = {
  controller: collectionController,
  template: require('./collection.html'),
  bindings: {
    collection: '<'
  }
};

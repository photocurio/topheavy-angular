module.exports = {
  controller: collectionController,
  template: require('./collection.html'),
  bindings: {
    collection: '<',
    totem: '<'
  }
};

/** @ngInject */
function collectionController($stateParams, $state) {

  var SELF = this;

  SELF.stateName = $state.current.name;

  // Pagination functions
  SELF.page = parseInt($stateParams.page, 10) || 10;

  SELF.nextPage = function() {
    $state.go('.', {page: SELF.page + 1}, {notify: false});
  };
  SELF.previousPage = function() {
    $state.go('.', {page: SELF.page - 1}, {notify: false});
  };
}

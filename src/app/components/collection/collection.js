module.exports = {
  controller: collectionController,
  template: require('./collection.html'),
  bindings: {
    collection: '<'
  }
};

/** @ngInject */
function collectionController($stateParams, $state) {
  var SELF = this;

  // Pagination functions
  SELF.page = parseInt($stateParams.page, 10) || 10;

  SELF.nextPage = function() {
    $state.go('.', {page: SELF.page + 1}, {notify: false});
  };
  SELF.previousPage = function() {
    $state.go('.', {page: SELF.page - 1}, {notify: false});
  };
}

module.exports = {
  controller: collectionController,
  template: require('./collection.html'),
  bindings: {
    collection: '<'
  }
};

/** @ngInject */
function collectionController($stateParams, $state) {

  var page = parseInt($stateParams.page, 10) || 10;
  var SELF = this;

  SELF.$onInit = function(){
    SELF.stateName = $state.current.name;
    SELF.page = page;
  };

  // Pagination functions
  SELF.nextPage = function() {
    $state.go('.', {page: page + 1}, {notify: false});
  };
  SELF.previousPage = function() {
    $state.go('.', {page: page - 1}, {notify: false});
  };
}

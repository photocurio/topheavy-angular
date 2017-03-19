module.exports = {
  controller: paginationController,
  template: require('./pagination.html'),
  bindings: {
    paging: '<'
  }
};

/** @ngInject */
function paginationController($stateParams, $state, $log) {

  var pageNum = parseInt($stateParams.page, 10) || 10;
  var SELF = this;

  SELF.$onInit = function(){
    SELF.pageNum = pageNum;
  };
  SELF.$postLink = function() {
    if (pageNum < SELF.paging.totalPages) {
      SELF.next = true;
    }
    if (pageNum > 1) {
      SELF.prev = true;
    }
  };

  // Pagination functions
  SELF.nextPage = function() {
    $state.go('.', {page: pageNum + 1}, {notify: false});
  };
  SELF.previousPage = function() {
    $state.go('.', {page: pageNum - 1}, {notify: false});
  };
}

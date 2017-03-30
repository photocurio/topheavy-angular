class paginationController {
  /** @ngInject */
  constructor($stateParams, $state, $log) {
    let pageNum = parseInt($stateParams.page, 10) || 10;

    this.$onInit = () => {
      this.pageNum = pageNum;
    };

    this.$postLink = () => {
      if (pageNum < this.paging.totalPages) {
        this.next = true;
      }
      if (pageNum > 1) {
        this.prev = true;
      }
    };

    // Pagination functions
    this.nextPage = () => {
      $state.go('.', {page: pageNum + 1}, {notify: false});
    };
    this.previousPage = () => {
      $state.go('.', {page: pageNum - 1}, {notify: false});
    };
  }
}

export const paginationLinks = {
  controller: paginationController,
  template: require('./pagination.html'),
  bindings: {
    paging: '<'
  }
};

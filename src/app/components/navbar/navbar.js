class navController {
  constructor() {
    this.$onInit = () => {
      this.isNavCollapsed = true;
      this.isCollapsed = false;
    };
  }
}

export default {
  template: require('./navbar.html'),
  controller: navController
};

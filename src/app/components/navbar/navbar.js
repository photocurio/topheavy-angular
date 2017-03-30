class navController {
  constructor() {
    this.$onInit = () => {
      this.isNavCollapsed = true;
      this.isCollapsed = false;
    };
  }
}

export const navbar = {
  template: require('./navbar.html'),
  controller: navController
};

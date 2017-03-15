module.exports = {
  template: require('./navbar.html'),
  controller: navController
};

/** @ngInject */
function navController() {
  var SELF = this;
  SELF.$onInit = function(){
    SELF.isNavCollapsed = true;
    SELF.isCollapsed = false;
  };
}

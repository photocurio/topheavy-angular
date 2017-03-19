module.exports = {
  controller: collectionController,
  template: require('./collection.html'),
  bindings: {
    collection: '<'
  }
};

/** @ngInject */
function collectionController($state, $log) {


  var SELF = this;

  SELF.$onInit = function(){
    SELF.stateName = $state.current.name;
  };

}

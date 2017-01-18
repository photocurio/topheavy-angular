module.exports = {
  template: require('./techs.html'),
  controller: TechsController
};

/** @ngInject */
function TechsController($http) {
  var vm = this;

  $http.get('app/techs/techs.json')
    .then(function (response) {
      vm.techs = response.data;
    });
}

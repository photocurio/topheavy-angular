var WPAPI = require('wpapi');

module.exports = {
  controller: singleController,
  template: require('./single.html')
};

/** @ngInject */
function singleController(wpApiFactory, $stateParams) {

  var SELF = this;

  var slug = $stateParams.slug;

  SELF.$onInit = function () {

    wpApiFactory.getPost(slug).then(function (response) {
      SELF.post = response[0];
    });

  };
}

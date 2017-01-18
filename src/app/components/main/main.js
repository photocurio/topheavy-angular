var WPAPI = require('wpapi');

module.exports = {
  controller: mainController,
  template: require('./main.html')
};

/** @ngInject */
function mainController(wpApiFactory) {

  var SELF = this;

  SELF.$onInit = function () {
    wpApiFactory.getPostsByCategory(3).then(function (response) {
      for (var i = 0; i < response.length; i++) {
        var postDate = response[i].date;
        response[i].year = postDate.substring(0, 4);
        response[i].month = postDate.substring(5, 7);
      }
      SELF.posts = response;
    });
  };
}

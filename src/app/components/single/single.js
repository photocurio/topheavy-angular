import Prism from 'prismjs';
import 'prismjs/components/prism-php';
import 'prismjs/components/prism-yaml';

class singleController {
  constructor ($element, $timeout, $log, $state) {
    'ngInject';
    this.$onInit = () => {
      $element.addClass('single-post');
      this.stateName = $state.current.name;
    };

    this.$postLink = () => {
      $timeout(Prism.highlightAll, 0);
    };
  }
}

export default {
  controller: singleController,
  template: require('./single.html'),
  bindings: {
    single: '<'
  }
};

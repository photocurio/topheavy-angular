module.exports = highlightService;

var hljs = require('../../node_modules/highlight.js/lib/highlight');
hljs.registerLanguage('css', require('../../node_modules/highlight.js/lib/languages/css'));
hljs.registerLanguage('javascript', require('../../node_modules/highlight.js/lib/languages/javascript'));
hljs.registerLanguage('php', require('../../node_modules/highlight.js/lib/languages/php'));
hljs.registerLanguage('xml', require('../../node_modules/highlight.js/lib/languages/xml'));

function highlightService(){
  return hljs;
}

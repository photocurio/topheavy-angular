module.exports = Prism;

var prism = require('prismjs');

require('prismjs/components/prism-php');
require('prismjs/components/prism-yaml');

function Prism(){
  return prism;
}

var pug = require('pug');

var rendered = pug.compile('p Hello world #{name}');

var options = {
	name: 'Manoj'
}

var html = rendered(options);

console.log(html);
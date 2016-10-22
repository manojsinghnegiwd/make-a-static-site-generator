var pug = require('pug');
var fs = require('fs');

var rendered = pug.compile('p Hello world #{name}');

var options = {
	name: 'Manoj'
}

var html = rendered(options);

fs.readFile('options.json', 'utf8', function(err, data) {

	if(err) {
		return console.log(err);
	}

	console.log(data)

})

console.log(html);
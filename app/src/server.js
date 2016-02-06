
var express = require('express')
  , app = express()
  , port = 3000
;

app.get('/', function (req, res) {
	res.sendfile('index.html', {root: __dirname});
});

app.listen(port, function () {
	console.log('Listening on port ' + port + '...');
});
const express = require('express');
//const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var app = express();

app.set('views', __dirname + '/public/views');
app.set('view engine', 'jade');
app.use(express.static(__dirname));

app.get('/tpl/:tplPath', function(req, res) {
	res.render('tpl/' + req.params.tplPath);
});

app.get('/', function(req, res) {
	res.render('index');
});

const port = 8080;
app.listen(port);
console.log('Listening on port ' + port + '...');
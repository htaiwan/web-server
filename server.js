var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;

var middleware = require('./middleware.js');

// 一定要在最上面呼叫
// app.use(middleware.requireAuthentication);
app.use(middleware.logger);

// app.get('/', function (req, res) {
// 	res.send('Hello express!');
// });

// 可以specifc function 加上middleare
app.get('/about', middleware.requireAuthentication ,function (req, res) {
	res.send('About us');
});

// 預設的根目錄 localhost:3000
app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
	console.log('啟動server on port ' + PORT + ' !');
});
var express = require('express');
var app = express();
var path = require('path');
const PORT = 3000;

//SERVO LA INDEX.HTML
app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, "..", "client", "index.html"));
});


app.listen(PORT, function () {
	console.log('server start at http://localhost:' + PORT);
});
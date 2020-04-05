
var request = require('request');
var express = require('express');
var app = express();

app.set("view engine", "ejs");


app.get("/results", function(req, res) {
  var query = req.query.search;
  var url = 'http://www.omdbapi.com/?s=' + query+ '&apikey=thewdb';
  console.log(url);
	request(url, function(error, response, body) {
		if (!error && response.statusCode == 200) {
      let data = JSON.parse(body);
    			res.render("results", { data: data});
		}
	});
});

app.get("/", function(req, res) {
    res.render("search");
});

app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Movie App has started!!!");
});

var port = 8080;
var http = require('http');

app.set('port', port);

var server = http.createServer(app);

server.listen(port);

server.on('listening', () => {
  console.log("Listening on %s", server.address);
});

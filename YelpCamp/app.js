var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render('landing');
});

app.get("/campgrounds", function(req, res) {
  var campgrounds = [ {name: "Salmon Creek", image: "https://www.nps.gov/grte/planyourvisit/images/JLCG_tents_Teewinot_2008_mattson_1.JPG?maxwidth=1200&maxheight=1200&autorotate=false"},
          {name: "Denver Creek", image: "https://www.reserveamerica.com/webphotos/racms/articles/images/bca19684-d902-422d-8de2-f083e77b50ff_image2_GettyImages-677064730.jpg"},
          {name: "High Creek", image: "https://www.tripsavvy.com/thmb/_53DJlF2moX8TVxzVgg6JyWLjkk=/950x0/filters:no_upscale():max_bytes(150000):strip_icc()/sunrise-camping--676019412-5b873a5a46e0fb0050f2b7e0.jpg"}
        ]
        res.render("campgrounds", {campgrounds: campgrounds});
});

var port = 8080;
var http = require('http');

app.set('port', port);

var server = http.createServer(app);

server.listen(port);

server.on('listening', () => {
  console.log("Listening on %s", server.address);
});

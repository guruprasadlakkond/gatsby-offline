"use strict";


var express = require("express");

var app = express();

app.use(express.static(__dirname + "/public/"));

var port = process.env.PORT || 5000;
var server = app.listen(port, function() {
  console.log("Server is running on port " + port);
});

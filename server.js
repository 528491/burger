var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var routes = require("./burger/controllers/burgers_controller.js");

var app = express();
var PORT = process.env.PORT || 3000;

app.use(routes);
app.use(express.static("public"));


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});